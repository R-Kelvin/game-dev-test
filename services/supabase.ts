import AsyncStorage from '@react-native-async-storage/async-storage';

export type SupabaseSession = {
  access_token: string;
  refresh_token: string;
  expires_at?: number;
  user: {
    id: string;
    email?: string;
  };
};

export type Profile = {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  data_nascimento: string;
  created_at?: string;
};

type SignUpParams = {
  email: string;
  password: string;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

type SignInParams = {
  email: string;
  password: string;
};

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
const SESSION_KEY = '@last_light_way:supabase_session';

const assertSupabaseConfig = () => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      'Configure EXPO_PUBLIC_SUPABASE_URL e EXPO_PUBLIC_SUPABASE_ANON_KEY para usar o Supabase.',
    );
  }
};

const getUrl = (path: string) => {
  assertSupabaseConfig();
  return `${SUPABASE_URL}${path}`;
};

const getHeaders = (accessToken?: string): Record<string, string> => {
  assertSupabaseConfig();
  const anonKey = SUPABASE_ANON_KEY as string;

  return {
    apikey: anonKey,
    Authorization: `Bearer ${accessToken ?? anonKey}`,
    'Content-Type': 'application/json',
  };
};

const parseResponse = async <T>(response: Response): Promise<T> => {
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(getFriendlySupabaseError(data));
  }

  return data as T;
};

const getFriendlySupabaseError = (error: any) => {
  const message = String(error?.msg ?? error?.message ?? error?.error_description ?? '');
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('already') || lowerMessage.includes('registered')) {
    return 'Já existe uma conta cadastrada com este e-mail.';
  }

  if (lowerMessage.includes('invalid login') || lowerMessage.includes('invalid credentials')) {
    return 'E-mail ou senha inválidos.';
  }

  if (lowerMessage.includes('email')) {
    return 'Verifique o e-mail informado.';
  }

  if (lowerMessage.includes('password')) {
    return 'Verifique a senha informada.';
  }

  return message || 'Não foi possível concluir a operação. Tente novamente.';
};

const formatDate = (date: Date) => date.toISOString().split('T')[0];

const persistSession = async (session: SupabaseSession | null) => {
  if (!session) {
    await AsyncStorage.removeItem(SESSION_KEY);
    return;
  }

  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

const mapSession = (data: any): SupabaseSession => ({
  access_token: data.access_token,
  refresh_token: data.refresh_token,
  expires_at: data.expires_in ? Math.floor(Date.now() / 1000) + data.expires_in : undefined,
  user: {
    id: data.user.id,
    email: data.user.email,
  },
});

export const supabaseService = {
  async signUp(params: SignUpParams) {
    const response = await fetch(getUrl('/auth/v1/signup'), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        email: params.email,
        password: params.password,
        data: {
          nome: params.nome,
          sobrenome: params.sobrenome,
          data_nascimento: formatDate(params.dataNascimento),
        },
      }),
    });

    const data = await parseResponse<any>(response);
    const userId = data.user?.id;

    if (!userId) {
      throw new Error('Não foi possível criar o usuário no Supabase Auth.');
    }

    const session = data.access_token ? mapSession(data) : null;

    const profile = {
      id: userId,
      nome: params.nome,
      sobrenome: params.sobrenome,
      email: params.email,
      data_nascimento: formatDate(params.dataNascimento),
    };

    if (session) {
      await this.upsertProfile(profile, session.access_token);
    }

    if (session) {
      await persistSession(session);
    }

    return {
      session,
      profile: session ? await this.getProfile(userId, session.access_token) : profile,
    };
  },

  async signIn(params: SignInParams) {
    const response = await fetch(getUrl('/auth/v1/token?grant_type=password'), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        email: params.email,
        password: params.password,
      }),
    });

    const session = mapSession(await parseResponse<any>(response));
    await persistSession(session);

    return {
      session,
      profile: await this.getProfile(session.user.id, session.access_token),
    };
  },

  async signOut(accessToken?: string) {
    if (accessToken) {
      await fetch(getUrl('/auth/v1/logout'), {
        method: 'POST',
        headers: getHeaders(accessToken),
      });
    }

    await persistSession(null);
  },

  async getStoredSession() {
    const storedSession = await AsyncStorage.getItem(SESSION_KEY);
    return storedSession ? (JSON.parse(storedSession) as SupabaseSession) : null;
  },

  async restoreSession() {
    const storedSession = await this.getStoredSession();

    if (!storedSession) {
      return null;
    }

    if (!storedSession.expires_at || storedSession.expires_at > Math.floor(Date.now() / 1000) + 60) {
      return storedSession;
    }

    const response = await fetch(getUrl('/auth/v1/token?grant_type=refresh_token'), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        refresh_token: storedSession.refresh_token,
      }),
    });

    const session = mapSession(await parseResponse<any>(response));
    await persistSession(session);
    return session;
  },

  async upsertProfile(profile: Omit<Profile, 'created_at'>, accessToken?: string) {
    const response = await fetch(getUrl('/rest/v1/profiles'), {
      method: 'POST',
      headers: {
        ...getHeaders(accessToken),
        Prefer: 'return=minimal,resolution=merge-duplicates',
      },
      body: JSON.stringify(profile),
    });

    await parseResponse(response);
  },

  async getProfile(userId: string, accessToken?: string) {
    const response = await fetch(getUrl(`/rest/v1/profiles?id=eq.${userId}&select=*`), {
      method: 'GET',
      headers: getHeaders(accessToken),
    });

    const profiles = await parseResponse<Profile[]>(response);
    return profiles[0] ?? null;
  },
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
};

type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: Date | null;
};

type LoginData = {
  email: string;
  password: string;
};

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: () => Promise<void>;
};

const USERS_KEY = '@last_light_way:users';
const AUTH_USER_KEY = '@last_light_way:auth_user';

const AuthContext = createContext<AuthContextValue | null>(null);

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const readUsers = async (): Promise<User[]> => {
  const storedUsers = await AsyncStorage.getItem(USERS_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
};

const saveUsers = async (users: User[]) => {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const validateRequired = (value: string, message: string) => {
  if (!value.trim()) {
    throw new Error(message);
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      try {
        const storedUser = await AsyncStorage.getItem(AUTH_USER_KEY);
        if (isMounted && storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const register = async (data: RegisterData) => {
    validateRequired(data.firstName, 'Informe seu nome.');
    validateRequired(data.lastName, 'Informe seu sobrenome.');
    validateRequired(data.email, 'Informe seu e-mail.');
    validateRequired(data.password, 'Informe sua senha.');
    validateRequired(data.confirmPassword, 'Confirme sua senha.');

    const email = normalizeEmail(data.email);

    if (!emailRegex.test(email)) {
      throw new Error('Informe um e-mail válido.');
    }

    if (data.password.length < 6) {
      throw new Error('A senha deve ter pelo menos 6 caracteres.');
    }

    if (data.password !== data.confirmPassword) {
      throw new Error('A senha e a confirmação precisam ser iguais.');
    }

    if (!data.birthDate) {
      throw new Error('Informe sua data de nascimento.');
    }

    if (data.birthDate > new Date()) {
      throw new Error('A data de nascimento não pode estar no futuro.');
    }

    const users = await readUsers();
    const emailAlreadyExists = users.some((storedUser) => storedUser.email === email);

    if (emailAlreadyExists) {
      throw new Error('Já existe uma conta cadastrada com este e-mail.');
    }

    const newUser: User = {
      id: `${Date.now()}-${email}`,
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email,
      password: data.password,
      birthDate: data.birthDate.toISOString(),
    };

    const nextUsers = [...users, newUser];
    await saveUsers(nextUsers);
    await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = async (data: LoginData) => {
    validateRequired(data.email, 'Informe seu e-mail.');
    validateRequired(data.password, 'Informe sua senha.');

    const email = normalizeEmail(data.email);

    if (!emailRegex.test(email)) {
      throw new Error('Informe um e-mail válido.');
    }

    const users = await readUsers();
    const foundUser = users.find(
      (storedUser) => storedUser.email === email && storedUser.password === data.password,
    );

    if (!foundUser) {
      throw new Error('E-mail ou senha inválidos.');
    }

    await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(foundUser));
    setUser(foundUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(AUTH_USER_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isLoading,
      register,
      login,
      logout,
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  }

  return context;
}

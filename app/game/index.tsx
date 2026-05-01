import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const sprites = {
  aiko_seria: require('../../assets/aiko_seria.png'),
  aiko_timida: require('../../assets/aiko_timida.png'),
  aiko_tchau: require('../../assets/aiko_tchau.png'),
  aiko_curiosa: require('../../assets/aiko_curiosa.png'),
  aiko_rindo: require('../../assets/aiko_rindo.png'),
  aiko_procurando: require('../../assets/aiko_procurando.png'),
  aiko_guardachuvaL: require('../../assets/aiko_guardachuvaL.png'),
  aiko_sorrisoleve: require('../../assets/aiko_sorrisoleve.png'),
  aiko_apreensiva: require('../../assets/aiko_apreensiva.png'),

  rin_curious: require('../../assets/rin_curious.png'),
  rin_badsurprise: require('../../assets/rin_badsurprise.png'),
  rin_medo: require('../../assets/rin_medo.png'),
  rin_falando: require('../../assets/rin_falando.png'),
  rin_normal: require('../../assets/rin_normal.png'),
  rin_tchau: require('../../assets/rin_tchau.png'),

  misuki_normal: require('../../assets/misuki_normal.png'),
  misuki_falando: require('../../assets/misuki_falando.png'),
  misuki_tchau: require('../../assets/misuki_tchau.png'),
  misuki_curious: require('../../assets/misuki_curious.png'),

  vendedor_serio: require('../../assets/vendedor_serio.png'),
  vendedor_explicando: require('../../assets/vendedor_explicando.png'),
} as const;

type SpriteKey = keyof typeof sprites;

const cenas = {
  cena1: {
    background: require('../../assets/apreseinicial.png'),
    proxima: 'cena2',
    dialogos: [
      { nome: '', texto: '*A luz do fim de tarde entra pela janela, desenhando sombras longas sobre as mesas.*' },
      { nome: '', texto: '*O barulho da aula parece distante… como se não fosse comigo.*' },
      { nome: '', texto: 'Mais um dia acabando...' },
      { nome: '', texto: '*Meu olhar escapa para fora da sala.*' },
      { nome: '', texto: '*Lá embaixo, as pessoas caminham pela rua sem parar.*' },
      { nome: '', texto: 'Elas vão e voltam… como se já soubessem exatamente pra onde ir.' },
      { nome: '', texto: '*Carros passam. Pessoas atravessam. Algumas conversam, outras só seguem em frente.*' },
      { nome: '', texto: 'Todo mundo parece tão decidido… mesmo quando não está.' },
      { nome: '', texto: '*Apoio o queixo na mão, observando.*' },
      { nome: '', texto: 'Fico imaginando o caminho que cada pessoa percorreu até passar por aqui...' },
      { nome: '', texto: 'Quantas ruas… quantas escolhas… quantos dias iguais a esse.' },
      { nome: '', texto: '*Uma leve brisa entra pela janela, fazendo as cortinas se moverem devagar.*' },
      { nome: '', texto: 'É estranho pensar que cada uma dessas pessoas tem uma vida inteira acontecendo.' },
      { nome: '', texto: 'Problemas… planos… preocupações...' },
      { nome: '', texto: '*Fecho os olhos por um instante.*' },
      { nome: '', texto: 'Tudo tão… próprio.' },
      { nome: '', texto: 'Tão distante de mim.' },
      { nome: '', texto: '*O som do professor ao fundo vira apenas um ruído.*' },
      { nome: '', texto: 'Eu poderia ficar aqui olhando por horas...' },
      { nome: '', texto: '*Abro os olhos novamente.*' },
      { nome: '', texto: 'Me pergunto se um dia eu vou ser assim também...' },
      { nome: '', texto: 'Uma adulta com certeza.' },
      { nome: '', texto: 'Com um caminho definido.' },
      { nome: '', texto: 'Sem precisar pensar tanto.' },
      { nome: '', texto: '*Um som mais alto invade a sala — cadeiras sendo arrastadas.*' },
      { nome: '', texto: '*Conversas começam a surgir ao redor.*' },
      { nome: '', texto: 'A aula acabou...' },
      { nome: '', texto: 'E eu nem percebi.' },
      { nome: '', texto: '*Os alunos começam a sair, passando por mim.*' },
      { nome: '', texto: '*Eu demoro um pouco mais para me levantar.*' },
      { nome: '', texto: '*Por um instante…*' },
      { nome: '', texto: '*Sinto como se tivesse esquecido alguma coisa.*' },
      { nome: '', texto: '*Olho ao redor da sala rapidamente.*' },
      { nome: '', texto: '*Mas tudo parece normal.*' },
      { nome: '', texto: '*Então apenas ignoro.*' },
      { nome: '', texto: '*Pego minha bolsa.*' },
      { nome: '', texto: '*E caminho em direção à porta.*' },
    ],
  },

  cena2: {
    background: require('../../assets/saidaescola.png'),
    proxima: 'cena3',
    dialogos: [
      { nome: '', texto: '*Saio da escola junto com os últimos alunos.*' },
      { nome: '', texto: '*O céu já está escurecendo.*' },
      { nome: '', texto: '*A luz do fim de tarde desapareceu quase sem que eu percebesse.*' },
      { nome: '', texto: '*Alguns grupos conversam perto do portão.*' },
      { nome: '', texto: '*Outros já seguem seus próprios caminhos.*' },
      { nome: 'Rin', texto: 'Aiko!', sprite: 'rin_falando' },
      { nome: '', texto: '*Viro o rosto.*', manterSprites: ['rin_curious', 'misuki_curious'] },
      { nome: 'Misuki', texto: 'Você já vai?', sprite: 'misuki_falando' },
      {
        nome: 'Aiko',
        texto: 'Vou… preciso passar em um lugar pra minha mãe antes de ir pra casa.',
        sprite: 'aiko_seria',
      },
      { nome: 'Rin', texto: 'De novo isso?', sprite: 'rin_curious' },
      {
        nome: '',
        texto: '*Dou de ombros, olhando rapidamente pra rua.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      {
        nome: 'Aiko',
        texto: 'Algumas lâmpadas queimaram… então preciso comprar.',
        sprite: 'aiko_seria',
      },
      { nome: 'Misuki', texto: 'Onde é? A gente pode ir junto.', sprite: 'misuki_curious' },
      {
        nome: '',
        texto: '*Hesito por um instante.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      {
        nome: 'Aiko',
        texto: 'É bem perto da minha casa… vocês não iam pelo mesmo caminho.',
        sprite: 'aiko_apreensiva',
      },
      { nome: 'Rin', texto: 'Hmm…', sprite: 'rin_curious' },
      {
        nome: '',
        texto: '*Rin observa meu rosto como se tentasse entender melhor.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      { nome: 'Misuki', texto: 'Mas a gente podia ir com você um dia.', sprite: 'misuki_falando' },
      { nome: 'Aiko', texto: 'Não precisa… sério.', sprite: 'aiko_seria' },
      {
        nome: '',
        texto: '*Respondo mais rápido do que devia.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      {
        nome: '',
        texto: '*Percebo isso um segundo depois.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      {
        nome: 'Aiko',
        texto: 'Quer dizer… não tem nada demais lá.',
        sprite: 'aiko_timida',
      },
      { nome: 'Rin', texto: 'Então qual o problema?', sprite: 'rin_falando' },
      {
        nome: '',
        texto: '*Fico em silêncio por um instante.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      {
        nome: 'Aiko',
        texto: 'Acho que… eu só prefiro ir sozinha.',
        sprite: 'aiko_timida',
      },
      { nome: 'Misuki', texto: 'Ah…', sprite: 'misuki_normal' },
      {
        nome: '',
        texto: '*Misuki não insiste.*',
        manterSprites: ['rin_curious', 'misuki_curious'],
      },
      { nome: 'Rin', texto: 'Bom… então toma cuidado.', sprite: 'rin_normal' },
      {
        nome: '',
        texto: '*Rin aponta com o queixo pra rua.*',
        manterSprites: ['rin_normal', 'misuki_curious'],
      },
      { nome: 'Rin', texto: 'Já tá ficando meio vazio.', sprite: 'rin_normal' },
      {
        nome: '',
        texto: '*Olho na mesma direção.*',
        manterSprites: ['rin_normal', 'misuki_curious'],
      },
      {
        nome: '',
        texto: '*Algumas pessoas ainda passam… mas bem menos do que antes.*',
        manterSprites: ['rin_normal', 'misuki_curious'],
      },
      { nome: 'Aiko', texto: 'Eu tô acostumada.', sprite: 'aiko_seria' },
      { nome: 'Misuki', texto: 'Mesmo assim.', sprite: 'misuki_falando' },
      { nome: 'Aiko', texto: 'Tá bom.', sprite: 'aiko_sorrisoleve' },
      {
        nome: '',
        texto: '*Elas acenam.*',
        manterSprites: ['rin_tchau', 'misuki_tchau'],
      },
      { nome: 'Misuki', texto: 'Até amanhã, Aiko.', sprite: 'misuki_tchau' },
      { nome: 'Aiko', texto: 'Até.', sprite: 'aiko_tchau' },
      { nome: '', texto: '*Começo a andar.*' },
      { nome: '', texto: '*Depois de alguns passos…*' },
      { nome: '', texto: '*Sinto que ainda estão me olhando.*' },
      { nome: '', texto: '*Como se quisessem dizer mais alguma coisa.*' },
      { nome: '', texto: '*Mas não dizem.*' },
      { nome: '', texto: '*E eu também não paro.*' },
      { nome: '', texto: '*Só continuo andando.*' },
    ],
  },

  cena3: {
    background: require('../../assets/PO2.png'),
    proxima: 'cena4',
    dialogos: [
      { nome: '', texto: '*A rua está mais silenciosa agora.*' },
      { nome: '', texto: '*O movimento da escola ficou para trás.*' },
      { nome: '', texto: '*As luzes dos postes refletem no asfalto molhado.*' },
      { nome: '', texto: '*Um ônibus se aproxima ao longe.*' },
      { nome: '', texto: '*O som do motor quebra o silêncio por alguns segundos.*' },
      { nome: 'Aiko', texto: 'Ainda passa ônibus essa hora…', sprite: 'aiko_seria' },
      { nome: '', texto: '*Diminuo o passo ao me aproximar do ponto.*' },
      { nome: '', texto: '*Tem apenas uma mulher lá…*' },
      { nome: '', texto: '*Mas não presto muita atenção.*' },
      { nome: '', texto: '*Só de relance.*' },
      { nome: 'Aiko', texto: '…', sprite: 'aiko_curiosa' },
      { nome: '', texto: '*O ônibus passa direto.*' },
      { nome: '', texto: '*Sem parar.*' },
      { nome: '', texto: '*Continuo andando.*' },
    ],
  },

  cena4: {
    background: require('../../assets/beco2.png'),
    proxima: 'cena5',
    dialogos: [
      { nome: '', texto: '*O caminho vai ficando mais vazio.*' },
      { nome: '', texto: '*As casas ficam mais próximas umas das outras.*' },
      { nome: '', texto: '*As luzes… mais fracas.*' },
      { nome: '', texto: '*Paro por um instante na entrada do beco.*' },
      { nome: 'Aiko', texto: '…', sprite: 'aiko_curiosa' },
      { nome: '', texto: '*É o mesmo caminho de sempre.*' },
      { nome: '', texto: '*Mas…*' },
      { nome: '', texto: '*Escuro demais.*' },
      { nome: '', texto: '*Levo a mão até a bolsa.*' },
      { nome: '', texto: '*Tiro a lanterna.*' },
      { nome: '', texto: '*Pressiono o botão.*' },
      { nome: '', texto: '*A luz acende… fraca.*' },
      { nome: '', texto: '*Pisca uma vez.*' },
      { nome: 'Aiko', texto: 'De novo não…', sprite: 'aiko_procurando' },
      { nome: '', texto: '*Dou uma leve batida nela.*' },
      { nome: '', texto: '*A luz estabiliza.*' },
      { nome: 'Aiko', texto: '…', sprite: 'aiko_procurando' },
      { nome: '', texto: '*Aponto a lanterna para dentro do beco.*' },
      { nome: '', texto: '*A luz não alcança muito longe.*' },
      { nome: '', texto: '*Mesmo assim…*' },
      { nome: '', texto: '*Começo a andar.*' },
      { nome: '', texto: '*O som dos meus passos ecoa mais do que deveria.*' },
      { nome: '', texto: '*Como se o espaço fosse maior do que parece.*' },
      { nome: '', texto: '*Aperto a lanterna com mais força.*' },
      { nome: '', texto: '*E sigo em frente.*' },
    ],
  },

  cena5: {
    background: require('../../assets/beco1.png'),
    proxima: 'cena6',
    dialogos: [
      { nome: '', texto: '*No final do beco…*' },
      { nome: '', texto: '*A luz aparece.*' },
      { nome: '', texto: '*Quente.*' },
      { nome: '', texto: '*Por sorte, essa loja fecha tarde.*' },
    ],
  },

  cena6: {
    background: require('../../assets/lightshop.png'),
    proxima: 'cena7',
    dialogos: [
      { nome: '', texto: '*Empurro a porta.*' },
      { nome: '', texto: '*Um pequeno sino toca.*' },
      { nome: '', texto: '*O calor me envolve imediatamente.*' },
      { nome: '', texto: '*As luzes preenchem todo o espaço.*' },
      { nome: '', texto: '*É difícil olhar para um ponto só.*' },
      { nome: '', texto: '*As luzes quase fazem meus olhos arderem.*' },
      { nome: '', texto: '*Deve ser por isso que o vendedor usa óculos aqui dentro.*' },
      { nome: 'Aiko', texto: '…', sprite: 'aiko_curiosa' },
      { nome: '', texto: '*Dou alguns passos para dentro.*' },
      { nome: 'Vendedor', texto: 'Boa noite, Aiko.', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'Olá, Sr. Takashi.', sprite: 'aiko_sorrisoleve' },
      { nome: 'Aiko', texto: 'Minha mãe me mandou aqui comprar lâmpadas.', sprite: 'aiko_seria' },
      { nome: 'Vendedor', texto: 'Queimaram outra vez?', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'Sim.', sprite: 'aiko_seria' },
      { nome: 'Vendedor', texto: 'Certo… deixa eu ver… As mesmas de sempre?', sprite: 'vendedor_explicando' },
      { nome: 'Aiko', texto: 'As de sempre, por favor.', sprite: 'aiko_sorrisoleve' },
    ],
  },

  cena7: {
    background: require('../../assets/lightshop.png'),
    proxima: null,
    dialogos: [
      {
        nome: '',
        texto: '*O vendedor se vira e começa a procurar por algo.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*Ele já estava quase encontrando, quando é interrompido por um novo cliente…*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*Que eu quase nem percebi que entrou.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*Era um senhor, aparentemente de uns 50 anos.*',
        manterSprites: ['vendedor_serio'],
      },
      { nome: 'Vendedor', texto: 'Posso ajudar, senhor?', sprite: 'vendedor_serio' },
      {
        nome: '',
        texto: '*O homem olha ao redor, como se estivesse procurando alguma coisa.*',
        manterSprites: ['vendedor_serio'],
      },
      { nome: 'Homem', texto: 'Eu estava procurando…' },
      { nome: 'Vendedor', texto: 'Estava procurando…?', sprite: 'vendedor_serio' },
      {
        nome: '',
        texto: '*Ele franze a testa por um instante.*',
        manterSprites: ['vendedor_serio'],
      },
      { nome: 'Homem', texto: '… Esquece.' },
      {
        nome: '',
        texto: '*O homem se vira e vai embora.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*Como se tivesse esquecido não só o que queria… mas também o motivo de ter entrado ali.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*O vendedor volta a fazer o que estava fazendo.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*O silêncio se instala por alguns segundos.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*Decido quebrar.*',
        manterSprites: ['vendedor_serio'],
      },
      { nome: 'Aiko', texto: 'Isso… acontece muito por aqui?', sprite: 'aiko_curiosa' },
      { nome: 'Vendedor', texto: 'O quê?', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'Os clientes esquecendo o que vieram fazer…', sprite: 'aiko_curiosa' },
      { nome: 'Aiko', texto: 'Deve ser essa a graça de trabalhar até essa hora.', sprite: 'aiko_sorrisoleve' },
      { nome: 'Vendedor', texto: '…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'Acontece.', sprite: 'vendedor_serio' },
      {
        nome: '',
        texto: '*Por algum motivo… acho que ele não entende de piadas.*',
        manterSprites: ['vendedor_serio'],
      },
      {
        nome: '',
        texto: '*Ele estende a mão com as lâmpadas.*',
        manterSprites: ['vendedor_explicando'],
      },
      { nome: 'Vendedor', texto: 'Aqui estão.', sprite: 'vendedor_explicando' },
      { nome: 'Vendedor', texto: 'Ah… e eu quase ia esquecendo.', sprite: 'vendedor_explicando' },
      {
        nome: '',
        texto: '*Ele pega o baleiro que está no cantinho do balcão e o aproxima de mim.*',
        manterSprites: ['vendedor_explicando'],
      },
      { nome: 'Vendedor', texto: 'Qual você quer?', sprite: 'vendedor_explicando' },
      { nome: 'Aiko', texto: 'Hm… as rosas.', sprite: 'aiko_curiosa' },
      {
        nome: '',
        texto: '*Digo, pegando a sacola com as lâmpadas.*',
        manterSprites: ['vendedor_serio'],
      },
      { nome: 'Vendedor', texto: 'Você sempre escolhe as rosas.', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'Bom… eu preciso ir.', sprite: 'aiko_seria' },
      { nome: 'Aiko', texto: 'Mamãe deve estar preocupada…', sprite: 'aiko_seria' },
      { nome: 'Aiko', texto: 'Muito obrigada, Sr. Takashi.', sprite: 'aiko_sorrisoleve' },
      {
        nome: '',
        texto: '*Ele acena gentilmente.*',
        manterSprites: ['vendedor_serio'],
      },
      { nome: '', texto: '*Dou meia-volta e caminho até a saída.*' },
      { nome: '', texto: '*O sino toca novamente quando empurro a porta.*' },
      { nome: '', texto: '*E o frio da rua me alcança de novo.*' },
    ],
  },
} as const;

type CenaKey = keyof typeof cenas;

export default function Game() {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeCena = useRef(new Animated.Value(0)).current;
  const spriteFade = useRef(new Animated.Value(0)).current;

  const meioOlhoAnim = useRef(new Animated.Value(0)).current;
  const olhoFechadoAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const isMobile = Platform.OS !== 'web';

  const [cenaAtual, setCenaAtual] = useState<CenaKey>('cena1');
  const [dialogoIndex, setDialogoIndex] = useState(0);
  const [textoVisivel, setTextoVisivel] = useState('');
  const [digitando, setDigitando] = useState(false);
  const [configAberta, setConfigAberta] = useState(false);
  const [volumeMusica, setVolumeMusica] = useState(60);

  const cena = cenas[cenaAtual];
  const dialogos = cena.dialogos;
  const dialogoAtual = dialogos[dialogoIndex];

  const spritesMantidos =
    'manterSprites' in dialogoAtual && dialogoAtual.manterSprites
      ? (dialogoAtual.manterSprites as readonly SpriteKey[])
      : [];

  const spritePrincipalKey =
    'sprite' in dialogoAtual && dialogoAtual.sprite
      ? (dialogoAtual.sprite as SpriteKey)
      : spritesMantidos.length === 1
        ? spritesMantidos[0]
        : null;

  const spriteAtual = spritePrincipalKey ? sprites[spritePrincipalKey] : null;

  const mostrarAmigas =
    cenaAtual === 'cena2' &&
    (
      dialogoAtual.nome === 'Rin' ||
      dialogoAtual.nome === 'Misuki' ||
      spritesMantidos.some((sprite) => sprite.startsWith('rin_')) ||
      spritesMantidos.some((sprite) => sprite.startsWith('misuki_'))
    );

  const rinSpriteKey =
    dialogoAtual.nome === 'Rin' && spritePrincipalKey
      ? spritePrincipalKey
      : spritesMantidos.find((sprite) => sprite.startsWith('rin_')) || 'rin_normal';

  const misukiSpriteKey =
    dialogoAtual.nome === 'Misuki' && spritePrincipalKey
      ? spritePrincipalKey
      : spritesMantidos.find((sprite) => sprite.startsWith('misuki_')) || 'misuki_normal';

  const rinFalando = dialogoAtual.nome === 'Rin';
  const misukiFalando = dialogoAtual.nome === 'Misuki';

  const fonteNome = Platform.select({
    ios: 'Georgia',
    android: 'serif',
    web: 'Georgia',
  });

  const girarEngrenagem = () => {
    rotateAnim.setValue(0);

    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1800,
      useNativeDriver: true,
    }).start();

    olhoFechadoAnim.setValue(1);
    meioOlhoAnim.setValue(0);

    Animated.sequence([
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(meioOlhoAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(olhoFechadoAnim, {
          toValue: 0.3,
          duration: 350,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(80),
      Animated.parallel([
        Animated.timing(meioOlhoAnim, {
          toValue: 0,
          duration: 450,
          useNativeDriver: true,
        }),
        Animated.timing(olhoFechadoAnim, {
          toValue: 0,
          duration: 450,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  useEffect(() => {
    let index = 0;

    setTextoVisivel('');
    setDigitando(true);

    const intervalo = setInterval(() => {
      setTextoVisivel(dialogoAtual.texto.slice(0, index + 1));
      index++;

      if (index >= dialogoAtual.texto.length) {
        clearInterval(intervalo);
        setDigitando(false);
      }
    }, 35);

    return () => clearInterval(intervalo);
  }, [dialogoIndex, cenaAtual]);

  useEffect(() => {
    spriteFade.setValue(0);

    if (spriteAtual || mostrarAmigas) {
      Animated.timing(spriteFade, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }
  }, [dialogoIndex, cenaAtual]);

  const trocarCena = () => {
    const proximaCena = cena.proxima;

    if (proximaCena && cenas[proximaCena as CenaKey]) {
      Animated.timing(fadeCena, {
        toValue: 1,
        duration: 550,
        useNativeDriver: true,
      }).start(() => {
        setCenaAtual(proximaCena as CenaKey);
        setDialogoIndex(0);
        setTextoVisivel('');

        Animated.timing(fadeCena, {
          toValue: 0,
          duration: 550,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const handlePress = () => {
    if (configAberta) return;

    if (digitando) {
      setTextoVisivel(dialogoAtual.texto);
      setDigitando(false);
      return;
    }

    if (dialogoIndex < dialogos.length - 1) {
      setDialogoIndex(dialogoIndex + 1);
    } else {
      trocarCena();
    }
  };

  const diminuirVolume = () => {
    setVolumeMusica((valor) => Math.max(0, valor - 10));
  };

  const aumentarVolume = () => {
    setVolumeMusica((valor) => Math.min(100, valor + 10));
  };

  const salvarJogo = () => {
    console.log('Jogo salvo:', {
      cenaAtual,
      dialogoIndex,
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePress}
      style={{ flex: 1, backgroundColor: '#000' }}
    >
      <Image
        source={cena.background}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />

      {cenaAtual === 'cena1' && (
        <>
          <Animated.Image
            source={require('../../assets/olhos_meio_abertos.png')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: meioOlhoAnim,
              zIndex: 1,
            }}
            resizeMode="cover"
          />

          <Animated.Image
            source={require('../../assets/olhos_fechados.png')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: olhoFechadoAnim,
              zIndex: 2,
            }}
            resizeMode="cover"
          />
        </>
      )}

      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.32)',
          zIndex: 3,
        }}
      />

      {mostrarAmigas ? (
        <>
          <Animated.Image
            source={sprites[rinSpriteKey as SpriteKey]}
            style={{
              position: 'absolute',
              bottom: isMobile ? -190 : -120,
              left: isMobile ? '24%' : '28%',
              width: isMobile ? 290 : 500,
              height: isMobile ? 740 : 830,
              opacity: spriteFade,
              zIndex: rinFalando ? 7 : 6,
              transform: [{ scale: rinFalando ? 1.05 : 0.96 }],
            }}
            resizeMode="contain"
          />

          <Animated.Image
            source={sprites[misukiSpriteKey as SpriteKey]}
            style={{
              position: 'absolute',
              bottom: isMobile ? -190 : -120,
              right: isMobile ? '24%' : '28%',
              width: isMobile ? 290 : 500,
              height: isMobile ? 740 : 830,
              opacity: spriteFade,
              zIndex: misukiFalando ? 7 : 6,
              transform: [{ scale: misukiFalando ? 1.05 : 0.96 }],
            }}
            resizeMode="contain"
          />
        </>
      ) : (
        spriteAtual && (
          <Animated.Image
            source={spriteAtual}
            style={{
              position: 'absolute',
              bottom: isMobile ? -190 : -120,
              left: '50%',
              transform: [{ translateX: -((isMobile ? 310 : 560) / 2) }],
              width: isMobile ? 310 : 560,
              height: isMobile ? 760 : 860,
              opacity: spriteFade,
              zIndex: 6,
            }}
            resizeMode="contain"
          />
        )
      )}

      <TouchableOpacity
        onPress={() => {
          girarEngrenagem();
          setConfigAberta(true);
        }}
        activeOpacity={0.8}
        style={{
          position: 'absolute',
          top: isMobile ? 18 : 28,
          right: isMobile ? 24 : 36,
          width: isMobile ? 38 : 48,
          height: isMobile ? 38 : 48,
          borderRadius: 999,
          backgroundColor: 'rgba(18, 5, 35, 0.75)',
          borderWidth: 1,
          borderColor: 'rgba(190, 130, 255, 0.75)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <Animated.Image
          source={require('../../assets/gear.png')}
          style={{
            width: isMobile ? 32 : 42,
            height: isMobile ? 32 : 42,
            transform: [
              {
                rotate: rotateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '120deg'],
                }),
              },
            ],
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View
        style={{
          position: 'absolute',
          bottom: isMobile ? 20 : 36,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: isMobile ? 10 : 40,
          zIndex: 10,
        }}
      >
        <View
          style={{
            width: isMobile ? '88%' : Math.min(width * 0.72, 900),
            minHeight: isMobile ? 80 : 120,
            backgroundColor: 'rgba(18, 5, 35, 0.62)',
            borderRadius: isMobile ? 18 : 24,
            borderWidth: 1.3,
            borderColor: 'rgba(190, 130, 255, 0.65)',
            paddingHorizontal: isMobile ? 18 : 30,
            paddingTop: isMobile ? 26 : 34,
            paddingBottom: isMobile ? 14 : 22,
            shadowColor: '#9b4dff',
            shadowOpacity: 0.6,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: 0 },
            elevation: 12,
          }}
        >
          {dialogoAtual.nome !== '' && (
            <View
              style={{
                position: 'absolute',
                top: isMobile ? -17 : -22,
                left: isMobile ? 22 : 30,
                minWidth: isMobile ? 108 : 145,
                height: isMobile ? 34 : 42,
                backgroundColor: 'rgba(42, 8, 75, 0.95)',
                borderRadius: 14,
                borderWidth: 1.2,
                borderColor: 'rgba(210, 160, 255, 0.85)',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 18,
                shadowColor: '#b45cff',
                shadowOpacity: 0.7,
                shadowRadius: 10,
                elevation: 8,
              }}
            >
              <Text
                style={{
                  color: '#f7edff',
                  fontSize: isMobile ? 16 : 20,
                  fontFamily: fonteNome,
                  fontWeight: '700',
                  letterSpacing: 0.5,
                }}
              >
                {dialogoAtual.nome}
              </Text>
            </View>
          )}

          <Text
            style={{
              color: '#f8f2ff',
              fontSize: isMobile ? 16 : 21,
              lineHeight: isMobile ? 23 : 31,
              letterSpacing: 0.3,
            }}
          >
            {textoVisivel}
          </Text>

          {!digitando && (
            <Text
              style={{
                position: 'absolute',
                right: 18,
                bottom: 8,
                color: '#caaaff',
                fontSize: 14,
                opacity: 0.8,
              }}
            >
              ▶
            </Text>
          )}
        </View>
      </View>

      <Modal visible={configAberta} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.72)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              width: isMobile ? '78%' : 420,
              backgroundColor: 'rgba(18, 5, 35, 0.96)',
              borderRadius: 22,
              borderWidth: 1,
              borderColor: 'rgba(190, 130, 255, 0.65)',
              padding: isMobile ? 18 : 24,
            }}
          >
            <Text
              style={{
                color: '#f7edff',
                fontSize: isMobile ? 20 : 26,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 18,
              }}
            >
              Configurações
            </Text>

            <Text
              style={{
                color: '#d8c8ff',
                fontSize: isMobile ? 14 : 16,
                textAlign: 'center',
                marginBottom: 8,
              }}
            >
              Volume da música
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 18,
                gap: 14,
              }}
            >
              <TouchableOpacity
                onPress={diminuirVolume}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 999,
                  backgroundColor: '#d9c7ff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>−</Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: '#fff',
                  fontSize: isMobile ? 16 : 18,
                  minWidth: 60,
                  textAlign: 'center',
                }}
              >
                {volumeMusica}%
              </Text>

              <TouchableOpacity
                onPress={aumentarVolume}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 999,
                  backgroundColor: '#d9c7ff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={salvarJogo}
              style={{
                backgroundColor: '#d9c7ff',
                paddingVertical: isMobile ? 10 : 13,
                borderRadius: 12,
                marginBottom: 10,
              }}
            >
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Salvar jogo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.replace('/')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                paddingVertical: isMobile ? 10 : 13,
                borderRadius: 12,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: 'rgba(190, 130, 255, 0.35)',
              }}
            >
              <Text
                style={{
                  color: '#f1e9ff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                Voltar ao menu principal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setConfigAberta(false)}>
              <Text
                style={{
                  color: '#bbb',
                  textAlign: 'center',
                  marginTop: 8,
                }}
              >
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Animated.View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          opacity: fadeAnim,
          zIndex: 30,
        }}
      />

      <Animated.View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          opacity: fadeCena,
          zIndex: 50,
        }}
      />
    </TouchableOpacity>
  );
}
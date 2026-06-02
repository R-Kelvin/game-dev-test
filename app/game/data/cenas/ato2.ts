export const ato2 = {
   cena9: {
  background: require('../../../../assets/backgrounds/ato2/ato2cena1.png'),
  proxima: 'cena10',
  dialogos: [
    { nome: '', ambience: 'escola', bgm: 'alegriadois', texto: '*Já é quase hora de ir embora novamente.*' },
    { nome: '', texto: '*Olho para minhas colegas e as vejo conversando escondido da professora.*' },
    { nome: '', texto: '*Confesso que fiquei curiosa para saber do assunto.*' },
    { nome: '', texto: '*Elas parecem intrigadas com algo.*' },
    { nome: '', texto: '*Decido cutucar Rin, que senta do meu lado.*' },

    { nome: 'Aiko', texto: 'Ei, Rin, Misuki.' },

    { nome: '', texto: '*Rin e Misuki olham para mim instantaneamente.*' },

    { nome: 'Rin', texto: 'Oi, Aiko. Decidiu acordar do seu mundo da lua?' },
    { nome: '', texto: '*Ela ri baixo.*' },

    { nome: 'Aiko', texto: 'Haha, que engraçado.' },
    { nome: 'Aiko', texto: 'Sobre o que vocês estão falando?' },

    { nome: 'Rin', texto: 'Misuki ouviu a conversa dos garotos…' },

    { nome: 'Misuki', texto: 'Eles estavam falando da lenda daquela carteira…' },
    { nome: '', texto: '*Ela aponta discretamente.*' },

    { nome: '', texto: '*Meu olhar vai direto pra carteira…*' },

    { nome: 'Misuki', texto: 'Ela sempre fica vazia, já percebeu?' },
    { nome: '', texto: '*Não consigo deixar de encarar ela.*' },

    { nome: 'Aiko', texto: 'O que tem ela?' },

    { nome: 'Rin', texto: 'Dizem que…' },
    { nome: 'Rin', texto: 'Havia uma garota que sentava ali…' },
    { nome: 'Rin', texto: 'Mas ela desapareceu e agora ela assombra quem senta ali, ou o último a sair da escola.' },

    { nome: '', texto: '*Sinto um leve arrepio.*' },

    { nome: 'Aiko', texto: 'E qual era o nome dela?' },

    { nome: 'Misuki', texto: 'Ninguém sabe…' },
    { nome: 'Misuki', texto: 'Não se sabe nem de que turma ela era…' },

    { nome: '', texto: '*Olho para a janela…*' },
    { nome: '', texto: '*Por um instante…*' },
    { nome: '', texto: '*acho que vi alguém lá embaixo.*' },
    { nome: '', texto: '*Parada.*' },
    { nome: '', texto: '…' },
    { nome: '', texto: '*Mas quando foco melhor…*' },
    { nome: '', texto: '*não tem ninguém.*' },

    { nome: '', texto: '*Tento voltar a prestar atenção na aula…*' },
    { nome: '', texto: '*Mas meu olhar insiste em voltar praquela carteira.*' },
    { nome: '', texto: '…' },
    { nome: '', texto: '*Vazia.*' },
  ],
},

  cena10: {
  background: require('../../../../assets/backgrounds/saidaescola.png'),
  proxima: 'cena11',
  dialogos: [
    { 
      nome: '', ambience: 'vento',
      texto: '*Saio conversando com minhas amigas sobre a lenda da cadeira.*', 
      manterSprites: ['rin_normal', 'misuki_normal'] 
    },
    { 
      nome: '', 
      texto: '*Ficamos realmente intrigadas com isso.*', 
      manterSprites: ['rin_curious', 'misuki_curious'] 
    },
    { nome: '', texto: '*Interrompo a conversa, pois já está ficando tarde.*', sprite: 'aiko_seria' },
    { nome: 'Aiko', texto: 'Meninas, eu tenho que ir.', sprite: 'aiko_falando' },
    { 
      nome: 'Misuki', 
      texto: 'Você não vai pelo mesmo caminho né?', 
      manterSprites: ['rin_normal', 'misuki_falando'] 
    },
    { nome: 'Aiko', texto: 'Não… vocês sabem que lá em casa tá tendo problemas.', sprite: 'aiko_falando' },
    { nome: 'Aiko', texto: 'As lâmpadas estão queimando constantemente…', sprite: 'aiko_falando' },
    { nome: 'Aiko', texto: 'Então minha mãe mandou eu comprar outra vez.', sprite: 'aiko_falando' },
    { 
      nome: 'Rin', 
      texto: 'Entendi… também tenho que ir hoje.', 
      manterSprites: ['rin_falando', 'misuki_normal'] 
    },
    { 
      nome: 'Misuki', 
      texto: 'Mas outro dia podemos ir com você…', 
      manterSprites: ['rin_normal', 'misuki_falando'] 
    },
    { nome: '', texto: '*Decido não responder, apenas sorrio.*', sprite: 'aiko_sorrisoleve' },
    { nome: 'Aiko', texto: 'Então… tchau, meninas.', sprite: 'aiko_falando' },
    { nome: '', texto: '*Aceno.*', sprite: 'aiko_tchau' },
    { nome: '', texto: '*Viro de costas…*'},
    { nome: '', sfx: 'cochicho_distante', texto: '*Mas ainda escuto um cochicho baixo.*' },
    { nome: '', texto: '*Não dá pra entender direito o que dizem.*'},
    { nome: '', texto: '*…*'},
    { nome: '', texto: '*Mas tenho a sensação de que não era sobre a lenda.*'},
  ],
},

  cena11: {
    background: require('../../../../assets/backgrounds/PO2.png'),
    proxima: 'cena12',
    dialogos: [
      { nome: '', sfx: 'passos_afastando', texto: '*Depois de uma boa andada, chego na rua do ponto.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Confesso que fazer esse percurso a pé todo dia cansa.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Vou caminhando lentamente.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Tem uma mulher lá no ponto… A mesma de ontem.*', sprite: 'aiko_curiosa' },
      { nome: 'Aiko', texto: 'Ela pega ônibus todo dia nesse horário?', sprite: 'aiko_curiosa' },
      { nome: '', texto: '*Pelo menos sei que nunca estarei completamente sozinha andando essas horas na rua.*', sprite: 'aiko_sorrisoleve' },
      { nome: '', sfx: 'onibus_freio', texto: '*Um ônibus para em frente ao ponto de ônibus.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Passo lentamente pelo ponto de ônibus quando escuto uma voz feminina.*', sprite: 'aiko_seria' },
      { nome: 'Voz', texto: 'Você… me conhece?' },
      { nome: '', texto: '*Viro para trás, pronta para responder a pergunta.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*A voz era da mulher sentada no ponto, mas ela não falava comigo.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Finjo que estou mexendo na minha bolsa, e evito olhar pra lá.*', sprite: 'aiko_mochila' },
      { nome: '', texto: '*Isso evita a vergonha…*', sprite: 'aiko_mochila' },
      {
        nome: '',
        texto: '*Pensando bem...*',
        escolhas: [
          { texto: 'Tentar ouvir conversa', proxima: 'cena11_ouvir_intro' },
          { texto: 'Ignorar e ir embora mais rápido', proxima: 'cena11_ignorar' },
        ],
      },
    ],
  },

  cena11_ouvir_intro: {
    background: require('../../../../assets/backgrounds/PO5.png'),
    proxima: 'cena11_ouvir',
    dialogos: [
      { nome: '', texto: 'Curiosa, tento escutar um pouco a conversa deles...' },
    ],
  },

  // CENA ORIGINAL (PO4)
  cena11_ouvir: {
    background: require('../../../../assets/backgrounds/PO4.png'),
    proxima: 'cena12',
    dialogos: [
      { nome: '', sfx: 'distorcao', bgm: null, texto: '*Ela estava falando com um rapaz, alto, e bem vestido.*', sprite: 'homemponto_normal' },
      { nome: '', texto: '*Ela olha fixamente para ele.*', sprite: 'mulherponto_normal' },
      { nome: '', texto: '*Havia uma mala ao lado dela. Parecia pesada.*', sprite: 'mulherponto_normal' },
      { nome: 'Mulher', texto: 'Você... me conhece?', sprite: 'mulherponto_falando' },
      { nome: 'Homem', texto: 'Não conheço, senhora...', sprite: 'homemponto_falando' },
      { nome: 'Homem', texto: 'Precisa de ajuda?', sprite: 'homemponto_falando' },
      { nome: 'Homem', texto: 'Está perdida?', sprite: 'homemponto_falando' },
      { nome: 'Mulher', texto: '...', sprite: 'mulherponto_normal' },
      { nome: 'Mulher', texto: 'Não… tenho… muito tempo…', sprite: 'mulherponto_falando' },
      { nome: '', texto: 'Ele pega o celular e estende pra ela' },
      { nome: '', texto: 'Algo parecia errado com o celular.'},
      { nome: '', texto: '*Como aquilo não era da minha conta…*'},
      { nome: '', texto: '*Continuei andando…*'},
    ],
  },

  cena11_ignorar: {
    background: require('../../../../assets/backgrounds/PO2.png'),
    proxima: 'cena12',
    dialogos: [
      { nome: '', texto: '*Como aquilo não era da minha conta…*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Continuei andando…*', sprite: 'aiko_seria' },
    ],
  },

  cena12: {
  background: require('../../../../assets/backgrounds/beco2.png'),
  proxima: 'cena13',
  dialogos: [
    { nome: '', sfx: 'passos_afastando', bgm: 'alegriadois', texto: '*Finalmente estou chegando.*', sprite: 'aiko_seria' },

    { nome: '', texto: '*Levo a mão até a bolsa e puxo a lanterna.*', sprite: 'aiko_mochila' },

    { nome: '', sfx: 'lanterna_click', texto: '*O beco continua escuro.*', sprite: 'aiko_apreensiva' },

    { nome: '', texto: '*Como sempre.*', sprite: 'aiko_apreensiva' },

    { nome: '', texto: '*A única luz vem da minha lanterna…*', sprite: 'aiko_apreensiva' },

    { nome: '', texto: '*…e da loja, lá no fundo.*', sprite: 'aiko_apreensiva' },

    { nome: '', texto: '*Mas já me acostumei.*' },

    { nome: '', texto: '*Acho.*' },

    { nome: '', sfx: 'passos_beco', texto: '*Continuo andando.*'},

    { nome: '', texto: '*…*'},

    { nome: '', texto: '*Então escuto alguma coisa.*'},

    { nome: '', texto: '*Paro imediatamente.*' },

    { nome: '', texto: '*O som vem de uma das casas.*' },

    { nome: '', texto: '*…*' },

    { nome: '', texto: '*Parece uma voz.*' },

    { nome: '', texto: '*Baixa demais.*' },

    { nome: '', texto: '*Fraca demais.*' },

    { nome: '', texto: '*Olho devagar para o lado.*' },

    {
      nome: '',
      texto: '*Tem alguém na janela.*',
      background: require('../../../../assets/backgrounds/ato2/mulhernajanela1.png'),
    },

    { nome: '', texto: '*…*'},

    {
      nome: '',
      texto: '*Uma mulher.*',
      background: require('../../../../assets/backgrounds/ato2/mulhernajanela1.png'),
    },

    {
      nome: '',
      texto: '*À primeira vista…*',
      background: require('../../../../assets/backgrounds/ato2/mulhernajanela1.png'),
    },

    { nome: '', texto: '*ela parece normal.*' },

    { nome: '', texto: '*Só que…*' },

    { nome: '', texto: '*alguma coisa está errada.*' },

    { nome: 'Mulher', texto: 'A…' },

    { nome: '', texto: '*…*' },

    { nome: 'Mulher', texto: 'bre…' },
    {
      nome: '', bgm: null,
      texto: '*Não consigo entender.*',
      background: require('../../../../assets/backgrounds/ato2/mulhernajanela2.png'),
    },

    { nome: '', sfx: 'luz_falhando', texto: '*A luz da casa dela parece falhar*' },

    { nome: '', texto: '*E as palavras parecem atravessar o vidro…*' },

    { nome: '', texto: '*deformadas.*'},

    { nome: '', texto: '*Como se a voz dela estivesse presa.*' },

    { nome: '', texto: '*Então… em uma das falhas da luz*' },

    {
      nome: '',
      sfx: 'impacto_terror', texto: '*algo se move atrás dela.*',
      background: require('../../../../assets/backgrounds/ato2/mulhernajanela3.png'),
    },


    { nome: '', texto: '*…*'},

    { nome: '', texto: '*Alto demais.*' },

    { nome: '', texto: '*Grande demais.*' },

    { nome: '', texto: '*A mulher não reage.*' },

    { nome: '', texto: '*Ela continua olhando para mim.*' },

    {
      nome: '',
      texto: '*O que eu faço...?*',
      escolhas: [
        { texto: 'Continuar olhando', proxima: 'cena12_olhar' },
        { texto: 'Ir embora', proxima: 'cena12_ir' },
      ],
    },
  ],
},

cena12_olhar: {
  background: require('../../../../assets/backgrounds/ato2/mulhernajanela3.png'),
  proxima: 'cena12_final',
  dialogos: [
    { nome: '', texto: '*Tento enxergar melhor.*'},

    { nome: '', texto: '*A sombra se aproxima da janela.*'},

    { nome: '', texto: '*…*' },

    { nome: '', texto: '*Não consigo distinguir um rosto.*'},

    { nome: '', texto: '*Só altura.*' },

    { nome: '', texto: '*Meu corpo inteiro arrepia.*' },

    { nome: '', texto: '*Dou um passo para trás.*'},
  ],
},

cena12_ir: {
  background: require('../../../../assets/backgrounds/beco2.png'),
  proxima: 'cena12_final',
  dialogos: [
    { nome: '', texto: '*Dou um passo para trás.*'},

    { nome: '', texto: '*Tento ignorar aquilo.*'},

    { nome: 'Mulher', texto: 'A…' },

    { nome: 'Mulher', texto: 'b r e…' },

    { nome: '', texto: '*A voz dela parece mais perto agora.*' },

    { nome: '', texto: '*Mesmo sem ela ter se movido.*' },
  ],
},

cena12_final: {
  background: require('../../../../assets/backgrounds/beco2.png'),
  proxima: 'cena13',
  dialogos: [
    { nome: '', texto: '*Meu corpo reage antes de mim.*' },

    { nome: '', sfx: 'corrida', texto: '*Eu corro.*' },

    { nome: '', texto: '*A lanterna treme na minha mão.*'},

    { nome: '', texto: '*Não olho para trás.*'},

    { nome: '', texto: '*Não quero olhar para trás.*' },

    { nome: '', texto: '*…*' },

    { nome: '', texto: '*Então vejo a luz da loja.*'},

    { nome: '', texto: '*E continuo correndo.*'},
  ],
},

  cena13: {
    background: require('../../../../assets/backgrounds/lightshop.png'),
    proxima: 'cena14',
    dialogos: [
      { nome: '', bgm: 'alegriadois', ambience: null, sfx: 'sino_loja', texto: '*Chego ofegante à loja de lâmpadas.*', sprite: 'aiko_apreensiva' },
      { nome: 'Vendedor', texto: 'O que houve?', sprite: 'vendedor_serio' },
      { nome: '', texto: '*Tento controlar a respiração antes de responder.*', sprite: 'aiko_apreensiva' },
      { nome: 'Vendedor', texto: '…', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'Eu estava vindo comprar as lâmpadas e… acho que vi algo esquisito.', sprite: 'aiko_mochila' },
      { nome: 'Aiko', texto: '*Digo enquanto guardo a lanterna na mochila.*', sprite: 'aiko_mochila' },
      { nome: 'Vendedor', texto: 'Viu, é?', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'Senta ali.', sprite: 'vendedor_explicando' },
      { nome: 'Vendedor', texto: 'Vou buscar suas lâmpadas.', sprite: 'vendedor_explicando' },
      { nome: '', texto: '*Ele aponta para o banco em frente ao balcão.*', manterSprites: ['vendedor_explicando'] },
      { nome: '', texto: '*Eu obedeço, ainda com o frio na barriga por causa daquela mulher.*', sprite: 'aiko_timida' },
      { nome: '', texto: '*O vendedor fica em silêncio por alguns segundos.*', manterSprites: ['vendedor_serio'] },
      { nome: '', sfx: 'respiracao_ofegante', texto: '*Só consigo ouvir minha própria respiração, ainda acelerada.*', sprite: 'aiko_timida' },
      { nome: 'Vendedor', texto: 'Aiko…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'Você sabe uma das coisas estranhas de manter essa loja aberta até essa hora?', sprite: 'vendedor_explicando' },
      { nome: '', texto: '*Presto atenção em cada palavra.*', sprite: 'aiko_curiosa' },
      { nome: 'Aiko', texto: 'O quê?', sprite: 'aiko_curiosa' },
      { nome: 'Vendedor', texto: 'Tem coisas…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'que só aparecem nesse horário.', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: '…', sprite: 'aiko_bracoscruzados' },
      { nome: '', sfx: 'baleiro', texto: '*Ele estende o pote de balas enquanto fala.*', manterSprites: ['vendedor_explicando'] },
      { nome: '', texto: '*Pego as [COR], como sempre.*', sprite: 'aiko_seria', falaCorEscolhida: true },
      { nome: 'Vendedor', texto: 'Vou te contar uma coisa.', sprite: 'vendedor_serio' },
      { nome: '', texto: '*Ele olha para o chaveiro pendurado na minha bolsa… e depois para mim.*', manterSprites: ['vendedor_serio'] },
      { nome: 'Vendedor', texto: 'Quando você anda por aí nessas horas…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'pode acabar encontrando coisas que eu chamo de…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'estranhos.', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'Estranhos…?', sprite: 'aiko_curiosa' },
      { nome: 'Vendedor', texto: 'É.', sprite: 'vendedor_explicando' },
      { nome: 'Vendedor', texto: 'Eu chamo assim.', sprite: 'vendedor_explicando' },
      { nome: 'Vendedor', texto: 'Eles não são fáceis de perceber.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'À primeira vista… parecem normais.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'Mas quando você olha melhor…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'tudo pode mudar.', sprite: 'vendedor_serio' },
      { nome: '', texto: '*Sinto um arrepio.*', sprite: 'aiko_timida' },
      { nome: '', texto: '*Tento não demonstrar, mas sei que aparece no meu rosto.*', sprite: 'aiko_timida' },
      { nome: '', texto: '*Mesmo assim, continuo ouvindo.*', sprite: 'aiko_seria' },
      { nome: 'Vendedor', texto: 'Se você encontrar um deles…', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'finja que não viu nada.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'Aja normalmente.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'E vá embora.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'É importante que você faça isso.', sprite: 'vendedor_serio' },
      { nome: 'Aiko', texto: 'E-eu… consigo ver esses estranhos?', sprite: 'aiko_curiosa' },
      {
        nome: '',
        texto: 'ESCOLHA',
        escolhas: [
          { texto: 'Insistir na pergunta', proxima: 'cena13_insistir' },
          { texto: 'Ficar em silêncio', proxima: 'cena13_silencio' },
        ],
      },
    ],
  },

  cena13_insistir: {
    background: require('../../../../assets/backgrounds/lightshop.png'),
    proxima: 'cena13_final',
    dialogos: [
      { nome: '', texto: '*Ele não responde de imediato.*', manterSprites: ['vendedor_serio'] },
      { nome: 'Aiko', texto: 'Sr. Takashi… por favor.', sprite: 'aiko_timida' },
      { nome: 'Aiko', texto: 'Eu preciso saber se isso é coisa da minha cabeça.', sprite: 'aiko_falando' },
      { nome: 'Vendedor', texto: 'Se fosse só coisa da sua cabeça… eu não estaria avisando.', sprite: 'vendedor_serio' },
      { nome: '', texto: '*A resposta não me acalma.*', sprite: 'aiko_timida' },
      { nome: '', texto: '*Na verdade, piora tudo.*', sprite: 'aiko_timida' },
    ],
  },

  cena13_silencio: {
    background: require('../../../../assets/backgrounds/lightshop.png'),
    proxima: 'cena13_final',
    dialogos: [
      { nome: '', texto: '*Ele não responde.*', manterSprites: ['vendedor_serio'] },
      { nome: 'Aiko', texto: '…', sprite: 'aiko_seria' },
      { nome: '', texto: '*Talvez eu nem queira ouvir a resposta.*', sprite: 'aiko_timida' },
      { nome: '', texto: '*Tem perguntas que parecem perigosas antes mesmo de serem feitas direito.*', sprite: 'aiko_seria' },
    ],
  },

  cena13_final: {
    background: require('../../../../assets/backgrounds/lightshop.png'),
    proxima: 'cena14',
    dialogos: [
      { nome: 'Vendedor', texto: 'Está tarde.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'É melhor você ir pra casa.', sprite: 'vendedor_serio' },
      { nome: 'Vendedor', texto: 'Sua mãe deve estar preocupada.', sprite: 'vendedor_serio' },
      { nome: '', texto: '*Assinto.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Saio da loja com tudo isso na cabeça.*', sprite: 'aiko_seria' },
    ],
  },

  cena14: {
    background: require('../../../../assets/backgrounds/predionight.png'),
    proxima: 'cena15',
    dialogos: [
      { nome: '', sfx: 'passos_afastando', texto: '*Ainda não assimilei toda aquela história…*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Meu vizinho passa por mim novamente.*', sprite: 'aiko_sideeye' },
      { nome: '', texto: '*Ele parece mais irritado do que antes.*', manterSprites: ['vizinho1_serio'] },
      { nome: 'Vizinho', texto: 'Não para…', sprite: 'vizinho1_irritado' },
      { nome: 'Vizinho', texto: 'Esse maldito cachorro não para…', sprite: 'vizinho1_muitoirritado' },
      { nome: '', texto: '*Ele leva a mão ao ouvido.*', manterSprites: ['vizinho1_maosouvidos'] },
      { nome: '', texto: '*Como se estivesse tentando abafar o som.*', manterSprites: ['vizinho1_maosouvidos'] },
      { nome: 'Vizinho', texto: 'Você não viu esse cachorro por ai?', sprite: 'vizinho1_irritado' },
      { nome: '', texto: '*… Essa pergunta de novo...*', sprite: 'aiko_seria' },
      { nome: 'Aiko', texto: 'Eu não vi.', sprite: 'aiko_falando' },
      { nome: 'Aiko', texto: 'Nem escutei nada.', sprite: 'aiko_falando' },
      { nome: '', texto: '*Passo direto.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*E, pela primeira vez em dias…*', sprite: 'aiko_seria' },
      { nome: '', texto: '*o silêncio parece pior do que a reclamação dele.*', sprite: 'aiko_seria' },
    ],
  },

    cena15: {
    background: require('../../../../assets/backgrounds/aikoshouse2.png'),
    proxima: 'cena16',
    dialogos: [
      { nome: '', sfx: 'porta_casa', texto: '*Abro a porta devagar.*' },
      { nome: '', texto: '*A madeira range baixo.*'},
      { nome: '', texto: '*A casa continua escura.*' },
      { nome: '', texto: '*A única luz vem da vela sobre a mesa da sala.*' },
      { nome: '', texto: '*Outra vez.*' },
      { nome: '', texto: '*O resto da casa desaparece na sombra.*' },
      { nome: '', texto: '*Ainda consigo ouvir as palavras do Sr. Takashi na minha cabeça.*' },
      { nome: '', texto: '"Tem coisas que só aparecem nesse horário."' },
      { nome: '', texto: '*Fecho a porta atrás de mim.*' },
      { nome: 'Aiko', texto: 'Mãe… cheguei.', sprite: 'aiko_falando' },
      { nome: '', texto: '*Minha voz soa mais baixa dentro da casa escura.*', sprite: 'aiko_seria' },
],
  },
      cena16: {
    background: require('../../../../assets/backgrounds/aikomaemesa.png'),
    proxima: 'cena17',
    dialogos: [

      { nome: '', texto: '*Mamãe está sentada à mesa.*' },
      { nome: '', texto: '*Ela passa os dedos lentamente pela lateral da vela derretida.*'},
      { nome: '', texto: '*Como se estivesse distraída.*'},
      ],
  },
      cena17: {
    background: require('../../../../assets/backgrounds/aikoshouse2.png'),
    proxima: 'cena18',
    dialogos: [
      { nome: 'Mãe', texto: 'Oi, filha.', sprite: 'mae_falando' },
      { nome: '', texto: '*A voz dela continua calma, como sempre.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*Me aproximo.*', sprite: 'aiko_sorrisoleve' },
      { nome: '', texto: '*A luz da vela ilumina só metade do rosto dela.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*A outra metade continua escondida na sombra.*', manterSprites: ['mae_normal'] },

      { nome: 'Aiko', texto: 'Trouxe as lâmpadas.', sprite: 'aiko_falando' },
      { nome: '', texto: '*Estendo a sacola.*', sprite: 'aiko_seria' },
      { nome: '', texto: '*Mamãe pega ela devagar.*', manterSprites: ['mae_normal'] },
      { nome: 'Mãe', texto: 'Obrigada.', sprite: 'mae_normal' },
      { nome: '', texto: '*Silêncio.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*A chama da vela balança levemente.*', manterSprites: ['mae_normal'] },

      { nome: 'Aiko', texto: 'Isso das lâmpadas queimarem sempre tá começando a ficar estranho, não acha?', sprite: 'aiko_curiosa' },
      { nome: 'Mãe', texto: 'Hm…', sprite: 'mae_normal' },
      { nome: '', texto: '*Ela abre a sacola.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*Começa a observar as caixas como se aquilo fosse exigir toda a atenção do mundo.*', manterSprites: ['mae_normal'] },
      { nome: 'Aiko', texto: 'Talvez seja problema na fiação.', sprite: 'aiko_falando' },
      { nome: 'Mãe', texto: 'Talvez.', sprite: 'mae_falando' },
      { nome: 'Aiko', texto: 'A senhora não chamou ninguém ainda?', sprite: 'aiko_curiosa' },
      { nome: 'Mãe', texto: 'Ainda não tive tempo.', sprite: 'mae_falando' },
      { nome: '', texto: '*Ela responde rápido demais.*' },
      { nome: '', texto: '*Como se já tivesse preparado a resposta antes.*'},
      { nome: '', texto: '*A encaro por alguns segundos.*' },

      { nome: 'Aiko', texto: 'Hoje eu vi uma coisa estranha voltando pra casa.', sprite: 'aiko_falando' },
      { nome: '', texto: '*Mãe para de mexer nas caixas.*' },
      { nome: '', texto: '*Mas só por um segundo.*'},
      { nome: 'Mãe', texto: 'Estranha como?', sprite: 'mae_falando' },
      { nome: 'Aiko', texto: 'Eu não sei…', sprite: 'aiko_falando' },
      { nome: 'Aiko', texto: 'Tinha uma mulher numa janela.', sprite: 'aiko_falando' },
      { nome: 'Aiko', texto: 'E parecia que tinha alguma coisa atrás dela.', sprite: 'aiko_timida' },

      { nome: '', texto: '*O silêncio toma a sala.*'},
      { nome: '', texto: '*A chama da vela diminui.*' },
      { nome: '', texto: '*Por um instante…*'},
      { nome: '', texto: '*Mas volta ao normal.*' },
      { nome: '', texto: '*Mãe continua olhando para as lâmpadas.*'},
      { nome: 'Mãe', texto: 'Você anda chegando muito cansada da escola.', sprite: 'mae_falando' },

      { nome: 'Aiko', texto: 'Mãe.', sprite: 'aiko_timida' },
      { nome: 'Mãe', texto: 'Hm?', sprite: 'mae_normal' },
      { nome: 'Aiko', texto: 'Você acredita em coisas estranhas?', sprite: 'aiko_timida' },
      { nome: '', texto: '*Mãe finalmente levanta os olhos pra mim.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*A expressão dela continua serena.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*Quase vazia.*', manterSprites: ['mae_normal'] },
      { nome: 'Mãe', texto: 'Existem coisas…', sprite: 'mae_falando' },
      { nome: 'Mãe', texto: 'que é melhor não observar demais.', manterSprites: ['mae_falando'] },

      { nome: '', texto: '*Meu estômago aperta.*', sprite: 'aiko_timida' },
      { nome: 'Aiko', texto: 'O que isso significa?', sprite: 'aiko_curiosa' },
      { nome: '', texto: '*Mãe sorri de leve.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*Um sorriso pequeno.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*Bonito.*', manterSprites: ['mae_normal'] },
      { nome: '', texto: '*Mas distante.*', manterSprites: ['mae_normal'] },
      { nome: 'Mãe', texto: 'Significa que você precisa descansar.', sprite: 'mae_falando' },

      { nome: '', texto: '*Ela se levanta lentamente da cadeira.*'},
      { nome: '', texto: '*A vela projeta a sombra dela pela parede.*' },
      { nome: 'Mãe', texto: 'Vou trocar essas lâmpadas amanhã.', sprite: 'mae_falando' },
      { nome: 'Aiko', texto: 'Quer ajuda?', sprite: 'aiko_falando' },
      { nome: 'Mãe', texto: 'Não precisa, filha.', sprite: 'mae_normal' },
      { nome: 'Mãe', texto: 'Vai descansar.', sprite: 'mae_falando' },
      ],
  },
      cena18: {
    background: require('../../../../assets/backgrounds/aiko_maeabraco.png'),
    proxima: 'cena19',
    dialogos: [

      { nome: '', texto: '*Ela passa a mão devagar no meu cabelo.*' },
      { nome: '', texto: '*O toque dela continua quente.*'},
      { nome: '', texto: '*Familiar.*' },
      { nome: 'Aiko', texto: 'Tá bom…'},

       ],
  },
      cena19: {
    background: require('../../../../assets/backgrounds/aikoshouse2.png'),
    proxima: 'cena20',
    dialogos: [

      { nome: '', sfx: 'passos_afastando', texto: '*Dou alguns passos em direção ao corredor.*' },
      { nome: '', texto: '*Mas paro.*' },
      { nome: 'Aiko', texto: 'Mãe…', sprite: 'aiko_timida' },
      { nome: 'Mãe', texto: 'Sim?', sprite: 'mae_normal' },
      { nome: 'Aiko', texto: 'Faz tempo que a gente não janta junto, né?', sprite: 'aiko_timida' },
      { nome: '', texto: '*Ela fica em silêncio.*', manterSprites: ['mae_normal'] },
      { nome: '', sfx: 'vela_estalo', texto: '*A chama da vela estala baixo.*', manterSprites: ['mae_normal'] },
      { nome: 'Mãe', texto: 'É…', sprite: 'mae_falando' },
      { nome: 'Mãe', texto: 'A semana anda corrida.', sprite: 'mae_falando' },
      { nome: 'Aiko', texto: 'Boa noite, mãe.', sprite: 'aiko_falando' },
      { nome: 'Mãe', texto: 'Boa noite, filha.', sprite: 'mae_normal' },

      { nome: '', texto: '*Vou em direção ao meu quarto.*'},
    ],
  },

 cena20: {
  background: require('../../../../assets/backgrounds/saladeaulainteira.png'),
  proxima: 'cena21',
  dialogos: [

    {
      nome: '', bgm: 'alegria', ambience: 'escola',
      texto: '*…*',
      efeito: 'fadeSlow',
    },

    {
      nome: '',
      texto: '*A noite passa sem que eu consiga dormir direito.*',
      efeito: 'fadeSlow',
    },

    {
      nome: '',
      texto: '*A luz da manhã atravessa a janela da sala e bate diretamente no meu rosto.*',
      efeito: 'fadeSlow',
    },

    { nome: '', texto: '*Entro na sala um pouco atrasada, então peço desculpas à professora antes de ir para o meu lugar.*' },

    { nome: '', texto: '*Olho para meus colegas de classe e todos parecem prestar atenção na aula…*' },

    { nome: '', texto: '*Exceto Rin e Misuki, como sempre.*' },
    ],
  },

 cena21: {
  background: require('../../../../assets/backgrounds/focorincadeira.png'),
  proxima: 'cena22',
  dialogos: [
    { nome: '', texto: '*Rin se distrai facilmente quando tem uma caneta na mão e qualquer papel na frente dela.*' },
],
  },

 cena22: {
  background: require('../../../../assets/backgrounds/misukisalafone.png'),
  proxima: 'cena23',
  dialogos: [
    { nome: '', texto: '*E Misuki mexe no próprio cabelo enquanto claramente tenta esconder que está ouvindo música escondida.*' },

    { nome: '', texto: '*Temos personalidades tão diferentes…*' },

    { nome: '', texto: '*que às vezes acho que é justamente isso que nos torna tão amigas.*' },
    ],
  },

 cena23: {
  background: require('../../../../assets/backgrounds/saladeaulavaziafoco.png'),
  proxima: 'cena24',
  dialogos: [

    { nome: 'Aiko', texto: 'Ei, Rin, perdi algo importante?', sprite: 'aiko_falando' },

    { nome: '', texto: '*Digo sussurrando.*' },

    { nome: 'Rin', texto: 'Além da sua cabeça no mundo da lua? Nada importante.', sprite: 'rin_falando' },

    { nome: 'Rin', texto: 'A professora tá falando sobre cateto, cosseno e tangente de novo… não aguento mais o mesmo assunto…', sprite: 'rin_badsurprise' }, 
   { nome: 'Aiko', texto: 'Você é cheia do senso de humor, não é?', sprite: 'aiko_sorrisoleve' },

    { nome: '', texto: '*Rimos baixo.*' },
    ],
  },

 cena24: {
  background: require('../../../../assets/backgrounds/saladeaulainteira.png'),
  proxima: 'cena25',
  dialogos: [

    { nome: '', texto: '*A professora lança um olhar mortal na nossa direção.*', sprite: 'professora_irritada'},
  ],
  },

 cena25: {
  background: require('../../../../assets/backgrounds/saladeaulavaziafoco.png'),
  proxima: 'cena26',
  dialogos: [
    { nome: '', texto: '*Aparentemente só eu percebi.*', manterSprites: ['aiko_timida', 'rin_falando'] },

    { nome: '', texto: '*Cutuco Rin com o cotovelo para ela parar de rir.*', manterSprites: ['aiko_timida', 'rin_falando'] },

    { nome: '', texto: '*Ela demora alguns segundos para perceber.*', manterSprites: ['aiko_timida', 'rin_medo'] },
],
  },
    cena26: {
  background: require('../../../../assets/backgrounds/saladeaulainteira.png'),
  proxima: 'cena27',
  dialogos: [

    { nome: 'Professora', texto: 'Aiko, Rin… Querem compartilhar o motivo da risada pra sala?', sprite: 'professora_falandoirritada' },

    { nome: 'Professora', texto: 'Eu quero rir também. Sou toda ouvidos.', sprite: 'professora_falandoirritada'},
    ],
  },
    cena27: {
  background: require('../../../../assets/backgrounds/saladeaulavaziafoco.png'),
  proxima: 'cena28',
  dialogos: [

    { nome: 'Aiko', texto: 'Não é nada, professora.', manterSprites: ['aiko_timida', 'rin_medo'] },

    { nome: 'Rin', texto: 'Desculpa…', manterSprites: ['aiko_timida', 'rin_medo'] },
    ],
  },
    cena28: {
  background: require('../../../../assets/backgrounds/saladeaulainteira.png'),
  proxima: 'cena29',
  dialogos: [

    { nome: 'Professora', texto: 'Espero que não se repita.', sprite: 'professora_falandoirritada'},
],
  },
    cena29: {
  background: require('../../../../assets/backgrounds/aikoerinentreolhando.png'),
  proxima: 'cena30',
  dialogos: [
    { nome: '', sfx: 'cadeiras_arrastando', texto: '*Nós duas nos olhamos como se fôssemos duas crianças cujo pirulito acabou de ser roubado.*' },

    { nome: '', texto: '*Seria um momento engraçado…*' },

    { nome: '', texto: '*se não tivesse sido tão vergonhoso.*' },

    { nome: '', texto: '*Tenho certeza que Misuki vai rir disso depois.*' },

    { nome: '', texto: '*Eu conheço ela.*' },

    { nome: '', texto: '*A aula segue normalmente.*' },

    { nome: '', texto: '*E ninguém mais ousou dar um pio.*' },

    { nome: '', texto: '*Confesso que não gosto de ser usada como exemplo…*' },

    { nome: '', texto: '*Mas parece que isso está se tornando algo recorrente na minha vida.*' },
],
  },
  cena30: {
  background: require('../../../../assets/backgrounds/filamerenda.png'),
  proxima: 'cena31',
  dialogos: [
    {
      nome: '',
      sfx: 'refeitorio_ambiente', texto: '*A aula acaba e, pouco depois, chega o horário do almoço.*',
    },
    {
      nome: '',
      texto: '*Como sempre, cada um pega sua bandeja e espera na fila da merenda.*',
    },
   
    ],
  },
  cena31: {
  background: require('../../../../assets/backgrounds/refeitorio.png'),
  proxima: 'cena32',
  dialogos: [
    {
      nome: '',
      texto: '*Misuki está claramente se esforçando para não cair no chão de tanto rir.*',
      sprite: 'misuki_rindo',
    },
    {
      nome: 'Misuki',
      texto: 'As caras de vocês foram hilárias.',
      sprite: 'misuki_rindo',
    },
    {
      nome: 'Misuki',
      texto: 'As prefeitas da Coitadolândia.',
      sprite: 'misuki_rindo',
    },
    {
      nome: '',
      texto: '*Misuki quase perde o ar de tanto rir.*',
    },
    {
      nome: '',
      texto: '*Eu e Rin nos olhamos por alguns segundos e também caímos na gargalhada.*',
      manterSprites: ['aiko_rindo', 'rin_falando'],
    },
    {
      nome: 'Aiko',
      texto: 'Misuki, no dia que for você passando uma vergonha dessas, eu vou rir com toda a minha alma.',
      manterSprites: ['aiko_rindo', 'rin_falando'],
    },
    {
      nome: '',
      texto: '*Nós rimos.*',
      manterSprites: ['aiko_rindo', 'rin_falando'],
    },
    {
      nome: 'Rin',
      texto: 'Eu farei desse dia um dia lembrado para sempre, hein.',
      manterSprites: ['aiko_rindo', 'rin_falando'],
    },
    {
      nome: 'Misuki',
      texto: 'Não sejam tão rancorosas. Tenho certeza de que, se fosse comigo, vocês já estariam sem fôlego de tanto rir.',
      sprite: 'misuki_rindo',
    },
    {
      nome: '',
      texto: '*Duas figuras masculinas se aproximam, furando a fila.*',
    },
    {
      nome: '',
      texto: '*Meus olhos se reviram apenas com o som da voz deles.*',
    },
    {
      nome: 'Tsubasa',
      texto: 'Como eu estava falando, Sota… parece que elas gostam mesmo de chamar atenção atrapalhando a aula o tempo inteiro.',
      manterSprites: ['sota_serio', 'tsubasa_falando'],
    },
    {
      nome: 'Sota',
      texto: 'Quando finalmente a garotinha sad girl e a gatinha loira burra abrem a boca pra falar, é só pra atrapalhar… não acha?',
      manterSprites: ['sota_falando', 'tsubasa_serio'],
    },
    {
      nome: 'Rin',
      texto: 'O que vocês querem?',
      manterSprites: ['aiko_seria', 'rin_curious'],
    },
    {
      nome: 'Rin',
      texto: 'Vieram apenas encher a paciência?',
      manterSprites: ['aiko_seria', 'rin_curious'],
    },
    {
      nome: 'Tsubasa',
      texto: 'Calma, Rin. Vai me bater?',
      manterSprites: ['sota_serio', 'tsubasa_serio'],
    },
    {
      nome: 'Misuki',
      texto: 'Vocês estão furando fila e vieram só pra encher o saco…',
      sprite: 'misuki_curious',
    },
    {
      nome: 'Misuki',
      texto: 'Vocês não têm nada melhor pra fazer, não?',
      sprite: 'misuki_curious',
    },
    {
      nome: '',
      texto: '*Eu saio sem que eles percebam e chamo a supervisora.*',
    },
    {
      nome: '',
      texto: '*Volto antes que eles notem, enquanto a supervisora chega por trás deles e acaba ouvindo tudo.*',
      manterSprites: ['sota_serio', 'supervisora_irritada', 'tsubasa_serio'],
    },
    {
      nome: '',
      texto: '*Rin e Misuki se calam.*',
      manterSprites: ['sota_serio', 'supervisora_irritada', 'tsubasa_serio'],
    },
    {
      nome: 'Tsubasa',
      texto: 'Não vão dizer mais nada?',
      manterSprites: ['sota_serio', 'supervisora_irritada', 'tsubasa_serio'],
    },
    {
      nome: 'Sota',
      texto: 'Quem cala consente, hein?',
      manterSprites: ['sota_falando', 'supervisora_irritada', 'tsubasa_serio'],
    },
    {
      nome: 'Supervisora',
      texto: 'Calados vão ficar vocês dois no final da fila… AGORA!',
      manterSprites: ['sota_medo', 'supervisora_falandoirritada', 'tsubasa_medo'],
    },
    {
      nome: '',
      texto: '*Eles olham para ela, desconcertados.*',
      manterSprites: ['sota_medo', 'supervisora_irritada', 'tsubasa_medo'],
    },
    {
      nome: 'Tsubasa',
      texto: 'É pra já, supervisora.',
      manterSprites: ['sota_medo', 'supervisora_irritada', 'tsubasa_medo'],
    },
    {
      nome: 'Sota',
      texto: 'Só viemos ver uma coisa… nada demais.',
      manterSprites: ['sota_medo', 'supervisora_irritada', 'tsubasa_medo'],
    },
    {
      nome: '',
      texto: '*Eles saem quase escoltados.*',
    },
    {
      nome: '',
      texto: '*Acho que essa cena se tornou ainda mais hilária que a última.*',
    },
  ],
  },
  cena32: {
  background: require('../../../../assets/backgrounds/mesacomsatomi.png'),
  proxima: 'cena33',
  dialogos: [

    {
      nome: '',
      texto: '*Pegamos nossa comida e nos sentamos à mesa, onde já havia uma pessoa.*', },
      
    {
      nome: '',
      texto: '*A outra aluna decide interromper nossa conversa.*',
    },
    ],
  },
  cena33: {
  background: require('../../../../assets/backgrounds/mesarefeitoriovazia.png'),
  proxima: 'cena33_gentil',
  dialogos: [
    {

      nome: 'Satomi',
      texto: 'Desculpem por interromper, meninas…',
      sprite: 'satomi_falando',
    },
    {
      nome: '',
      texto: 'ESCOLHA',
      escolhas: [
        { texto: 'Responder com gentileza', proxima: 'cena33_gentil' },
        { texto: 'Brincar para quebrar o clima', proxima: 'cena33_brincar' },
      ],
    },
  ],
},

cena33_gentil: {
  background: require('../../../../assets/backgrounds/mesarefeitoriovazia.png'),
  proxima: 'cena33_continua',
  dialogos: [
    {
      nome: 'Aiko',
      texto: 'Não precisa pedir desculpa. Pode falar.',
      sprite: 'aiko_sorrisoleve',
    },
    {
      nome: '',
      texto: '*Satomi parece relaxar um pouco antes de continuar.*',
      sprite: 'satomi_rindo',
    },
  ],
},

cena33_brincar: {
  background: require('../../../../assets/backgrounds/mesarefeitoriovazia.png'),
  proxima: 'cena33_continua',
  dialogos: [
    {
      nome: 'Aiko',
      texto: 'Se for sobre aqueles dois, a mesa inteira aceita reclamações.',
      sprite: 'aiko_sorrisoleve',
    },
    {
      nome: '',
      texto: '*Satomi segura uma risada, menos tímida do que antes.*',
      sprite: 'satomi_rindo',
    },
  ],
},

cena33_continua: {
  background: require('../../../../assets/backgrounds/mesarefeitoriovazia.png'),
  proxima: 'cena34',
  dialogos: [
    {
      nome: 'Satomi',
      texto: 'Mas vocês fizeram algo que eu sempre sonhei.',
      sprite: 'satomi_rindo',
    },
    {
      nome: '',
      texto: '*Ela diz rindo.*',
    },
    {
      nome: 'Misuki',
      texto: 'O quê?',
      sprite: 'misuki_curious',
    },
    {
      nome: 'Satomi',
      texto: 'Fazer aqueles dois calarem a boca com maestria.',
      sprite: 'satomi_rindo',
    },
    {
      nome: '',
      texto: '*Nós quatro rimos.*',
    },
    {
      nome: 'Misuki',
      texto: 'Não aguento mais o Tsubasa e o Sota com essa síndrome de intrometidos deles.',
      sprite: 'misuki_curious',
    },
    {
      nome: 'Aiko',
      texto: 'Como pode uma pessoa gostar de deixar as outras desconfortáveis e tristes?',
      sprite: 'aiko_falando',
    },
    {
      nome: 'Aiko',
      texto: 'Eu realmente não entendo gente assim.',
      sprite: 'aiko_seria',
    },
    {
      nome: 'Rin',
      texto: 'Pra mim isso é falta de algo… suspeito fielmente que sejam os últimos dois neurônios quase inexistentes deles colapsando.',
      sprite: 'rin_falando',
    },
    {
      nome: 'Aiko',
      texto: 'Pois eu torço para que os neurônios deles algum dia tenham filhotinhos.',
      sprite: 'aiko_falando',
    },
    {
      nome: 'Misuki',
      texto: 'Quem sabe assim eles descubram como pensar, né?',
      sprite: 'misuki_rindo',
    },

 ],
  },
  cena34: {
  background: require('../../../../assets/backgrounds/mesarefeitoriotodas.png'),
  proxima: 'cena35',
  dialogos: [

    {
      nome: '',
      texto: '*Continuamos nossa conversa até o horário do almoço acabar.*',
    },
  ],
},

  cena35: {
  background: require('../../../../assets/backgrounds/saladeaulainteira.png'),
  proxima: 'cena36',
  dialogos: [

    {
      nome: '',
      texto: '*Voltamos pra sala e, dessa vez, nos comportamos com mais cautela.*',
    },

    {
      nome: '',
      texto: '*A sala está mais silenciosa que o normal.*',
    },

    {
      nome: '',
      texto: '*Se eu respirar um pouco mais alto, capaz de escutarem.*',
    },
 ],
},

  cena36: {
  background: require('../../../../assets/backgrounds/aikoclassright.png'),
  proxima: 'cena37',
  dialogos: [

    {
      nome: '', sfx: 'cadeiras_arrastando', 
      texto: '*Presto atenção na aula grande parte do tempo.*',
    },

    {
      nome: '',
      texto: '*Mas esse assunto consegue ser irritantemente repetitivo e chato…*',
    },

    {
      nome: '',
      texto: '*Mas me recuso a não entendê-lo…*',
    },

    {
      nome: '',
      texto: '*Se alguém se deu o trabalho de inventar sem saber todas as regras, eu consigo aprender.*',
    },
],
},

  cena37: {
  background: require('../../../../assets/backgrounds/aikoclassleft.png'),
  proxima: 'cena38',
  dialogos: [
    {
      nome: '',
      texto: '*Eu estava quase entendendo quando me perco em meus pensamentos outra vez…*',
    },
],
},

  cena38: {
  background: require('../../../../assets/backgrounds/cadeiravazia.png'),
  proxima: 'cena39',
  dialogos: [
    {
      nome: '',
      texto: '*Aquela cadeira…*',

    },

    {
      nome: '',
      texto: '*Vazia de novo.*',
    },

    {
      nome: '',
      texto: '*Não é um simples delírio de ninguém, ela realmente está ali…*',

    },

    {
      nome: '',
      texto: '*Por que ninguém senta lá?*',

    },

    {
      nome: '',
      texto: '*Não sou eu quem vou descobrir…*',

    },

    {
      nome: '',
      texto: '*Só é uma curiosidade mesmo.*',

    },
],
},

  cena39: {
  background: require('../../../../assets/backgrounds/aikoclassleft.png'),
  proxima: 'cena40',
  dialogos: [
    {
      nome: '',
      texto: '*Volto a prestar atenção na aula e assim continuo até o fim das aulas.*',
    },
],
},
  cena40: {
    background: require('../../../../assets/backgrounds/corredorescola.png'),
    proxima: 'cena41',
    dialogos: [

      {
        nome: '', ambience: 'tensao', 
        texto: '*Saio conversando com as meninas sobre o dia.*',
      },

      {
        nome: 'Misuki',
        texto: 'Só eu que achei o dia de hoje uma mistura de divertido e tedioso ao mesmo tempo?',
        manterSprites: ['rin_normal', 'misuki_falando'],
      },

      {
        nome: 'Rin',
        texto: 'Divertido? Por que não foi você levando esporro da professora.',
        manterSprites: ['rin_falando', 'misuki_normal'],
      },

      {
        nome: 'Misuki',
        texto: 'Ah, vamos lá. Isso já tá esquecido…',
        manterSprites: ['rin_normal', 'misuki_falando'],
      },

      {
        nome: 'Misuki',
        texto: 'A Aiko salvou a pátria hoje calando aqueles idiotas.',
        manterSprites: ['rin_normal', 'misuki_rindo'],
      },

      {
        nome: 'Aiko',
        texto: 'Não é pra tanto.',
        sprite: 'aiko_falando',
      },

      {
        nome: 'Aiko',
        texto: 'Eu só chamei a supervisora, as atitudes deles que denunciaram eles.',
        manterSprites: ['aiko_falando'],
      },

      {
        nome: 'Rin',
        texto: 'Você tem um ponto.',
        manterSprites: ['rin_falando', 'misuki_normal'],
      },

      {
        nome: '',
        texto: '*Rin revira os olhos, mas acaba rindo também.*',
        manterSprites: ['rin_rindo', 'misuki_rindo'],
      },

      {
        nome: 'Misuki',
        texto: 'Não é querendo ser chata não, mas já tá todo mundo indo embora e eu não quero ser assombrada pela fantasma da cadeira.',
        manterSprites: ['rin_normal', 'misuki_falando'],
      },

      {
        nome: 'Aiko',
        texto: 'Vamos embora logo.',
        sprite: 'aiko_falando',
      },

      {
        nome: 'Rin',
        texto: 'Vocês levam tudo a sério demais, meninas.',
        manterSprites: ['rin_rindo', 'misuki_normal'],
      },

      {
        nome: '',
        texto: '*Ela diz rindo enquanto Misuki e eu apressamos o passo.*',
      },
    ],
  },

  cena41: {
    background: require('../../../../assets/backgrounds/saidaescola.png'),
    proxima: 'cena42',
    dialogos: [

      {
        nome: 'Aiko', ambience: 'vento',
        texto: 'Bom, meninas… então… vou indo.',
        sprite: 'aiko_tchau',
      },

      {
        nome: 'Misuki',
        texto: 'Deixa eu adivinhar… vai comprar lâmpadas?',
        manterSprites: ['rin_normal', 'misuki_falando'],
      },

      {
        nome: 'Aiko',
        texto: 'Uau, como você adivinhou?',
        sprite: 'aiko_sorrisoleve',
      },

      {
        nome: 'Aiko',
        texto: 'Por acaso anda escondendo uma bola de cristal?',
        sprite: 'aiko_falando',
      },

      {
        nome: 'Misuki',
        texto: 'Óh não! Você descobriu.',
        manterSprites: ['rin_normal', 'misuki_rindo'],
      },

      {
        nome: 'Misuki',
        texto: 'Meu disfarce já era.',
        manterSprites: ['rin_normal', 'misuki_rindo'],
      },

      {
        nome: 'Rin',
        texto: 'Falando sério, Aiko…',
        manterSprites: ['rin_falando', 'misuki_normal'],
      },

      {
        nome: 'Rin',
        texto: 'Por que você nunca deixa irmos com você?',
        manterSprites: ['rin_seria', 'misuki_normal'],
      },

      {
        nome: 'Rin',
        texto: 'Juro que não entendo.',
        manterSprites: ['rin_falando', 'misuki_normal'],
      },

      {
        nome: 'Rin',
        texto: 'Se for pelo caminho mais longo, nós nem nos importamos com isso…',
        manterSprites: ['rin_falando', 'misuki_normal'],
      },

      {
        nome: '',
        texto: '*Paro pra pensar nisso…*',
        sprite: 'aiko_bracoscruzados',
      },

      {
        nome: '',
        texto: '*Realmente eu nunca tive motivo pra isso…*',
        sprite: 'aiko_bracoscruzados',
      },

      {
        nome: '',
        texto: '*Eu só… sinto que não dá.*',
        sprite: 'aiko_bracoscruzados',
      },

      {
        nome: '',
        texto: '*Mas isso nem faz sentido, por que não daria?*',
        sprite: 'aiko_bracoscruzados',
      },

      {
        nome: '',
        texto: 'ESCOLHA',
        escolhas: [
          { texto: 'Tentar ser sincera', proxima: 'cena41_sincera' },
          { texto: 'Desconversar', proxima: 'cena41_desconversar' },
        ],
      },
    ],
  },

  cena41_sincera: {
    background: require('../../../../assets/backgrounds/saidaescola.png'),
    proxima: 'cena41_final',
    dialogos: [
      {
        nome: 'Aiko',
        texto: 'Eu não sei explicar direito…',
        sprite: 'aiko_timida',
      },
      {
        nome: 'Aiko',
        texto: 'Só tem alguma coisa naquele caminho que me deixa estranha.',
        sprite: 'aiko_falando',
      },
      {
        nome: 'Rin',
        texto: 'Então mais um motivo pra você não ir sozinha.',
        manterSprites: ['rin_seria', 'misuki_normal'],
      },
    ],
  },

  cena41_desconversar: {
    background: require('../../../../assets/backgrounds/saidaescola.png'),
    proxima: 'cena41_final',
    dialogos: [
      {
        nome: 'Aiko',
        texto: 'Vocês duas fazem parecer que eu atravesso um portal amaldiçoado todo dia.',
        sprite: 'aiko_sorrisoleve',
      },
      {
        nome: 'Misuki',
        texto: 'Dependendo do lugar, talvez atravesse mesmo.',
        manterSprites: ['rin_normal', 'misuki_falando'],
      },
      {
        nome: '',
        texto: '*Rin tenta não rir, mas continua me olhando com preocupação.*',
        manterSprites: ['rin_seria', 'misuki_rindo'],
      },
    ],
  },

  cena41_final: {
    background: require('../../../../assets/backgrounds/saidaescola.png'),
    proxima: 'cena42',
    dialogos: [
      {
        nome: 'Misuki',
        texto: 'Terra pra Aiko?',
        manterSprites: ['rin_normal', 'misuki_curious'],
      },

      {
        nome: 'Misuki',
        texto: 'Câmbio?',
        manterSprites: ['rin_normal', 'misuki_curious'],
      },

      {
        nome: 'Aiko',
        texto: 'Quer saber?',
        sprite: 'aiko_falando',
      },

      {
        nome: 'Aiko',
        texto: 'Vamos sim.',
        sprite: 'aiko_sorrisoleve',
      },

      {
        nome: 'Aiko',
        texto: 'Digo… o caminho é meio longo, mas… tudo bem.',
        sprite: 'aiko_falando',
      },

      {
        nome: '',
        texto: '*As duas me olham como se eu tivesse enlouquecido.*',
        manterSprites: ['rin_badsurprise', 'misuki_curious'],
      },
    ],
  },

  cena42: {
    background: require('../../../../assets/backgrounds/PO2.png'),
    proxima: 'cena43',
    dialogos: [

      {
        nome: '', bgm: 'tensao', sfx: 'passos_afastando',
        texto: '*Nós andamos normalmente, conversando sobre tudo que quase nem percebi que já estamos chegando.*',
      },

      {
        nome: 'Rin',
        texto: 'Esse caminho que você faz é longo né…',
        manterSprites: ['rin_cansada', 'misuki_normal'],
      },

      {
        nome: 'Aiko',
        texto: 'Você mal andou e já tá cansada?',
        sprite: 'aiko_sorrisoleve',
      },

      {
        nome: 'Misuki',
        texto: 'Não somos atletas, tá bom?',
        manterSprites: ['rin_cansada', 'misuki_falando'],
      },

      {
        nome: 'Aiko',
        texto: 'Eu também não.',
        sprite: 'aiko_rindo',
      },

      {
        nome: '',
        texto: '*Passamos pelo ponto e avisto novamente aquela mesma mulher.*',
        sprite: 'aiko_seria',
      },

      {
        nome: '',
        texto: '*Ela está conversando com o mesmo rapaz.*',
        sprite: 'aiko_curiosa',
      },

      {
        nome: '',
        texto: '*Por que ela nunca larga aquela mala?*',
        sprite: 'aiko_curiosa',
      },

      {
        nome: '',
        texto: 'ESCOLHA',
        escolhas: [
          { texto: 'Olhar discretamente', proxima: 'cena42_olhar' },
          { texto: 'Ignorar', proxima: 'cena42_ignorar' },
        ],
      },
    ],
  },

  cena42_olhar: {
    background: require('../../../../assets/backgrounds/PO4.png'),
    proxima: 'cena43',
    dialogos: [

      {
        nome: '', bgm: null, 
        texto: '*Passo mais devagar por alguns segundos.*',
      },

      {
        nome: '', sfx: 'distorcao',
        texto: '*A mulher continua parada.*',
        sprite: 'mulherponto_normal',
      },

      {
        nome: '',
        texto: '*O rapaz fala alguma coisa…*',
        sprite: 'homemponto_falando',
      },

      {
        nome: '',
        texto: '*Mas ela não responde.*',
        sprite: 'mulherponto_normal',
      },

      {
        nome: '',
        texto: '*Ela só continua olhando pra ele.*',
      },

      {
        nome: '',
        texto: '…',
      },

      {
        nome: '',
        texto: '*Então os olhos dela se movem lentamente.*',
        background: require('../../../../assets/backgrounds/PO6creepy.png'),
      },

      {
        nome: '',
        texto: '*Pra mim.*',
        background: require('../../../../assets/backgrounds/PO6creepy.png'),
      },

      {
        nome: '',
        texto: '*Meu corpo inteiro trava por um instante.*',
        background: require('../../../../assets/backgrounds/PO6creepy.png'),
      },

      {
        nome: '',
        texto: '*Mas ela apenas desvia o olhar outra vez.*',
        background: require('../../../../assets/backgrounds/PO2.png'),
      },

      {
        nome: '',
        texto: '*Aperto o passo.*',
      },

      {
        nome: 'Aiko',
        texto: 'Tá… isso foi estranho.',
        sprite: 'aiko_timida',
      },

      {
        nome: 'Misuki',
        texto: 'Hm?',
        manterSprites: ['rin_normal', 'misuki_curious'],
      },

      {
        nome: 'Aiko',
        texto: 'Nada.',
        sprite: 'aiko_seria',
      },
    ],
  },

  cena42_ignorar: {
    background: require('../../../../assets/backgrounds/PO2.png'),
    proxima: 'cena43',
    dialogos: [

      {
        nome: '',
        texto: '*Decido não pensar mais nisso, estou quase virando uma fofoqueira premium.*',
        sprite: 'aiko_seria',
      },

      {
        nome: '',
        texto: '*Não sei como as meninas não comentaram sobre o quanto o rapaz é bonito.*',
        sprite: 'aiko_sorrisoleve',
      },
    ],
  },

  cena43: {
    background: require('../../../../assets/backgrounds/PO2.png'),
    proxima: 'cena44',
    dialogos: [
      {
        nome: '',
        texto: '*Continuamos andando em direção à loja.*',
      },
  ],
},
cena44: {
  background: require('../../../../assets/backgrounds/beco0.png'),
  proxima: 'cena45',
  dialogos: [

    {
      nome: '', bgm: 'tensao', sfx: 'passos_afastando',
      texto: '*Na entrada do beco, as meninas parecem um pouco chocadas.*',
    },

    {
      nome: '',
      texto: '*O beco parece ainda mais escuro visto de fora.*',
    },

    {
      nome: '',
      texto: '*Demora um pouco até que eu decido falar algo.*',
    },

    {
      nome: 'Aiko',
      texto: 'O que foi, meninas?',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Aiko',
      texto: 'O que vocês têm?',
      sprite: 'aiko_curiosa',
    },

    {
      nome: 'Rin',
      texto: 'É aqui que você passa TODO DIA?',
      manterSprites: ['rin_badsurprise', 'misuki_curious'],
    },

    {
      nome: 'Aiko',
      texto: 'É… eu sei que parece meio… escuro.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Misuki',
      texto: 'Meio?',
      manterSprites: ['rin_badsurprise', 'misuki_curious'],
    },

    {
      nome: 'Misuki',
      texto: 'É totalmente escuro.',
      manterSprites: ['rin_badsurprise', 'misuki_curious'],
    },

    {
      nome: 'Rin',
      texto: 'Aiko, não é melhor seguirmos por outro caminho?',
      manterSprites: ['rin_seria', 'misuki_curious'],
    },

    {
      nome: 'Aiko',
      texto: 'Eu sempre andei por aqui… se não quiserem vir, não tem problema.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Eu já estou acostumada.',
      sprite: 'aiko_seria',
    },

    {
      nome: '',
      texto: '*Misuki e Rin se entreolham.*',
      manterSprites: ['rin_seria', 'misuki_curious'],
    },

    {
      nome: 'Rin',
      texto: 'Já tá ficando tarde e eu não posso me atrasar, senão minha mãe me mata…',
      manterSprites: ['rin_falando', 'misuki_normal'],
    },

    {
      nome: 'Rin',
      texto: 'Eu pensei que você estava exagerando sobre o caminho ser longo.',
      manterSprites: ['rin_badsurprise', 'misuki_curious'],
    },

    {
      nome: 'Misuki',
      texto: 'Confesso que também pensei que tinha algo demais.',
      manterSprites: ['rin_normal', 'misuki_falando'],
    },

    {
      nome: 'Misuki',
      texto: 'Bom, de certa forma…',
      manterSprites: ['rin_normal', 'misuki_curious'],
    },

    {
      nome: 'Aiko',
      texto: 'Tudo bem, meninas. Eu realmente preciso comprar as lâmpadas.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Rin',
      texto: 'Então… até mais.',
      manterSprites: ['rin_tchau', 'misuki_normal'],
    },

    {
      nome: 'Misuki',
      texto: 'Mande notícias quando chegar em casa.',
      manterSprites: ['rin_normal', 'misuki_tchau'],
    },

    {
      nome: 'Aiko',
      texto: 'Pode deixar.',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: '', bgm: null,
      sfx: 'passos_se_afastando', texto: '*Elas pegam outro caminho.*',
    },

    {
      nome: '',
      texto: '*No fundo, eu acho que já sabia que elas não iriam até o fim.*',
    },

    {
      nome: '',
      texto: '*Fico parada por alguns segundos olhando as duas se afastarem.*',
    },

    {
      nome: '',
      texto: '*É estranho…*',
    },

    {
      nome: '',
      texto: '*Nunca pensei muito nesse lugar até ver a reação delas.*',
    },

    {
      nome: '',
      texto: '*Mas olhando agora…*',
    },

    {
      nome: '',
      texto: '*o beco realmente parece pior do lado de fora.*',
    },

    {
      nome: '',
      texto: '*Escuro demais.*',
    },

    {
      nome: '',
      texto: '*Silencioso demais.*',
    },

    {
      nome: '',
      texto: '*…*',
    },

    {
      nome: '',
      sfx: 'lanterna_click', texto: '*Levo a mão até a mochila e puxo minha lanterna.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*A luz ilumina só uma pequena parte do caminho.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*No fundo do beco…*',
    },

    {
      nome: '',
      texto: '*consigo ver a luz fraca da loja.*',
    },

    {
      nome: '',
      texto: '*Respiro fundo.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: 'Aiko',
      texto: 'Tá tudo bem…',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*Dou o primeiro passo em direção ao escuro.*',
      sprite: 'aikoseria_lanterna',
    },
  ],
},
cena45: {
  background: require('../../../../assets/backgrounds/beco2.png'),
  proxima: 'cena46',
  dialogos: [

    {
      nome: '', sfx: 'passos_afastando', 
      texto: '*Aqui estou eu novamente.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*Pronta pra seguir o mesmo caminho.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*Não é tão escuro assim…*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*Não com a minha lanterna.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*Passo olhando para aquela casa, na esperança de que tudo o que vi ontem tenha sido só fruto da minha imaginação.*',
    },

    {
      nome: '',
      texto: '*E realmente…*',
    },

    {
      nome: '',
      texto: '*não tem nada lá.*',
      background: require('../../../../assets/backgrounds/ato2/casacortinafechada.png'),
    },

    {
      nome: '',
      texto: '*A cortina está até fechada.*',
      background: require('../../../../assets/backgrounds/ato2/casacortinafechada.png'),
    },

    {
      nome: '',
      texto: 'ESCOLHA',
      escolhas: [
        { texto: 'Continuar olhando', proxima: 'cena45_olhar' },
        { texto: 'Apressar o passo', proxima: 'cena45_apressar' },
      ],
    },
  ],
},

cena45_olhar: {
  background: require('../../../../assets/backgrounds/ato2/casacortinafechada.png'),
  proxima: 'cena45_final',
  dialogos: [

    {
      nome: '',
      texto: '*…*',
    },

    {
      nome: '',
      texto: '*Mas por algum motivo…*',
    },

    {
      nome: '',
      texto: '*eu continuo olhando.*',
    },

    {
      nome: '',
      texto: '*O vento move a cortina levemente.*',
    },

    {
      nome: '',
      texto: '…',
    },

    {
      nome: '',
      texto: '*Então vejo.*',
      background: require('../../../../assets/backgrounds/ato2/casacortinaaberta.png'),
    },

    {
      nome: '',
      texto: '*Algo.*',
      background: require('../../../../assets/backgrounds/ato2/casacortinaaberta.png'),
    },

    {
      nome: '',
      texto: '*Uma sombra passando atrás da cortina.*',
      background: require('../../../../assets/backgrounds/ato2/casacortinaaberta.png'),
    },

    {
      nome: '',
      texto: '*Rápido demais.*',
      background: require('../../../../assets/backgrounds/ato2/casacortinaaberta.png'),
    },

    {
      nome: '',
      texto: '*Aperto a lanterna com força.*',
    },

    {
      nome: 'Aiko',
      texto: '…',
    },

    {
      nome: '',
      texto: '*Aperto o passo.*',
    },
  ],
},

cena45_apressar: {
  background: require('../../../../assets/backgrounds/beco2.png'),
  proxima: 'cena45_final',
  dialogos: [

    {
      nome: '',
      texto: '*Aperto o passo.*',
      sprite: 'aikomedo_lanterna',
    },

    {
      nome: '',
      texto: '*Tento ignorar aquela sensação estranha no meu peito.*',
      sprite: 'aikomedo_lanterna',
    },

    {
      nome: '',
      texto: '*O som dos meus passos ecoa pelo beco vazio.*',
    },

    {
      nome: '',
      texto: '*…*',
    },

    {
      nome: '',
      texto: '*Mesmo assim…*',
    },

    {
      nome: '',
      texto: '*não consigo evitar a sensação de estar sendo observada.*',
      sprite: 'aikomedo_lanterna',
    },
  ],
},

cena45_final: {
  background: require('../../../../assets/backgrounds/beco2.png'),
  proxima: 'cena46',
  dialogos: [

    {
      nome: '',
      texto: '*Continuo andando em direção à loja.*',
      sprite: 'aikomedo_lanterna',
    },

    {
      nome: '',
      texto: '*A luz fraca dela continua brilhando no fim do beco.*',
      sprite: 'aikoseria_lanterna',
    },

    {
      nome: '',
      texto: '*Hoje ela parece mais distante do que o normal.*',
    },

    {
      nome: '',
      texto: '*…*',
    },

    {
      nome: '',
      texto: '*Mas ainda é a única luz naquele lugar.*',
    },
  ],
},
cena46: {
  background: require('../../../../assets/backgrounds/lightshop.png'),
  proxima: 'cena47',
  dialogos: [

    {
      nome: '', bgm: 'tensao', ambience: null, sfx: 'sino_loja',
      texto: '*Chego na loja com o mesmo propósito de sempre.*',
    },

    {
      nome: '',
      texto: '*Mas acho que não sou a única a precisar de luzes a essa hora.*',
    },

    {
      nome: '',
      texto: '*Tem uma mulher perguntando algo ao vendedor.*',
      background: require('../../../../assets/backgrounds/vendedoremulhercansada.png'),
    },

    {
      nome: '',
      texto: '*Ela parece muito cansada…*',
    },

    {
      nome: '',
      texto: '*Espera…*',
    },

    {
      nome: '',
      texto: '*Eu já vi essa mulher…*',
      background: require('../../../../assets/backgrounds/lightshop.png'),
    },

    {
      nome: '',
      texto: '*Era ela…*',
      sprite: 'mulhercansada_seria',
    },

    {
      nome: '',
      texto: '*Era a mesma mulher que eu achei ter visto lá embaixo, pela janela da escola…*',
      sprite: 'mulhercansada_seria',
    },

    {
      nome: '',
      texto: '*O que ela faz aqui?*',
      sprite: 'aiko_seria',
    },

    {
      nome: '',
      texto: '*Isso é muita coincidência…*',
      sprite: 'aiko_seria',
    },

    {
      nome: '',
      texto: '*Ela olha rapidamente pra mim…*',
      sprite: 'mulhercansada_seria',
    },

    {
      nome: '',
      texto: '*Por um instante, parece que ela vai dizer alguma coisa.*',
      sprite: 'mulhercansada_seria',
    },

    {
      nome: '',
      texto: '*Mas apenas abaixa o olhar.*',
      sprite: 'mulhercansada_seria',
    },

    {
      nome: '',
      texto: '*e então passa como se eu nem estivesse ali.*',
    },

    {
      nome: '',
      texto: '*Algo dentro de mim diz para que eu a ignore também.*',
    },

    {
      nome: '',
      texto: '*E assim eu faço.*',
    },

    {
      nome: '',
      texto: '*Olho para o vendedor.*',
      manterSprites: ['vendedor_serio'],
    },

    {
      nome: 'Aiko',
      texto: 'Boa noite, Sr. Takashi…',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Vendedor',
      texto: 'Deixa eu adivinhar… lâmpadas outra vez?',
      sprite: 'vendedor_explicando',
    },

    {
      nome: 'Aiko',
      texto: 'Na mosca.',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: 'Aiko',
      texto: 'É… Sr. Takashi, uma pergunta…',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Vendedor',
      texto: 'Pode falar.',
      sprite: 'vendedor_serio',
    },

    {
      nome: 'Aiko',
      texto: 'Aquela mulher… você sabe quem é ela?',
      sprite: 'aiko_curiosa',
    },

    {
      nome: 'Vendedor',
      texto: 'Eu não. É apenas uma cliente.',
      sprite: 'vendedor_serio',
    },

    {
      nome: 'Aiko',
      texto: 'Mas ela nem levou nada.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Vendedor',
      texto: 'Você a conhece?',
      sprite: 'vendedor_serio',
    },

    {
      nome: '',
      texto: 'ESCOLHA',
      escolhas: [
        { texto: 'Talvez…', proxima: 'cena46_talvez' },
        { texto: 'Não.', proxima: 'cena46_nao' },
        { texto: 'Não tenho certeza.', proxima: 'cena46_certeza' },
      ],
    },
  ],
},

cena46_talvez: {
  background: require('../../../../assets/backgrounds/lightshop.png'),
  proxima: 'cena46_final',
  dialogos: [

    {
      nome: 'Aiko',
      texto: 'Talvez…',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Aiko',
      texto: 'Ou talvez eu só esteja vendo coisas onde não existem mesmo.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Vendedor',
      texto: 'Hm.',
      sprite: 'vendedor_serio',
    },

    {
      nome: '',
      texto: '*Ele continua organizando as caixas.*',
      manterSprites: ['vendedor_serio'],
    },

    {
      nome: 'Vendedor',
      texto: 'Acontece.',
      sprite: 'vendedor_explicando',
    },
  ],
},

cena46_nao: {
  background: require('../../../../assets/backgrounds/lightshop.png'),
  proxima: 'cena46_final',
  dialogos: [

    {
      nome: 'Aiko',
      texto: 'Não.',
      sprite: 'aiko_seria',
    },

    {
      nome: 'Aiko',
      texto: 'Acho que só confundi ela com outra pessoa.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Vendedor',
      texto: 'Entendo.',
      sprite: 'vendedor_serio',
    },

    {
      nome: '',
      texto: '*Mas ele não parece convencido.*',
    },
  ],
},

cena46_certeza: {
  background: require('../../../../assets/backgrounds/lightshop.png'),
  proxima: 'cena46_final',
  dialogos: [

    {
      nome: 'Aiko',
      texto: 'Não tenho certeza…',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Aiko',
      texto: 'Parece que eu já vi ela antes…',
      sprite: 'aiko_falando',
    },

    {
      nome: '',
      texto: '*O vendedor fica em silêncio por alguns segundos.*',
      manterSprites: ['vendedor_serio'],
    },

    {
      nome: 'Vendedor',
      texto: 'Às vezes a gente reconhece coisas antes mesmo de entender de onde.',
      sprite: 'vendedor_explicando',
    },
  ],
},

cena46_final: {
  background: require('../../../../assets/backgrounds/lightshop.png'),
  proxima: 'cena47',
  dialogos: [

    {
      nome: 'Vendedor',
      texto: 'Então… aqui suas lâmpadas.',
      sprite: 'vendedor_explicando',
    },

    {
      nome: 'Aiko',
      texto: 'Não está esquecendo de nada não?',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: 'Vendedor',
      texto: 'Ah, sim. Bem lembrado.',
      sprite: 'vendedor_serio',
    },

    {
      nome: 'Vendedor',
      texto: 'Aqui estão suas balinhas.',
      sprite: 'vendedor_explicando',
    },

    {
      nome: 'Vendedor',
      texto: 'Está ficando mal acostumada.',
      sprite: 'vendedor_explicando',
    },

    {
      nome: 'Aiko',
      texto: 'O senhor acha?',
      sprite: 'aiko_rindo',
    },

    {
      nome: '',
      texto: '*Nós rimos.*',
    },

    {
      nome: '',
      texto: '*Mas antes de sair…*',
    },

    {
      nome: '',
      texto: '*Olho discretamente para a porta da loja.*',
    },

    {
      nome: '',
      texto: '*A mulher já não está mais lá fora.*',
    },

    {
      nome: '',
      texto: '*Nem no beco.*',
    },

    {
      nome: '', sfx: 'sino_loja',
      texto: '*Como se simplesmente tivesse desaparecido.*',
    },
  ],
},

cena47: {
  background: require('../../../../assets/backgrounds/predionight.png'),
  proxima: 'cena48',
  dialogos: [

    {
      nome: '', sfx: 'passos_afastando', 
      texto: '*Finalmente estou chegando em casa.*',
      sprite: 'aiko_seria',
    },

    {
      nome: '',
      texto: '*Confesso que esperava alguém aqui…*',
    },

    {
      nome: '',
      texto: '*Acho que ele deve ter encontrado o tal cachorro finalmente…*',
    },

    {
      nome: '',
      texto: '*O prédio está silencioso hoje.*',
    },
  ],
},

cena48: {
  background: require('../../../../assets/backgrounds/aikoshouse2.png'),
  proxima: 'cena49',
  dialogos: [

    {
      nome: '', sfx: 'porta_casa',
      texto: '*Abro a porta.*',
    },

    {
      nome: '',
      texto: '*Olho para a sala, que continua a mesma.*',
    },

    {
      nome: '',
      texto: '*Já estou ficando cansada dessas velas o tempo todo.*',
    },

    {
      nome: '',
      texto: '*Parece até que as lâmpadas escolhem a noite para parar de funcionar…*',
    },

    {
      nome: '',
      texto: '*Não sei como mamãe não se irrita.*',
    },

    {
      nome: 'Aiko',
      texto: 'Ei mãe, já cheguei.',
      sprite: 'aiko_falando',
    },

    {
      nome: '',
      texto: '*Mamãe olha pra mim por cima da chama da vela.*',
      background: require('../../../../assets/backgrounds/aikomaemesa.png'),
    },

    {
      nome: 'Mãe',
      texto: 'Oi, filha.',
      sprite: 'mae_falando',
      background: require('../../../../assets/backgrounds/aikoshouse.png'),
    },

    {
      nome: '',
      texto: '*A voz dela continua calma.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: '',
      texto: '*Como sempre.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: '',
      texto: '*Coloco a sacola sobre a mesa.*',
      sprite: 'aiko_seria',
    },

    {
      nome: 'Aiko',
      texto: 'Trouxe as lâmpadas.',
      sprite: 'aiko_falando',
    },

    {
      nome: '',
      texto: '*Mamãe observa a sacola por alguns segundos.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: 'Mãe',
      texto: 'Você comprou direitinho dessa vez.',
      sprite: 'mae_falando',
    },

    {
      nome: 'Aiko',
      texto: '“Dessa vez” me ofende um pouco.',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: '',
      texto: '*Mãe sorri de leve.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: '',
      texto: '*É um sorriso pequeno.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: '',
      texto: '*Mas sincero.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: '',
      texto: '*Acabo sorrindo também.*',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: 'Aiko',
      texto: 'Hoje a escola foi… estranhamente divertida.',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: 'Mãe',
      texto: 'Hm?',
      sprite: 'mae_normal',
    },

    {
      nome: '',
      texto: '*A luz da vela balança devagar.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: 'Aiko',
      texto: 'Eu deixei as meninas virem comigo hoje.',
      sprite: 'aiko_falando',
    },

    {
      nome: '',
      texto: '*Mamãe fica em silêncio por um instante.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: 'Mãe',
      texto: 'É mesmo?',
      sprite: 'mae_falando',
    },

    {
      nome: 'Aiko',
      texto: 'É.',
      sprite: 'aiko_sorrisoleve',
    },

    {
      nome: 'Aiko',
      texto: 'Elas ficaram assustadas com o beco.',
      sprite: 'aiko_falando',
    },

    {
      nome: '',
      texto: '*Mamãe abaixa os olhos lentamente.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: 'Mãe',
      texto: 'Entendo.',
      sprite: 'mae_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Mas eu acho que já me acostumei tanto com esse caminho…',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Aiko',
      texto: 'que às vezes esqueço que ele parece estranho.',
      sprite: 'aiko_seria',
    },

    {
      nome: '',
      texto: '*Mãe passa os dedos pela lateral da vela derretida.*',
      manterSprites: ['mae_normal'],
    },

    {
      nome: 'Mãe',
      texto: 'A gente se acostuma com muita coisa sem perceber.',
      sprite: 'mae_falando',
    },

    {
      nome: '',
      texto: '*Olho para ela, enquanto as chamas da vela iluminam seus olhos.*',
      sprite: 'aiko_seria',
    },

    {
      nome: 'Aiko',
      texto: 'Eu vi na loja do Sr. Takashi uma mulher que eu vi da janela da escola…',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Isso não é estranho?',
      sprite: 'aiko_curiosa',
    },

    {
      nome: 'Mãe',
      texto: 'Talvez seja outra pessoa.',
      sprite: 'mae_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Pode ser… mas não parecia.',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Aiko',
      texto: 'E sabe o que é mais estranho ainda?',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Mãe',
      texto: 'O que?',
      sprite: 'mae_normal',
    },

    {
      nome: 'Aiko',
      texto: 'Ela olhou pra mim, mas depois passou como se eu nem existisse.',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Aiko',
      texto: 'Mas deve ter sido porque ela estava cansada.',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Pelo menos era o que aparentava.',
      sprite: 'aiko_seria',
    },

    {
      nome: 'Aiko',
      texto: 'Parece que ela não dormia há séculos.',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Mãe',
      texto: 'É mesmo?',
      sprite: 'mae_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Sim…',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Aiko',
      texto: 'E por falar nisso, você não vai dormir tarde de novo, não é?',
      sprite: 'aiko_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Não lembro de te ver indo dormir.',
      sprite: 'aiko_curiosa',
    },

    {
      nome: 'Mãe',
      texto: 'Não se preocupe, eu já vou.',
      sprite: 'mae_falando',
    },

    {
      nome: 'Aiko',
      texto: 'Mas mãe…',
      sprite: 'aiko_timida',
    },

    {
      nome: 'Mãe',
      texto: 'Sério, filha, já vou.',
      sprite: 'mae_falando',
    },

    {
      nome: '',
      texto: 'ESCOLHA',
      escolhas: [
        { texto: 'Perguntar se ela está bem', proxima: 'cena48_perguntar' },
        { texto: 'Não insistir', proxima: 'cena48_nao_insistir' },
      ],
    },
  ],
},

cena48_perguntar: {
  background: require('../../../../assets/backgrounds/aikoshouse2.png'),
  proxima: 'cena48_final',
  dialogos: [
    {
      nome: 'Aiko',
      texto: 'Mãe… você tá bem mesmo?',
      sprite: 'aiko_timida',
    },
    {
      nome: '',
      texto: '*Ela me encara por alguns segundos, calma demais.*',
      manterSprites: ['mae_normal'],
    },
    {
      nome: 'Mãe',
      texto: 'Estou, filha.',
      sprite: 'mae_falando',
    },
    {
      nome: 'Mãe',
      texto: 'Só estou um pouco cansada.',
      sprite: 'mae_falando',
    },
    {
      nome: '',
      texto: '*Quero acreditar nisso.*',
      sprite: 'aiko_seria',
    },
  ],
},

cena48_nao_insistir: {
  background: require('../../../../assets/backgrounds/aikoshouse2.png'),
  proxima: 'cena48_final',
  dialogos: [
    {
      nome: '',
      texto: '*Engulo as perguntas que estavam quase saindo.*',
      sprite: 'aiko_timida',
    },
    {
      nome: '',
      texto: '*Talvez insistir só deixasse tudo mais pesado.*',
      sprite: 'aiko_seria',
    },
  ],
},

cena48_final: {
  background: require('../../../../assets/backgrounds/aikoshouse2.png'),
  proxima: 'cena49',
  dialogos: [
    {
      nome: '',
      texto: '*Vou em direção ao quarto…*',
      sprite: 'aiko_seria',
    },

    {
      nome: '',
      texto: '*Ela continua observando a chama da vela enquanto passo por ela…*',
      background: require('../../../../assets/backgrounds/aikomaemesa.png'),
    },

    {
      nome: 'Aiko',
      texto: 'Boa noite, mãe.', background: require('../../../../assets/backgrounds/aikoshouse.png'),
      sprite: 'aiko_falando',
    },

    {
      nome: 'Mãe',
      texto: 'Boa noite, filha.',
      sprite: 'mae_falando',
    },

    {
      nome: '',
      texto: '*…*',
      efeito: 'fadeSlow',
    },
  ],
},
} as const;
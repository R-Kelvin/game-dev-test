import DateTimePicker from '@react-native-community/datetimepicker';
import { ResizeMode, Video } from 'expo-av';
import { router } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  // ===== AQUI FICAM OS ESTADOS =====
  const [cadastroAberto, setCadastroAberto] = useState(false);
  const [loginAberto, setLoginAberto] = useState(false);
  const [configAberta, setConfigAberta] = useState(false);
  const [volumeMusica, setVolumeMusica] = useState(60);
  const [data, setData] = useState(new Date());
  const [mostrarPicker, setMostrarPicker] = useState(false);
  const [avisoOfflineAberto, setAvisoOfflineAberto] = useState(false);

  const isMobile = Platform.OS !== 'web';

  // ===== AQUI FICAM AS ANIMAÇÕES =====
  const brilhoAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const butterfly1Y = useRef(new Animated.Value(0)).current;
  const butterfly1X = useRef(new Animated.Value(0)).current;
  const butterfly2Y = useRef(new Animated.Value(0)).current;
  const butterfly2X = useRef(new Animated.Value(0)).current;

  // ===== AQUI FICA O ESTILO DOS INPUTS =====
  const inputStyle = {
    backgroundColor: 'rgba(18, 8, 32, 0.95)',
    color: '#fff',
    padding: isMobile ? 9 : 14,
    borderRadius: 12,
    marginBottom: isMobile ? 8 : 12,
    fontSize: isMobile ? 12 : 14,
    borderWidth: 1,
    borderColor: 'rgba(190, 130, 255, 0.35)',
  };

  // ===== AQUI FICAM AS FUNÇÕES =====
  const abrirJogo = () => {
    router.replace('/game');
  };

  const girarEngrenagem = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  // ===== AQUI FICAM AS ANIMAÇÕES INICIAIS =====
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    Animated.loop(
      Animated.sequence([
        Animated.timing(brilhoAnim, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(brilhoAnim, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(butterfly1Y, {
            toValue: -10,
            duration: 2200,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(butterfly1X, {
            toValue: 6,
            duration: 2200,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(butterfly1Y, {
            toValue: 0,
            duration: 2200,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(butterfly1X, {
            toValue: 0,
            duration: 2200,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(butterfly2Y, {
            toValue: 8,
            duration: 2800,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(butterfly2X, {
            toValue: -8,
            duration: 2800,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(butterfly2Y, {
            toValue: 0,
            duration: 2800,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(butterfly2X, {
            toValue: 0,
            duration: 2800,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  const glow = brilhoAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.45, 1],
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#05000b', overflow: 'hidden' }}>
      {/* ===== AQUI FICA O FUNDO DO MENU ===== */}
      <Video
        source={require('../../assets/lastlight.mp4')}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted={volumeMusica === 0}
        volume={volumeMusica / 100}
      />

      <View
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.18)',
        }}
      />

      <View
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          left: 0,
          top: 0,
          width: isMobile ? 420 : 620,
          height: '100%',
          backgroundColor: 'rgba(8, 0, 18, 0.56)',
        }}
      />

      <View
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderWidth: isMobile ? 22 : 42,
          borderColor: 'rgba(0,0,0,0.42)',
        }}
      />

      {/* ===== AQUI FICAM AS BORBOLETAS ===== */}
      <Animated.Image
        source={require('../../assets/borboleta.png')}
        style={{
          position: 'absolute',
          left: isMobile ? 36 : 66,
          top: isMobile ? 38 : 60,
          width: isMobile ? 80 : 120,
          height: isMobile ? 80 : 120,
          opacity: 0.55,
          transform: [{ translateY: butterfly1Y }, { translateX: butterfly1X }],
          zIndex: 4,
        }}
        resizeMode="contain"
      />

      <Animated.Image
        source={require('../../assets/borboleta.png')}
        style={{
          position: 'absolute',
          left: isMobile ? 200 : 300,
          top: isMobile ? 210 : 310,
          width: isMobile ? 20 : 28,
          height: isMobile ? 20 : 28,
          opacity: 0.45,
          transform: [{ translateY: butterfly2Y }, { translateX: butterfly2X }],
          zIndex: 4,
        }}
        resizeMode="contain"
      />

      {/* ===== AQUI FICA O BOTÃO DE CONFIGURAÇÕES ===== */}
      <View
        style={{
          position: 'absolute',
          top: isMobile ? 14 : 28,
          right: isMobile ? 20 : 36,
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            girarEngrenagem();
            setConfigAberta(true);
          }}
          activeOpacity={0.8}
          style={{
            width: isMobile ? 42 : 54,
            height: isMobile ? 42 : 54,
            borderRadius: 999,
            backgroundColor: 'rgba(20, 8, 38, 0.8)',
            borderWidth: 2,
            borderColor: '#d8b8ff',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#b45cff',
            shadowOpacity: 0.9,
            shadowRadius: 15,
            elevation: 12,
          }}
        >
          <Animated.Image
            source={require('../../assets/gear.png')}
            style={{
              width: isMobile ? 31 : 42,
              height: isMobile ? 31 : 42,
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

        <Text
          style={{
            color: 'rgba(220, 190, 255, 0.7)',
            fontSize: isMobile ? 7 : 9,
            letterSpacing: 1.2,
            marginTop: 4,
            fontWeight: '600',
          }}
        >
          CONFIGURAÇÕES
        </Text>
      </View>

      {/* ===== AQUI FICA O PAINEL PRINCIPAL ===== */}
      <View
        style={{
          position: 'absolute',
          left: isMobile ? 42 : 78,
          top: isMobile ? 4 : 22,
          width: isMobile ? 340 : 520,
          alignItems: 'center',
          zIndex: 5,
        }}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={{
            width: isMobile ? 250 : 390,
            height: isMobile ? 145 : 230,
            marginBottom: isMobile ? -6 : -12,
          }}
          resizeMode="contain"
        />

        {/* ===== AQUI FICA A SINOPSE ===== */}
        <View
          style={{
            width: '100%',
            backgroundColor: 'rgba(7, 2, 15, 0.76)',
            borderWidth: 1.5,
            borderColor: 'rgba(183, 95, 255, 0.75)',
            borderRadius: 18,
            paddingVertical: isMobile ? 14 : 22,
            paddingHorizontal: isMobile ? 18 : 30,
            shadowColor: '#a653ff',
            shadowOpacity: 0.9,
            shadowRadius: 18,
            elevation: 15,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: 13,
              top: 8,
              color: '#8f4cff',
              fontSize: isMobile ? 18 : 25,
              opacity: 0.65,
            }}
          >
            ✧
          </Text>

          <Text
            style={{
              position: 'absolute',
              right: 13,
              top: 8,
              color: '#8f4cff',
              fontSize: isMobile ? 18 : 25,
              opacity: 0.65,
            }}
          >
            ✧
          </Text>

          <Text
            style={{
              color: '#f2eaff',
              fontSize: isMobile ? 12 : 18,
              lineHeight: isMobile ? 18 : 27,
              textAlign: 'center',
            }}
          >
            Aiko Yukimura segue todas as noites o mesmo caminho após a escola,
            levando lâmpadas para sua mãe.
          </Text>

          <View
            style={{
              height: 1,
              width: '80%',
              alignSelf: 'center',
              backgroundColor: 'rgba(205, 150, 255, 0.35)',
              marginVertical: isMobile ? 10 : 17,
            }}
          />

          <Text
            style={{
              color: '#d7b9ff',
              fontSize: isMobile ? 12 : 18,
              lineHeight: isMobile ? 18 : 27,
              textAlign: 'center',
            }}
          >
            Tudo parece igual... até que pequenas coisas começam a não fazer mais sentido.
          </Text>
        </View>

        {/* ===== AQUI FICAM OS BOTÕES ===== */}
        <Animated.View
          style={{
            opacity: glow,
            width: isMobile ? 285 : 430,
            marginTop: isMobile ? 14 : 22,
            shadowColor: '#d788ff',
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => setLoginAberto(true)}
            activeOpacity={0.85}
            style={{
              height: isMobile ? 56 : 76,
              borderRadius: 13,
              backgroundColor: 'rgba(189, 94, 255, 0.95)',
              borderWidth: 1.5,
              borderColor: '#f1d9ff',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Text style={{ fontSize: isMobile ? 24 : 35, marginRight: 18 }}>
              🔮
            </Text>

            <Text
              style={{
                color: '#fff',
                fontSize: isMobile ? 22 : 34,
                fontWeight: 'bold',
                letterSpacing: 3,
              }}
            >
              ENTRAR
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity
          onPress={() => setCadastroAberto(true)}
          activeOpacity={0.85}
          style={{
            width: isMobile ? 285 : 430,
            height: isMobile ? 52 : 72,
            borderRadius: 13,
            backgroundColor: 'rgba(18, 5, 35, 0.86)',
            borderWidth: 1.5,
            borderColor: '#b875ff',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: isMobile ? 10 : 16,
          }}
        >
          <Text style={{ fontSize: isMobile ? 21 : 31, marginRight: 16 }}>
            👤
          </Text>

          <Text
            style={{
              color: '#e8d4ff',
              fontSize: isMobile ? 20 : 30,
              fontWeight: 'bold',
              letterSpacing: 2.4,
            }}
          >
            CRIAR CONTA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLoginAberto(true)}>
          <Text
            style={{
              color: '#d6b6ff',
              fontSize: isMobile ? 10 : 14,
              marginTop: isMobile ? 6 : 10,
              textDecorationLine: 'underline',
            }}
          >
            Esqueci minha senha 〉
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: isMobile ? 285 : 430,
            marginTop: isMobile ? 10 : 14,
            marginBottom: isMobile ? 2 : 4,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'rgba(190, 130, 255, 0.35)',
            }}
          />

          <Text
            style={{
              color: 'rgba(190, 150, 255, 0.7)',
              fontSize: isMobile ? 10 : 12,
              marginHorizontal: isMobile ? 10 : 14,
              letterSpacing: 2,
              fontWeight: '600',
            }}
          >
            OU
          </Text>

          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'rgba(190, 130, 255, 0.35)',
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => setAvisoOfflineAberto(true)}
          activeOpacity={0.8}
          style={{
            width: isMobile ? 285 : 430,
            height: isMobile ? 44 : 58,
            borderRadius: 13,
            backgroundColor: 'rgba(30, 10, 55, 0.6)',
            borderWidth: 1,
            borderColor: 'rgba(190, 130, 255, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: isMobile ? 4 : 6,
          }}
        >
          <Text style={{ fontSize: isMobile ? 16 : 22, marginRight: 10 }}>
            👁️
          </Text>

          <Text
            style={{
              color: 'rgba(220, 190, 255, 0.85)',
              fontSize: isMobile ? 14 : 20,
              fontWeight: '600',
              letterSpacing: 1.6,
            }}
          >
            CONTINUAR SEM CONTA
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'rgba(180, 140, 255, 0.5)',
            fontSize: isMobile ? 9 : 11,
            marginTop: isMobile ? 4 : 6,
            letterSpacing: 0.5,
          }}
        >
          Jogar offline (alguns recursos limitados)
        </Text>
      </View>

      {/* ===== MODAL AVISO OFFLINE ===== */}
      <Modal visible={avisoOfflineAberto} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.78)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              width: isMobile ? '82%' : 460,
              backgroundColor: 'rgba(18, 5, 35, 0.97)',
              borderRadius: 24,
              borderWidth: 1.5,
              borderColor: 'rgba(205, 150, 255, 0.75)',
              paddingVertical: isMobile ? 20 : 28,
              paddingHorizontal: isMobile ? 20 : 28,
              shadowColor: '#b875ff',
              shadowOpacity: 1,
              shadowRadius: 22,
              elevation: 18,
            }}
          >
            <Text
              style={{
                color: '#f7edff',
                fontSize: isMobile ? 26 : 34,
                textAlign: 'center',
                marginBottom: 6,
              }}
            >
              ⚠️
            </Text>

            <Text
              style={{
                color: '#f7edff',
                fontSize: isMobile ? 20 : 27,
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: 1.2,
                marginBottom: 12,
              }}
            >
              Progresso não salvo
            </Text>

            <View
              style={{
                height: 1,
                width: '75%',
                alignSelf: 'center',
                backgroundColor: 'rgba(205, 150, 255, 0.35)',
                marginBottom: 16,
              }}
            />

            <Text
              style={{
                color: '#d9c3ff',
                fontSize: isMobile ? 13 : 16,
                lineHeight: isMobile ? 19 : 24,
                textAlign: 'center',
                marginBottom: 22,
              }}
            >
              Se você continuar sem entrar em uma conta, seu progresso poderá ser
              perdido ao fechar o jogo ou trocar de dispositivo.
            </Text>

            <TouchableOpacity
              onPress={() => {
                setAvisoOfflineAberto(false);
                abrirJogo();
              }}
              activeOpacity={0.85}
              style={{
                backgroundColor: 'rgba(189, 94, 255, 0.95)',
                borderWidth: 1.5,
                borderColor: '#f1d9ff',
                paddingVertical: isMobile ? 11 : 14,
                borderRadius: 14,
                shadowColor: '#d788ff',
                shadowOpacity: 1,
                shadowRadius: 14,
                elevation: 12,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: isMobile ? 14 : 17,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  letterSpacing: 1.5,
                }}
              >
                CONTINUAR MESMO ASSIM
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setAvisoOfflineAberto(false)}
              activeOpacity={0.85}
              style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                borderWidth: 1,
                borderColor: 'rgba(190, 130, 255, 0.35)',
                paddingVertical: isMobile ? 10 : 13,
                borderRadius: 14,
              }}
            >
              <Text
                style={{
                  color: '#d8c8ff',
                  fontSize: isMobile ? 13 : 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  letterSpacing: 1,
                }}
              >
                VOLTAR E FAZER LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ===== MODAL CONFIGURAÇÕES ===== */}
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
                onPress={() => setVolumeMusica((v) => Math.max(0, v - 10))}
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
                onPress={() => setVolumeMusica((v) => Math.min(100, v + 10))}
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
              onPress={() => setConfigAberta(false)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                paddingVertical: isMobile ? 10 : 13,
                borderRadius: 12,
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
          </View>
        </View>
      </Modal>

      {/* ===== MODAL LOGIN ===== */}
      <Modal visible={loginAberto} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.78)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: isMobile ? 12 : 24,
          }}
        >
          <View
            style={{
              width: isMobile ? '72%' : '100%',
              maxWidth: 430,
              backgroundColor: 'rgba(18, 8, 32, 0.97)',
              borderRadius: 22,
              padding: isMobile ? 16 : 24,
              borderWidth: 1,
              borderColor: 'rgba(190, 130, 255, 0.62)',
            }}
          >
            <Text
              style={{
                color: '#f2e9ff',
                fontSize: isMobile ? 20 : 27,
                fontWeight: 'bold',
                marginBottom: isMobile ? 12 : 18,
                textAlign: 'center',
                letterSpacing: 1,
              }}
            >
              ENTRAR
            </Text>

            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              style={inputStyle}
            />

            <TextInput
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              style={inputStyle}
            />

            <TouchableOpacity
              onPress={abrirJogo}
              style={{
                backgroundColor: '#b875ff',
                padding: isMobile ? 10 : 14,
                borderRadius: 12,
                marginTop: 4,
              }}
            >
              <Text
                style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}
              >
                ENTRAR NO JOGO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setLoginAberto(false)}>
              <Text style={{ color: '#bbb', textAlign: 'center', marginTop: 12 }}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ===== MODAL CADASTRO ===== */}
      <Modal visible={cadastroAberto} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.78)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: isMobile ? 10 : 24,
          }}
        >
          <ScrollView
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <View
              style={{
                width: isMobile ? 430 : '100%',
                maxWidth: 430,
                backgroundColor: 'rgba(18, 8, 32, 0.97)',
                borderRadius: 22,
                padding: isMobile ? 14 : 24,
                borderWidth: 1,
                borderColor: 'rgba(190, 130, 255, 0.62)',
              }}
            >
              <Text
                style={{
                  color: '#f2e9ff',
                  fontSize: isMobile ? 20 : 27,
                  fontWeight: 'bold',
                  marginBottom: isMobile ? 10 : 18,
                  textAlign: 'center',
                  letterSpacing: 1,
                }}
              >
                CRIAR CONTA
              </Text>

              <TextInput placeholder="Nome" placeholderTextColor="#aaa" style={inputStyle} />
              <TextInput placeholder="Sobrenome" placeholderTextColor="#aaa" style={inputStyle} />
              <TextInput placeholder="E-mail" placeholderTextColor="#aaa" style={inputStyle} />
              <TextInput placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry style={inputStyle} />
              <TextInput placeholder="Confirmar senha" placeholderTextColor="#aaa" secureTextEntry style={inputStyle} />

              <TouchableOpacity onPress={() => setMostrarPicker(true)} style={inputStyle}>
                <Text style={{ color: '#aaa' }}>{data.toLocaleDateString()}</Text>
              </TouchableOpacity>

              {mostrarPicker && (
                <DateTimePicker
                  value={data}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setMostrarPicker(false);
                    if (selectedDate) setData(selectedDate);
                  }}
                />
              )}

              <TouchableOpacity
                onPress={abrirJogo}
                style={{
                  backgroundColor: '#b875ff',
                  padding: isMobile ? 10 : 14,
                  borderRadius: 12,
                  marginTop: 4,
                }}
              >
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
                  CONFIRMAR
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setCadastroAberto(false)}>
                <Text style={{ color: '#bbb', textAlign: 'center', marginTop: 12 }}>
                  Fechar
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
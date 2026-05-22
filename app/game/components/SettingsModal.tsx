import {
    Modal,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type SettingsModalProps = {
  visible: boolean;
  isMobile: boolean;
  volumeMusica: number;
  onClose: () => void;
  diminuirVolume: () => void;
  aumentarVolume: () => void;
  salvarJogo: () => void;
  voltarMenu: () => void;
};

export function SettingsModal({
  visible,
  isMobile,
  volumeMusica,
  onClose,
  diminuirVolume,
  aumentarVolume,
  salvarJogo,
  voltarMenu,
}: SettingsModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
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
            onPress={voltarMenu}
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

          <TouchableOpacity onPress={onClose}>
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
  );
}
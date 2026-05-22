import { Text, View } from 'react-native';

type DialogueBoxProps = {
  nome: string;
  texto: string;
  digitando: boolean;
  isMobile: boolean;
  fonteNome: string | undefined;
};

export function DialogueBox({
  nome,
  texto,
  digitando,
  isMobile,
  fonteNome,
}: DialogueBoxProps) {
  return (
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
          width: isMobile ? '88%' : '72%',
          maxWidth: 900,
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
        {nome !== '' && (
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
              {nome}
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
          {texto}
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
  );
}
import { Dimensions, Pressable, Text, View } from 'react-native';
import type { EscolhaNarrativa } from '../data/types';

const { width } = Dimensions.get('window');

type NarrativeChoicesProps = {
  escolhas: EscolhaNarrativa[];
  isMobile: boolean;
  onChoose: (proximaCena: string) => void;
};

export function NarrativeChoices({
  escolhas,
  isMobile,
  onChoose,
}: NarrativeChoicesProps) {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 26,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: isMobile ? 18 : 40,
      }}
      pointerEvents="box-none"
    >
      <View
        style={{
          width: isMobile ? '86%' : Math.min(width * 0.55, 640),
          backgroundColor: 'rgba(18, 5, 35, 0.82)',
          borderRadius: isMobile ? 20 : 26,
          borderWidth: 1.2,
          borderColor: 'rgba(210, 160, 255, 0.78)',
          padding: isMobile ? 14 : 22,
          gap: isMobile ? 10 : 14,
          shadowColor: '#9b4dff',
          shadowOpacity: 0.55,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 0 },
          elevation: 14,
        }}
      >
        {escolhas.map((opcao, index) => (
          <Pressable
            key={`${opcao.texto}-${index}`}
            onPress={() => onChoose(opcao.proxima)}
            style={({ pressed }) => [
              {
                minHeight: isMobile ? 46 : 58,
                borderRadius: isMobile ? 16 : 18,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: isMobile ? 14 : 22,
                paddingVertical: isMobile ? 9 : 13,
              },
              {
                backgroundColor: pressed
                  ? 'rgba(92, 28, 145, 0.98)'
                  : 'rgba(42, 8, 75, 0.95)',
                borderWidth: pressed ? 2 : 1,
                borderColor: pressed ? '#fff' : 'rgba(210, 160, 255, 0.85)',
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
          >
            <Text
              style={{
                color: '#f8f2ff',
                fontSize: isMobile ? 15 : 19,
                fontWeight: '700',
                textAlign: 'center',
                letterSpacing: 0.25,
              }}
            >
              {opcao.texto}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
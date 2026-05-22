import { Pressable, Text, View } from 'react-native';
import type { CorBala } from '../data/types';

type CandyChoicesProps = {
  onChoose: (cor: CorBala) => void;
};

export function CandyChoices({ onChoose }: CandyChoicesProps) {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 25,
      }}
      pointerEvents="box-none"
    >
      {(['Roxas', 'Verdes', 'Rosas'] as CorBala[]).map((cor, index) => (
        <Pressable
          key={cor}
          onPress={() => onChoose(cor)}
          style={({ pressed }) => [
            {
              position: 'absolute',
              left: index === 0 ? '5%' : index === 1 ? '38%' : '70%',
              top: index === 1 ? '72%' : '44%',
              width: 120,
              height: 48,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            },
            {
              backgroundColor: pressed
                ? 'rgba(92, 28, 145, 0.97)'
                : 'rgba(18, 5, 35, 0.92)',
              borderWidth: pressed ? 2 : 1,
              borderColor: pressed ? '#fff' : '#cfaaff',
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>{cor}</Text>
        </Pressable>
      ))}
    </View>
  );
}
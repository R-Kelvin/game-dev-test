import { Animated, Image, Platform } from 'react-native';

type SpriteRendererProps = {
  source: any;
  containerStyle: any;
  imageStyle: any;
  spriteFade: Animated.Value;
  efeitoSpriteWeb: string;
  sombraSpriteMobile: number;
};

export function SpriteRenderer({
  source,
  containerStyle,
  imageStyle,
  spriteFade,
  efeitoSpriteWeb,
  sombraSpriteMobile,
}: SpriteRendererProps) {
  return (
    <Animated.View
      style={[
        containerStyle,
        {
          opacity: spriteFade,
        },
      ]}
    >
      <Image
        source={source}
        style={[
          {
            width: '100%',
            height: '100%',
          },
          imageStyle,
          Platform.OS === 'web' && {
            filter: efeitoSpriteWeb,
          },
        ]}
        resizeMode="contain"
      />

      {Platform.OS !== 'web' && (
        <Image
          source={source}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            tintColor: '#000',
            opacity: sombraSpriteMobile,
          }}
          resizeMode="contain"
        />
      )}
    </Animated.View>
  );
}
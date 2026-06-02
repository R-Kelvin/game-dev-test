import { Audio } from 'expo-av';
import { sfxAssets } from './audioAssets';

export async function playClick(volume = 0.7) {
  try {
    const { sound } = await Audio.Sound.createAsync(
      sfxAssets.click,
      {
        volume,
        shouldPlay: true,
      }
    );

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    console.log('Erro ao tocar click:', error);
  }
}
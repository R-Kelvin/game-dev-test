import { Audio } from 'expo-av';
import { useEffect, useRef } from 'react';
import { ambienceAssets, bgmAssets, sfxAssets } from './audioAssets';

function getBgmByScene(bgmManual?: string | null) {
  if (bgmManual === 'alegria') return bgmAssets.alegria;
  if (bgmManual === 'alegriadois') return bgmAssets.alegriadois;
  if (bgmManual === 'tristeza') return bgmAssets.tristeza;
  if (bgmManual === 'tensao') return bgmAssets.tensao;
  if (bgmManual === 'menu') return bgmAssets.menu;
  if (bgmManual === null) return null;

  return null;
}

function getAmbienceByScene(ambienceManual?: string | null) {
  if (ambienceManual === 'escola') return ambienceAssets.escola;
  if (ambienceManual === 'vento') return ambienceAssets.vento;
  if (ambienceManual === 'chuva') return ambienceAssets.chuva;
  if (ambienceManual === 'vazio') return ambienceAssets.vazio;

  return null;
}

function getSfxByScene(sfxManual?: string | null) {
  if (!sfxManual) return null;

  return sfxAssets[sfxManual as keyof typeof sfxAssets] ?? null;
}

export function useGameAudio(
  cenaAtual: string,
  volumeMusica: number,
  ambienceManual?: string | null,
  bgmManual?: string | null,
  sfxManual?: string | null
) {
  const bgmRef = useRef<Audio.Sound | null>(null);
  const bgmAtualRef = useRef<any>(null);

  const ambienceRef = useRef<Audio.Sound | null>(null);
  const ambienceAtualRef = useRef<any>(null);

  const sfxRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    async function trocarMusica() {
      if (bgmManual === undefined) return;

      const novaMusica = getBgmByScene(bgmManual);

      if (bgmAtualRef.current === novaMusica) return;

      if (bgmRef.current) {
        await bgmRef.current.stopAsync();
        await bgmRef.current.unloadAsync();
        bgmRef.current = null;
        bgmAtualRef.current = null;
      }

      if (!novaMusica) return;

      const { sound } = await Audio.Sound.createAsync(novaMusica, {
        isLooping: true,
        volume: volumeMusica / 100,
        shouldPlay: true,
      });

      bgmRef.current = sound;
      bgmAtualRef.current = novaMusica;
    }

    trocarMusica();
  }, [cenaAtual, bgmManual]);

  useEffect(() => {
    async function trocarAmbiente() {
      if (ambienceManual === undefined) return;

      const novoAmbiente = getAmbienceByScene(ambienceManual);

      if (ambienceAtualRef.current === novoAmbiente) return;

      if (ambienceRef.current) {
        await ambienceRef.current.stopAsync();
        await ambienceRef.current.unloadAsync();
        ambienceRef.current = null;
        ambienceAtualRef.current = null;
      }

      if (!novoAmbiente) return;

      const { sound } = await Audio.Sound.createAsync(novoAmbiente, {
        isLooping: true,
        volume: (volumeMusica / 100) * 0.35,
        shouldPlay: true,
      });

      ambienceRef.current = sound;
      ambienceAtualRef.current = novoAmbiente;
    }

    trocarAmbiente();
  }, [ambienceManual]);

  useEffect(() => {
    async function tocarSfx() {
      if (!sfxManual) return;

      const novoSfx = getSfxByScene(sfxManual);

      if (!novoSfx) return;

      if (sfxRef.current) {
        await sfxRef.current.stopAsync();
        await sfxRef.current.unloadAsync();
        sfxRef.current = null;
      }

      const { sound } = await Audio.Sound.createAsync(novoSfx, {
        isLooping: false,
        volume: Math.min((volumeMusica / 100) * 1.2, 1),
        shouldPlay: true,
      });

      sfxRef.current = sound;

      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.isLoaded && status.didJustFinish) {
          await sound.unloadAsync();
          if (sfxRef.current === sound) {
            sfxRef.current = null;
          }
        }
      });
    }

    tocarSfx();
  }, [sfxManual, cenaAtual]);

  useEffect(() => {
    if (bgmRef.current) {
      bgmRef.current.setVolumeAsync(volumeMusica / 100);
    }

    if (ambienceRef.current) {
      ambienceRef.current.setVolumeAsync((volumeMusica / 100) * 0.45);
    }

    if (sfxRef.current) {
      sfxRef.current.setVolumeAsync(volumeMusica / 100);
    }
  }, [volumeMusica]);

  useEffect(() => {
    return () => {
      if (bgmRef.current) {
        bgmRef.current.unloadAsync();
      }

      if (ambienceRef.current) {
        ambienceRef.current.unloadAsync();
      }

      if (sfxRef.current) {
        sfxRef.current.unloadAsync();
      }
    };
  }, []);
}
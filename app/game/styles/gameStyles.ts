import { StyleSheet } from 'react-native';

export const gameStyles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#000',
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  overlayEscuro: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.32)',
    zIndex: 3,
  },

  fadePreto: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
});
export const lightTheme = {
  colors: {
    foreGround: '#EBEBEB',
    foreGroundLight: '#F1F1F1',
    border: '#ccc',
    body: '#fff',
    color: '#000',
    background: '#fff',
    title: '#555',
    spinnerColor: '#ff4b2b',
    spinnerBackground: 'rgba(0, 0, 0, 0.5);',
  },
}

export const darkTheme = {
  colors: {
    foreGround: '#181a1b',
    foreGroundLight: 'rgba(24, 26, 27, 0.9);',
    border: '#262f47',
    body: '#16191D',
    color: '#ffff',
    background: '#444',
    title: '#fafafa',
    spinnerColor: '#ff416c',
    spinnerBackground: 'rgba(255, 255, 255, 0.5)',
  },
}

export type Theme = typeof lightTheme

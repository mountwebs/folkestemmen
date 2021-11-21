const brown = '#735F18';
const darkBrown = '#513C08';
const white = '#FFF';
const black = '#000';
const lightYellow = '#F5F2E3';
const lightGreen = '#C3E679';
const lightGrey = '#BDBDBD';
const yellow = '#FFE074';

export const theme = {
  light: {
    id: 'T_001',
    name: 'Light',
    colors: {
      body: {
        primary: '#FFFFFF',
        secondary: '#F6F6F6',
        background: lightYellow,
      },
      text: {
        primary: black,
        secondary: darkBrown,
        tertiary: white,
        muted: lightGrey,
      },
      buttons: {
        header: {
          background: brown,
          text: white,
        },
        post: {
          background: lightGreen,
          text: brown,
          disabledBackground: lightGrey,
          disabledColor: black,
        },
        tag: {
          background: lightYellow,
          text: brown,
        },
      },
      button: {
        text: {
          primary: white,
          secondary: '#292929',
          disabled: '#A5A5A5',
        },
        background: {
          primary: '#292929',
          secondary: 'transparent',
          disabled: '#E5E5E5',
        },
      },
      question: {
        text: darkBrown,
        background: yellow,
      },
      link: {
        text: 'teal',
      },
    },
    font: 'Space Grotesk',
  },
};

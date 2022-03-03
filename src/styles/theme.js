const brown = '#735F18';
const darkBrown = '#50410B';
const darkerBrown = '#302405';
const white = '#FFF';
const black = '#000';
const lightYellow = '#FFEBA5';
const lighterYellow = '#F5F2E3';
const darkestGrey = '#333333';
const lightGreen = '#D0F286';
const lightGrey = '#BDBDBD';
const lighterGrey = '#FAFAFA';
const yellow = '#FFE074';
const beige = '#EBE6CE';
const orange = '#FF7272';

// Randaberg
const randabergLighterYellow = '#F5F2E3';
const randabergDarkBrown = '#513C08';
const randabergLightGreen = '#C3E679';

export const theme = {
  randaberg: {
    id: 'T_001',
    name: 'Light',
    colors: {
      brown,
      body: {
        primary: '#FFFFFF',
        secondary: '#F6F6F6',
        background: randabergLighterYellow,
      },
      text: {
        primary: black,
        secondary: randabergDarkBrown,
        tertiary: white,
        muted: lightGrey,
      },
      buttons: {
        header: {
          background: beige,
          text: darkBrown,
        },
        post: {
          background: lightGreen,
          text: darkerBrown,
          disabledBackground: lightGrey,
          disabledColor: black,
        },
        tag: {
          background: lightYellow,
          text: randabergDarkBrown,
        },
        extra: {
          color: white,
          background: '#82380E',
        },
      },
      button: {
        text: {
          primary: white,
          secondary: darkerBrown,
          disabled: '#A5A5A5',
        },
        background: {
          primary: '#292929',
          secondary: 'transparent',
          disabled: '#E5E5E5',
        },
      },
      question: {
        text: randabergDarkBrown,
        background: randabergLightGreen,
      },
      questionHeader: {
        background: beige,
        text: randabergDarkBrown,
      },
      currentUserAnswer: {
        background: lightGreen,
        details: darkestGrey,
        text: black,
      },
      answerMenu: { background: lighterGrey, deleteColor: orange },
      link: {
        text: 'teal',
      },
      extra: {
        color: black,
        background: '#F9DB83',
      },
      questionmark: {
        background: randabergDarkBrown,
        color: randabergLighterYellow,
      },
    },
    font: 'DM Sans',
  },
};

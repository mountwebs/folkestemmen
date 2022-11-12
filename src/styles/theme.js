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

const colors = {
  munch: {
    cultured: {
      default: '#F5F6F7',
    },
    seashell: {
      strong: '#EFECDF',
      default: '#FAF7EC',
    },
    brown: {
      default: '#2E2402',
      dark: '#231C00',
      light: '#513C08',
    },
    gray: {
      lightest: '#6a6a6a',
      light: '#bcbcbc',
      dark: '#333',
    },
  },
};

export const theme = {
  munch: {
    id: 'T_001',
    name: 'Light',
    colors: {
      brown,
      yellow,
      body: {
        primary: '#FFFFFF',
        secondary: '#F6F6F6',
        background: colors.munch.cultured.default,
      },
      text: {
        primary: black,
        secondary: colors.munch.brown.dark,
        tertiary: white,
        muted: lightGrey,
      },
      buttons: {
        header: {
          background: beige,
          text: darkBrown,
        },
        post: {
          background: colors.munch.gray.dark,
          text: white,
          disabledBackground: colors.munch.gray.light,
          disabledColor: colors.munch.gray.lightest,
        },
        tag: {
          background: colors.munch.seashell.default,
          hover: {
            background: colors.munch.seashell.strong,
          },
          text: black,
        },
        extra: {
          color: white,
          background: '#82380E',
        },
        sort: {
          selected: {
            background: colors.munch.gray.dark,
            text: white,
          },
          deselected: {
            background: colors.munch.seashell.strong,
            text: 'rgba(51,51,51,0.5)',
          },
        },
      },
      button: {
        text: {
          primary: white,
          secondary: black,
          disabled: '#A5A5A5',
        },
        background: {
          primary: colors.munch.gray.dark,
          secondary: white,
          disabled: '#E5E5E5',
        },
      },
      question: {
        text: colors.munch.darkBrown,
        background: colors.munch.seashell.default,
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
      footer: {
        background: colors.munch.brown.light,
      },
    },
    font: 'Oslo Sans',
  },
};

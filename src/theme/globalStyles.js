import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const theme = {
  light: {
    id: 'T_001',
    name: 'Light',
    colors: {
      body: {
        primary: '#FFFFFF',
        secondary: '#F6F6F6',
      },
      text: '#292929',
      button: {
        text: {
          primary: '#fff',
          secondary: '#292929',
          disabled: '#A5A5A5',
        },
        background: {
          primary: '#292929',
          secondary: 'transparent',
          disabled: '#E5E5E5',
        },
      },
      link: {
        text: 'teal',
      },
    },
    font: 'Space Grotesk',
  },
};

const GlobalStyle = createGlobalStyle`
// Import normalize.css
 ${normalize}

 @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body.primary};
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    font-size: 12px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear;
  }
  h1 {
    font-size: 33px;
    font-weight: 400;
  }
  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
  button {
    display: inline-block;
    border: 0;
    padding: 0.5rem 2rem;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font};
  }
`;

export default GlobalStyle;

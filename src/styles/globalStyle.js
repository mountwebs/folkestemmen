import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import device from '../constants/breakpoints';

const GlobalStyle = createGlobalStyle`
// Import normalize.css
${normalize}

 @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body.primary};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.font};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    @media only screen and ${device.sm} {
      font-size: 1.5rem;
    }
  }
  h1 {
    font-size: 33px;
    font-weight: 400;

    @media only screen and ${device.sm} {
      font-size: 2.5rem;
  }


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

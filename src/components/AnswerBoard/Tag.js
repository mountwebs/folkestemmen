import styled from 'styled-components';
import device from '../../constants/breakpoints';

const Tag = styled.span`
  padding: ${({ hide }) => (hide ? '0' : '0.5rem 1.5rem')};
  margin: ${({ hide }) => (hide ? '0' : '2px')};  
  background-color: ${({ theme, tagColor, hide }) =>
    hide ? 'white' : tagColor || theme.colors.buttons.tag.background}};
  color: ${({ theme }) => theme.colors.buttons.tag.text};
  border-radius: 20px;
  font-size: 14px;

  &:after {
    content: ${({ deletable }) => deletable && "'x'"};
    margin-left: ${({ deletable }) => deletable && '7px'};
  }

  @media only screen and ${device.sm} {
    font-size: 1.4rem;
  }
`;

export default Tag;

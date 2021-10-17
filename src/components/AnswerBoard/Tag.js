import styled from 'styled-components';

const Tag = styled.span`
  padding: 0.5rem 1.5rem;
  margin: 2px;
  background-color: ${({ theme, tagColor }) =>
    tagColor || theme.colors.buttons.tag.background};
  color: ${({ theme }) => theme.colors.buttons.tag.text};
  border-radius: 20px;
  font-size: 1rem;

  &:after {
    content: ${({ deletable }) => deletable && "'x'"};
    margin-left: ${({ deletable }) => deletable && '7px'};
  }
`;

export default Tag;

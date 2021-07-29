import styled from 'styled-components';

const Tag = styled.span`
  padding: 0.5rem 1.5rem;
  margin-left: 2px;
  background-color: ${({ theme, tagColor }) =>
    tagColor || theme.colors.button.background.disabled};
  color: ${({ theme }) => theme.colors.button.text.disabled};
  border-radius: 20px;
  font-size: 1rem;
`;

export default Tag;

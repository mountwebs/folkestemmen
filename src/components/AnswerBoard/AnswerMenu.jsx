import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  height: 100px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.answerMenu.background};
  border-radius: 25px;
`;

const StyledButtonContainer = styled.div``;

const StyledButton = styled.div``;

const AnswerMenu = () => {
  return (
    <StyledMenu>
      <StyledButton>Test</StyledButton>
    </StyledMenu>
  );
};

export default AnswerMenu;

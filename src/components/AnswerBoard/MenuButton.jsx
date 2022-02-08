import React from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled.div`
  background-color: white;
  margin: 10px;
  border-radius: 25px;
  padding: 10px 10px;
  font-size: 1rem;
`;

const StyledContainer = styled.a`
  padding-left: 10px;
  display: flex;
  color: ${({ style }) => (style ? style.color : 'black')};
`;

const StyledIconContainer = styled.div`
  margin-right: 5px;
`;

const MenuButton = ({ children, icon, style, clickHandler }) => {
  return (
    <>
      <StyledMenuButton onClick={clickHandler}>
        <StyledContainer href="/#">
          {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
          <div style={style}>{children}</div>
        </StyledContainer>
      </StyledMenuButton>
    </>
  );
};

export default MenuButton;

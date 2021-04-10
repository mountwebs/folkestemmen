import styled from 'styled-components';
import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

const MyProviderStyled = styled(MyProvider)`
  color: blue;
`;



const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 20px;
  padding: 10px 35px;
  border: none;
  background: ${(props) => (props.primary ? "#292929" : "#e5e5e5")};
  color: ${(props) => (props.primary ? "white" : "#a5a5a5")};
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChildrenDiv = styled.div`
`

const Button = ({children, disabled, icon, ...props}) => {
  return (
    <StyledButton {...props} disabled={disabled}>
      <ContainerDiv>      {icon && (
        <MyProviderStyled>
          <BsFillPersonFill />
        </MyProviderStyled>)}
        <ChildrenDiv>{children}</ChildrenDiv>
      </ContainerDiv>

      </StyledButton>
  )
}

export default Button;

import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  border-radius: 20px;
  padding: 10px 35px;
  border: none;
  background: ${(props) => (props.primary ? "#292929" : "#e5e5e5")};
  color: ${(props) => (props.primary ? "white" : "#a5a5a5")};
`;

export default Button;

import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import axios from 'axios';
import UserContext from '../../UserContext';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const StyledModalMain = styled.div`
  position: fixed;
  padding: 2rem;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.buttons.header.background};
  border-radius: 10px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and ${device.sm} {
    max-width: 700px;
  }
`;

const StyledCloseButton = styled(Button)`
  position: absolute;
  right: 1rem;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.body.primary};
  background-color: ${({ theme }) => theme.colors.buttons.header.background};
`;

const baseUrl = 'https://mighty-bayou-51480.herokuapp.com/';
// const baseUrl = 'http://localhost:4000/';

const Login = ({ setShowModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userData = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}auth/login`, {
        username: e.target.username.value,
        password: e.target.password.value,
      });
      if (res.status === 200 && res.data.isAdmin) {
        localStorage.setItem('jwtKey', res.data.accessToken);
        setIsLoggedIn(true);
        userData.setIsAdmin(true);
      }
    } catch (error) {}
  };

  return (
    <StyledModal>
      <StyledModalMain>
        <StyledCloseButton onClick={() => setShowModal(false)}>
          X
        </StyledCloseButton>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username </label>
            <input type="text" name="username" required />
          </p>
          <p>
            <label>Password </label>
            <input type="password" name="password" required />
          </p>

          <input type="submit" />
        </form>
      </StyledModalMain>
    </StyledModal>
  );
};

export default Login;

import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import UserContext from '../../UserContext';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const StyledModalMain = styled.div`
  position: fixed;
  padding: 2rem;
  max-width: 90%;
  background-color: white;
  border-radius: 10px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and ${device.sm} {
  }
`;

const StyledContent = styled.div`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 500;
  }

  p {
    max-width: 200px;
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 1.5rem;
  }
`;

const StyledInput = styled.input`
  background-color: #f8f8f8;
  border: none;
  border-radius: 15px;
  font-size: 2rem;
  padding: 10px 20px;
  max-width: 80%;
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: black;
  margin-top: 1rem;
  padding: 10px 40px;
  font-weight: bold;

  :disabled {
    opacity: 50%;
  }

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledLink = styled.span`
  color: black;
  opacity: 0.7;
  text-decoration: underline;
  font-size: small;
  margin-top: 1rem;
`;

const StyledEmoji = styled.h1`
  margin-top: 0;
`;

const StyledHeader = styled.h1`
  margin-top: 0;
`;

const ThanksModal = ({ setShowThanksModal, addAnswer }) => {
  const [ageValue, setAgeValue] = useState('');
  const userData = useContext(UserContext);

  const handleSumbit = (input) => {
    const answer = userData.answer;
    if (input === 'button') answer.age = ageValue;
    addAnswer(answer);
    userData.setAnswer({});
    setShowThanksModal(false);
  };

  return (
    <StyledModal>
      <StyledModalMain>
        <StyledContent>
          <StyledEmoji>👏</StyledEmoji>
          <StyledHeader>Takk for innspill!</StyledHeader>
          <p>En siste ting, hvor gammel er du?</p>
          <StyledInput
            placeholder="Alder"
            value={ageValue}
            onChange={(e) => setAgeValue(e.target.value)}
          />
          <StyledButton onClick={() => handleSumbit('button')}>
            Ok!
          </StyledButton>
          <StyledLink onClick={() => handleSumbit('link')}>
            Hopp over
          </StyledLink>
        </StyledContent>
      </StyledModalMain>
    </StyledModal>
  );
};

export default ThanksModal;

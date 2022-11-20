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
  border-radius: 25px;
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
    max-width: 250px;
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 1.5rem;
    align-self: start;
    text-align: start;
  }
`;

const StyledInput = styled.input`
  background-color: #f8f8f8;
  border: none;
  border-radius: 15px;
  font-size: 1.6rem;
  padding: 10px 20px;
  max-width: 100%;
  margin-bottom: 1rem;
  text-align: left;
  align-self: start;

  ::placeholder {
    color: #747474;
    opacity: 0.4;
    font-size: 1.6rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: white;
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
  const [tagValue, setTagValue] = useState('');
  const userData = useContext(UserContext);

  const handleSubmit = (input) => {
    const answer = userData.answer;
    answer.age = ageValue;
    answer.tags = tagValue ? tagValue : answer.tags;
    addAnswer(answer);
    userData.setAnswer({});
    setShowThanksModal(false);
  };

  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  return (
    <StyledModal>
      <StyledModalMain>
        <StyledContent>
          <StyledEmoji>👏</StyledEmoji>
          <StyledHeader>Takk for innspill!</StyledHeader>
          {userData.answer.tags.length === 0 && (
            <>
              <p>Beskriv innspillet med et stikkord</p>
              <StyledInput
                placeholder="Stikkord"
                value={tagValue}
                onChange={(e) => setTagValue(e.target.value)}
                maxLength="20"
              />
            </>
          )}
          <p>Hvor gammel er du?</p>
          <StyledInput
            placeholder="Alder"
            value={ageValue}
            onChange={(e) => setAgeValue(e.target.value)}
            maxLength="10"
          />
          <StyledButton
            onClick={() => handleSubmit('button')}
            disabled={
              (userData.answer.tags.length === 0 &&
                tagValue.trim().length === 0) ||
              ageValue.trim().length === 0 ||
              !containsOnlyNumbers(ageValue)
            }
          >
            Ok!
          </StyledButton>
        </StyledContent>
      </StyledModalMain>
    </StyledModal>
  );
};

export default ThanksModal;

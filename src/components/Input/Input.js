import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import Tag from '../AnswerBoard/Tag';
import AutosizeInput from 'react-input-autosize';
import { useMediaQuery } from 'react-responsive';
import UserContext from '../../UserContext';

const StyledContainer = styled.form`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.5rem;
  margin-bottom: 3rem;
  height: 225px;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 25px;

  @media only screen and ${device.sm} {
    padding: 1.5rem 1.5rem;
    height: 250px;
  }

  .input {
    &-field::placeholder {
      color: ${({ theme }) => theme.colors.text.muted};
    }
    
    &-field {
      padding: 0.5rem;
      height: inherit;
      line-height: 1.5;
      font-size: 1rem;
      border: none;
      outline: none;
      resize: none;
      @media only screen and ${device.sm} {
        font-size: 1.4rem;
      }
    }
    &-tema-button-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &-tema {
      padding: 0 0.5rem;
      border: none;
      outline: none;
      min-width: 0;
      background-color: inherit;
      @media only screen and ${device.sm} {
        font-size: 1rem;
      }
  }
`;

const StyledTag = styled(Tag)`
  padding: 0.6rem 0.3rem;

  @media only screen and ${device.sm} {
    padding: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: ${({ theme }) => theme.colors.buttons.post.text};
  padding: 0.7rem 1rem;
  margin: 2px;
  font-weight: 500;

  &:hover {
    filter: brightness(90%);
  }
  :disabled {
    opacity: 50%;
  }
  :disabled:hover {
    filter: brightness(100%);
  }
  @media only screen and ${device.sm} {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`;

const StyledBottomLeft = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:last-child {
      margin-left: 15px;
    }
  }
`;

const StyledLength = styled.span`
  font-size: small;
  color: ${({ full }) => (full ? '#FF7272' : '#b9b9b9')};
  display: none;

  @media only screen and ${device.sm} {
    display: inline;
  }
`;

const StyledLengthMobile = styled(StyledLength)`
  display: inline;
  position: absolute;
  right: 17px;
  top: 10px;
  font-size: 0.7rem;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledWarningContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  @media only screen and ${device.sm} {
    margin-top: 0.7rem;
  }
`;

const StyledWarning = styled.span`
  font-size: small;
  color: #ff7272;
  max-width: 550px;
  text-align: center;
`;

const Input = ({
  placeholderText,
  buttonText,
  addAnswer,
  setShowThanksModal,
}) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [temaValue, setTemaValue] = useState('');
  const [temaFocus, setTemaFocus] = useState(true);
  const [tagPlaceholderText, setTagPlaceholderText] =
    useState('# Legg til tema');
  const userData = useContext(UserContext);
  const isXtraSmallScreen = useMediaQuery({ query: '(max-width: 320px)' });

  const handleTemaFocus = (e) => {
    setTemaFocus(true);
    setTagPlaceholderText('');
  };

  const handleTemaFocusOff = (e) => {
    setTemaFocus(true);
    if (temaValue === '') setTagPlaceholderText('# Legg til tema');
  };

  const handleTemaChange = (e) => {
    setTemaValue(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = { userId: userData.userId };
    answer.text = textAreaValue;
    answer.tags = temaValue;
    if (!answer.text) return;
    userData.setAnswer(answer);
    setShowThanksModal(true);
    // addAnswer(answer);
    setTemaValue('');
    setTextAreaValue('');
    setTagPlaceholderText('# Legg til tema');
  };

  return (
    <StyledContainer className="input-container" onSubmit={handleSubmit}>
      <StyledLengthMobile full={textAreaValue.length >= 250}>
        {textAreaValue.length}/250 tegn
      </StyledLengthMobile>
      <textarea
        value={textAreaValue}
        onChange={handleTextAreaChange}
        className="input-field"
        placeholder={placeholderText}
        maxLength="250"
      />
      <div className="input-tema-button-wrapper">
        <StyledTag hide={!temaFocus && !temaValue}>
          <AutosizeInput
            type="text"
            className="input-tema"
            placeholder={tagPlaceholderText}
            value={temaValue}
            onChange={handleTemaChange}
            onFocus={handleTemaFocus}
            onBlur={handleTemaFocusOff}
            maxLength={isXtraSmallScreen ? 20 : 25}
            inputStyle={{
              borderStyle: 'none',
              outline: 'none',
              backgroundColor: 'inherit',
            }}
          />
        </StyledTag>

        <StyledBottomLeft>
          <StyledLength full={textAreaValue.length >= 250}>
            {textAreaValue.length}/250 tegn
          </StyledLength>
          <StyledButton
            type="submit"
            disabled={!textAreaValue || textAreaValue.length >= 250}
            children={buttonText}
          />
        </StyledBottomLeft>
      </div>
      {userData.posts.length >= 2 && (
        <StyledWarningContainer>
          {' '}
          <StyledWarning>
            Vi har lagt inn en begrensning på antall innspill for hver bruker på
            to innspill. Dersom du ønsker å legge ut et nytt innspill må du
            først slette et av dine tidligere innspill.
          </StyledWarning>
        </StyledWarningContainer>
      )}
    </StyledContainer>
  );
};

export default Input;

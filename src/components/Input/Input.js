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
  padding: 0.8rem;
  margin-bottom: 3rem;
  height: 225px;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 25px;
  font-size: 1rem;
  
  @media only screen and ${device.sm} {
    padding: 1.5rem 1.5rem 1rem;
    height: 250px;
    margin-bottom: 4rem;
  }

  .input {
    line-height: 1.4em;
    
    &-field::placeholder {
      color: ${({ theme }) => theme.colors.text.muted};
    }
    
    &-field {
      padding: 0.5rem;
      padding-top: 1rem;
      height: inherit;
      font-size: 1rem;
      border: none;
      outline: none;
      resize: none;
      @media only screen and ${device.sm} {
        font-size: 1.4rem;
        padding-top: 0.5rem
      }
    }
    &-tema-button-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      
      @media only screen and ${device.sm} {
        align-items: center;
      }
    }
    &-tema {
      padding: 0 0.5rem;
      border: none;
      outline: none;
      min-width: 0;
      background-color: inherit;
      font-size: 1rem;
      line-height: 1.5em;
      
      input {
        padding: 0;
        line-height: 1.5em;
      }
  }
 
`;

const StyledTag = styled(Tag)`
  padding: 0.8em 0.3em;
  background: ${({ theme }) => theme.colors.buttons.tag.background};
  color: ${({ theme }) => theme.colors.buttons.tag.text};
  font-size: 1rem;
  box-sizing: border-box;

  &:hover,
  &:focus-within {
    background: ${({ theme }) => theme.colors.buttons.tag.hover.background};
  }

  @media only screen and ${device.sm} {
    padding: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: ${({ theme }) => theme.colors.buttons.post.text};
  padding: 0.8em 1.3em;
  margin: 2px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4em;
  border-radius: 50px;

  &:hover {
    filter: brightness(90%);
  }
  :disabled {
    opacity: 50%;
    color: ${({ theme }) => theme.colors.buttons.post.disabledColor};
  }
  :disabled:hover {
    filter: brightness(100%);
  }
  @media only screen and ${device.sm} {
    font-size: 1.2rem;
    padding: 0.8rem 2.5rem;
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
  right: 20px;
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

const Input = ({ placeholderText, buttonText, setShowThanksModal }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [temaValue, setTemaValue] = useState('');
  const userData = useContext(UserContext);
  const isXtraSmallScreen = useMediaQuery({ query: '(max-width: 370px)' });
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

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
        <StyledTag>
          <AutosizeInput
            type="text"
            className="input-tema"
            placeholder={
              isSmallScreen
                ? '# Legg til tema'
                : '#Beskiv innspillet med et stikkord'
            }
            placeholderIsMinWidth
            value={temaValue}
            onChange={handleTemaChange}
            maxLength={isXtraSmallScreen ? 24 : 24}
            inputStyle={{
              borderStyle: 'none',
              outline: 'none',
              backgroundColor: 'inherit',
              minWidth: '119px',
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

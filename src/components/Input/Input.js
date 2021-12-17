import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import Tag from '../AnswerBoard/Tag';
import AutosizeInput from 'react-input-autosize';
import { useMediaQuery } from 'react-responsive';

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.5rem;
  margin-bottom: 3rem;
  height: 190px;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 10px;

  @media only screen and ${device.sm} {
    padding: 0.7rem 1rem;
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
        font-size: 1.2rem;
      }
  }
`;

const StyledTag = styled(Tag)`
  padding: 0.5rem 0.3rem;

  @media only screen and ${device.sm} {
    padding: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: ${({ theme }) => theme.colors.buttons.post.text};
  padding: 0.6rem 1rem;
  margin: 2px;

  @media only screen and ${device.sm} {
    font-size: 1.2rem;
    padding: 0.6rem 1.5rem;
  }
  :disabled {
    background-color: ${({ theme }) =>
      theme.colors.buttons.post.disabledBackground};
    color: ${({ theme }) => theme.colors.buttons.post.disabledColor};
  }
`;

const Input = ({ placeholderText, buttonText, addAnswer }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [temaValue, setTemaValue] = useState('');
  const [temaFocus, setTemaFocus] = useState(true);
  const isXtraSmallScreen = useMediaQuery({ query: '(max-width: 320px)' });
  const isSmallScreen = useMediaQuery({ query: '(max-width: 425px)' });
  const [tagPlaceholderText, setTagPlaceholderText] =
    useState('# Legg til tema');

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

    const answer = { name: 'Navn' };
    answer.text = textAreaValue;
    answer.tags = temaValue;
    if (!answer.text) return;
    addAnswer(answer);
    setTemaValue('');
    setTextAreaValue('');
  };

  return (
    <StyledContainer className="input-container" onSubmit={handleSubmit}>
      <textarea
        value={textAreaValue}
        onChange={handleTextAreaChange}
        className="input-field"
        placeholder={placeholderText}
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
        <StyledButton
          type="submit"
          disabled={textAreaValue ? false : true}
          children={buttonText}
        />
      </div>
    </StyledContainer>
  );
};

export default Input;

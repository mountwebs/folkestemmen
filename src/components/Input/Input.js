import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import Tag from '../AnswerBoard/Tag';
import AutosizeInput from 'react-input-autosize';

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1rem;
  margin-bottom: 4rem;
  height: 190px;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 10px;

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

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: ${({ theme }) => theme.colors.buttons.post.text};
  padding: 0.6rem 1.5rem;
  font-size: 14px;
  margin: 2px;

  @media only screen and ${device.sm} {
    font-size: 1.4rem;
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

  const handleTemaFocus = (e) => {
    setTemaFocus(true);
  };

  const handleTemaFocusOff = (e) => {
    setTemaFocus(true);
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
        <Tag hide={!temaFocus && !temaValue}>
          <AutosizeInput
            type="text"
            className="input-tema"
            placeholder="# Legg til tema"
            value={temaValue}
            onChange={handleTemaChange}
            onFocus={handleTemaFocus}
            onBlur={handleTemaFocusOff}
            maxLength="20"
            inputStyle={{
              borderStyle: 'none',
              outline: 'none',
              backgroundColor: 'inherit',
            }}
          />
        </Tag>
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

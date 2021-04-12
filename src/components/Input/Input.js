import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1rem;
  margin-bottom: 3rem;
  height: 190px;
  background-color: #fff;
  border-radius: 10px;

  .input {
    &-tema::placeholder,
    &-field::placeholder {
      color: #e5e5e5;
    }
    &-field {
      padding: 0.5rem;
      height: inherit;
      line-height: 1.5;
      font-size: 1rem;
      border: none;
      outline: none;
      resize: none;
    }
    &-tema-button-wrapper {
      display: flex;
      justify-content: space-between;
    }
    &-tema {
      padding: 0 0.5rem;
      border: none;
      outline: none;
      min-width: 0;
    }
  }
`;

const Input = ({ placeholderText, buttonText, addAnswer }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [temaValue, setTemaValue] = useState('');

  const handleTextAreaChange = e => {
    setTextAreaValue(e.target.value);
  };

  const handleTemaChange = e => {
    setTemaValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const answer = { user: 'Navn' };
    answer.text = textAreaValue;
    answer.tema = temaValue;
    if (!answer.text) return;
    addAnswer(answer);
    setTextAreaValue('');
    setTemaValue('');
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
        <input
          type="text"
          className="input-tema"
          placeholder="# Legg til tema"
          value={temaValue}
          onChange={handleTemaChange}
        />
        <Button type="submit" children={buttonText} />
      </div>
    </StyledContainer>
  );
};

export default Input;

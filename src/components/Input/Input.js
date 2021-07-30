import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import Autocomplete from './Autocomplete';

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1rem;
  margin-bottom: 3rem;
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
    }
  }
`;

const StyledButton = styled(Button)`
  @media only screen and ${device.sm} {
    font-size: 1.4rem;
  }
`;

const Input = ({ placeholderText, buttonText, addAnswer, tagList }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [temaValue, setTemaValue] = useState('');
  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  console.log(tagList);

  const handleTemaChange = (e) => {
    setTemaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = { name: 'Navn' };
    answer.text = textAreaValue;
    answer.tags = temaValue;
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
        <Autocomplete tagsData={tagList} />
        <StyledButton type="submit" children={buttonText} />
      </div>
    </StyledContainer>
  );
};

export default Input;

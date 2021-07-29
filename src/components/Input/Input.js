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

const tagsData = [
  {
    _id: '60f7ffa95250b1137a3969f7',
    name: 'Veier',
    createdAt: '2021-07-21T11:06:17.506Z',
    updatedAt: '2021-07-21T11:06:17.506Z',
    __v: 0,
  },
  {
    _id: '60fdcf73b4e99b55d16e6e47',
    name: 'Tog',
    color: 'green',
    createdAt: '2021-07-25T20:54:12.161Z',
    updatedAt: '2021-07-25T20:54:12.161Z',
    __v: 0,
  },
  {
    _id: '6102d7e482ed40057c44ae54',
    name: 'Støy',
    color: 'red',
    createdAt: '2021-07-29T16:31:32.406Z',
    updatedAt: '2021-07-29T16:31:32.406Z',
    __v: 0,
  },
  {
    _id: '6102d80382ed40057c44ae55',
    name: 'Transport',
    color: 'blue',
    createdAt: '2021-07-29T16:32:03.819Z',
    updatedAt: '2021-07-29T16:32:03.819Z',
    __v: 0,
  },
  {
    _id: '6102d82782ed40057c44ae56',
    name: 'Grønt områder',
    color: 'purple',
    createdAt: '2021-07-29T16:32:39.637Z',
    updatedAt: '2021-07-29T16:32:39.637Z',
    __v: 0,
  },
];

const Input = ({ placeholderText, buttonText, addAnswer }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [temaValue, setTemaValue] = useState('');
  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

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
        <Autocomplete tagsData={tagsData} />
        <StyledButton type="submit" children={buttonText} />
      </div>
    </StyledContainer>
  );
};

export default Input;

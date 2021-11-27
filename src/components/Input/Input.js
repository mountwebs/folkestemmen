import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import Autocomplete from './Autocomplete';

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
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: ${({ theme }) => theme.colors.buttons.post.text};
  @media only screen and ${device.sm} {
    font-size: 1.4rem;
  }
  :disabled {
    background-color: ${({ theme }) =>
      theme.colors.buttons.post.disabledBackground};
    color: ${({ theme }) => theme.colors.buttons.post.disabledColor};
  }
`;

const getTagNames = (tagData) => tagData.map((tag) => tag.name);

const Input = ({ placeholderText, buttonText, addAnswer, tagData }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState(getTagNames(tagData));
  const [tagFilteredSuggestions, setTagFilteredSuggestions] = useState(
    getTagNames(tagData)
  );

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = { name: 'Navn' };
    answer.text = textAreaValue;
    if (!answer.text) return;
    answer.tags = selectedTags.map((tag) => tag._id);
    //answer.tags = tagIds;
    addAnswer(answer);
    setTextAreaValue('');
    setSelectedTags([]);
    setTagFilteredSuggestions(getTagNames(tagData));
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
        <Autocomplete
          filteredSuggestions={tagFilteredSuggestions}
          setFilteredSuggestions={setTagFilteredSuggestions}
          tagData={tagData}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          suggestions={tagSuggestions}
          setSuggestions={setTagSuggestions}
        />
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

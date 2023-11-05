import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import InputTags from './InputTags';
import SuggestionsList from './SuggestionsList';

const StyledTagsInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  display: ${(props) => (props.disabled ? 'none' : 'block')};
  padding: 0 0.5rem;
  margin: 2px;
  border: none;
  outline: none;
  width: 90%;
  min-width: 0;
  @media only screen and ${device.sm} {
    font-size: 1.2rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
  :disabled {
    background-color: transparent;
  }
`;

const Autocomplete = ({
  tagData,
  selectedTags,
  setSelectedTags,
  suggestions,
  setSuggestions,
  filteredSuggestions,
  setFilteredSuggestions,
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [placeholder, setPlaceholder] = useState('# Stikkord');
  const [disabledInput, setDisabledInput] = useState(false);

  useEffect(() => {
    if (selectedTags.length) {
      setPlaceholder('');
      setDisabledInput(true);
    } else {
      setPlaceholder('# Stikkord');
      setDisabledInput(false);
    }
  }, [selectedTags]);

  const chooseTag = (tagName) => {
    if (!tagName) return;
    setSelectedTags([
      ...selectedTags,
      tagData.find((tag) => tag.name === tagName),
    ]);
    const newSuggestions = suggestions.filter(
      (suggestions) => suggestions !== tagName
    );
    setSuggestions(newSuggestions);
    setFilteredSuggestions(newSuggestions);
    setActiveSuggestion(0);
    setShowSuggestions(false);
    setUserInput('');
  };

  const onFocus = (e) => {
    if (selectedTags.length === 0) setShowSuggestions(true);
  };

  const onChange = (e) => {
    const currentUserInput = e.currentTarget.value;

    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(currentUserInput.toLowerCase())
      )
    );
    setActiveSuggestion(0);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onLiMouseDown = (e) => {
    chooseTag(e.currentTarget.innerText);
  };

  const onBlur = (e) => {
    setShowSuggestions(false);
  };

  const onLiMouseOver = (e) => {
    setActiveSuggestion(filteredSuggestions.indexOf(e.currentTarget.innerText));
  };

  const onTagMouseDown = (e) => {
    const tagName = e.currentTarget.innerText;
    setSelectedTags(selectedTags.filter((tag) => tag.name !== tagName));
    setFilteredSuggestions([...filteredSuggestions, tagName]);
    setSuggestions([...suggestions, tagName]);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      // 13: enter key, 9: tab
      e.preventDefault();
      chooseTag(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      // up key
      e.preventDefault();
      if (activeSuggestion === 0) {
        return;
      }
      // setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      // down key
      e.preventDefault();
      if (activeSuggestion + 1 === filteredSuggestions.length) {
        return;
      }
      // setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <StyledTagsInputWrapper>
      <InputTags tags={selectedTags} onTagMouseDown={onTagMouseDown} />
      <StyledInputWrapper>
        <StyledInput
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          value={userInput}
          placeholder={placeholder}
          disabled={disabledInput}
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <SuggestionsList
            {...{
              filteredSuggestions,
              activeSuggestion,
              onLiMouseDown,
              onLiMouseOver,
            }}
          />
        )}
      </StyledInputWrapper>
    </StyledTagsInputWrapper>
  );
};

export default Autocomplete;

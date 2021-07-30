import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import './Autocomplete.css';
import InputTags from './InputTags';

const StyledInput = styled.input`
  padding: 0 0.5rem;
  margin: 2px;
  border: none;
  outline: none;
  min-width: 0;
  @media only screen and ${device.sm} {
    font-size: 1.2rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
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
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

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
    setShowSuggestions(true);
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
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      // down key
      e.preventDefault();
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = 'suggestion-active';
            }
            return (
              <li
                className={className}
                key={suggestion}
                onMouseDown={onLiMouseDown}
                onMouseOver={onLiMouseOver}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <div className="tags-input-wrapper">
      <InputTags tags={selectedTags} onTagMouseDown={onTagMouseDown} />
      <div className="input-wrapper">
        <StyledInput
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          value={userInput}
          placeholder="# Legg til tema"
        />
        <div>{suggestionsListComponent}</div>
      </div>
    </div>
  );
};

export default Autocomplete;

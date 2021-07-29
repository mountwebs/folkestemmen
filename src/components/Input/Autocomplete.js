import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import './Autocomplete.css';

const StyledInput = styled.input`
  padding: 0 0.5rem;
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

// https://www.digitalocean.com/community/tutorials/react-react-autocomplete

const Autocomplete = () => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  const suggestions = ['a', 'b', 'test', 'makro', 'lkjdsflk', 'lki'];

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

  const onClick = (e) => {
    setUserInput(e.currentTarget.innerText);
    setActiveSuggestion(0);
    setShowSuggestions(true);
    setFilteredSuggestions([]);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      // 13: enter key, 9: tab
      e.preventDefault();
      setUserInput(filteredSuggestions[activeSuggestion]);
      setActiveSuggestion(0);
      setShowSuggestions(false);
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

  if (showSuggestions && userInput) {
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
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <>
      <div className="input-wrapper">
        <StyledInput
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="# Legg til tema"
        />

        <div>{suggestionsListComponent}</div>
      </div>
    </>
  );
};

export default Autocomplete;

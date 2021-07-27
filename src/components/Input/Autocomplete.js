import React, { useState } from 'react';

const Autocomplete = () => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  const suggestions = ['a', 'b', 'test', 'makro', 'lkjdsflk', 'lki'];

  const onChange = (e) => {
    // const userInput = e.currentTarget.value;

    const currentUserInput = e.currentTarget.value;

    setFilteredSuggestions(
      suggestions.filter((suggestion) => {
        console.log(
          '🚀 ~ file: Autocomplete.js ~ line 17 ~ suggestions.filter ~ suggestion',
          currentUserInput
        );

        return suggestion
          .toLowerCase()
          .startsWith(currentUserInput.toLowerCase());
      })
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
    if (e.keyCode === 13) {
      // enter key
      setUserInput(filteredSuggestions[activeSuggestion]);
      setActiveSuggestion(0);
      setShowSuggestions(false);
    } else if (e.keyCode === 38) {
      // up key
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
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
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions available.</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;

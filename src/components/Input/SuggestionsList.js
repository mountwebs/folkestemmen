import React from 'react';

const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestion,
  onLiMouseDown,
  onLiMouseOver,
}) => {
  return (
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
};

export default SuggestionsList;

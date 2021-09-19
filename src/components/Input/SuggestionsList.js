import React from 'react';
import styled, { css } from 'styled-components';

const StyledSuggestionsUl = styled.ul`
  background-color: white;
  position: absolute;
  border: 1px solid #999;
  list-style: none;
  padding-left: 0;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 15px;
  left: 0;
  right: 0;
  overflow-y: auto;
  font-size: 1rem;
  max-height: 300px;
`;

const StyledSuggestionsLi = styled.li`
  padding: 0.5rem;

  ${(props) =>
    props.active &&
    css`
      background-color: grey;
      color: white;
      cursor: pointer;
    `}
`;

const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestion,
  onLiMouseDown,
  onLiMouseOver,
}) => {
  return (
    <StyledSuggestionsUl>
      {filteredSuggestions.map((suggestion, index) => {
        let active;

        // Flag the active suggestion with a class
        if (index === activeSuggestion) {
          active = true;
        }
        return (
          <StyledSuggestionsLi
            key={suggestion}
            onMouseDown={onLiMouseDown}
            onMouseOver={onLiMouseOver}
            active={active}
          >
            {suggestion}
          </StyledSuggestionsLi>
        );
      })}
    </StyledSuggestionsUl>
  );
};

export default SuggestionsList;

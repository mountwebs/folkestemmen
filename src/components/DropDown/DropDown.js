import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledContainer = styled.div`
  @media only screen and ${device.sm} {
    font-size: 21.6px;
  }
`;

const StyledSelect = styled.select``;

const StyledOptions = styled.option``;

const DropDown = ({ options, selectedOption, setSelectedOption }) => {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledSelect value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => {
          if (index === 0)
            return (
              <StyledOptions key={index} value={option} disabled>
                {option}
              </StyledOptions>
            );
          else
            return (
              <StyledOptions key={index} value={option}>
                {option}
              </StyledOptions>
            );
        })}
      </StyledSelect>
    </StyledContainer>
  );
};

export default DropDown;

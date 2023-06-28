import { useState, useContext } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import { ReactComponent as Pin } from '../../assets/img/pin.svg';
import QueryParameterContext from '../../queryParameterProvider';

const StyledFilterSection = styled.section`
  width: 100%;
  border-radius: 20px;
  background: #f5f5f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 2rem;
  padding-top: 1rem;

  @media only screen and ${device.sm} {
    padding-bottom: 70px;

    p {
      font-size: 1.2rem;
    }
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const StyledFilterButton = styled.button`
  display: inline-flex;
  padding: 13.059px 26.182px 13.059px 20px;
  justify-content: center;
  align-items: center;
  gap: 8.727px;
  border-radius: 30.545px;
  background: #f3ecd0;

  background-color: ${({ selected }) => (selected ? '#f3ecd0' : '#f5f5f4')};
  color: ${({ theme, selected }) => (selected ? '#000000' : '#000000')};
`;

const FilterSection = ({ options, selectFilter, setSelectFilter }) => {
  const qpData = useContext(QueryParameterContext);

  return (
    <StyledFilterSection>
      <p>
        {qpData.english
          ? 'Explore feedback from different places'
          : 'Utforsk innspill fra ulike byrom'}
      </p>
      <StyledFilterContainer>
        <StyledFilterButton
          selected={selectFilter === 'Alle innspill'}
          onClick={() => setSelectFilter('Alle innspill')}
        >
          Alle innspill
        </StyledFilterButton>
        {options.map((option, index) => (
          <StyledFilterButton
            selected={selectFilter === option}
            onClick={() => setSelectFilter(option)}
            key={index}
          >
            <Pin />
            {option}
          </StyledFilterButton>
        ))}
      </StyledFilterContainer>
    </StyledFilterSection>
  );
};
export default FilterSection;

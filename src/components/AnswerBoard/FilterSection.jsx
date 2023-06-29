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

  background-color: ${({ selected }) => (selected ? '#463A11' : '#f3ecd0')};
  color: ${({ theme, selected }) => (selected ? '#fff' : '#000')};

  svg path {
    fill: ${({ selected }) => (selected ? '#fff' : '##332A0A')};
  }
`;

const optionTranslation = {
  'Gaterommet St. Olavs plass': 'Corner of St. Olavs plass',
  'Nordlig utgang av Korsatunellen': 'Korsatunellen North Exit',
  'Sørlig inngang til Korsatunellen': 'Korsatunellen South Entrance',
  Korsatunellen: 'Korsatunellen',
  'Harald Torsviks plass': 'Harald Torsviks plass',
};

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
          {qpData.english ? 'All' : 'Alle innspill'}
        </StyledFilterButton>
        {options.map((option, index) => (
          <StyledFilterButton
            selected={selectFilter === option}
            onClick={() => setSelectFilter(option)}
            key={index}
          >
            <Pin />
            {qpData.english ? optionTranslation[option] : option}
          </StyledFilterButton>
        ))}
      </StyledFilterContainer>
    </StyledFilterSection>
  );
};
export default FilterSection;

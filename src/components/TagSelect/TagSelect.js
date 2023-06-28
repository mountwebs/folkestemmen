import React, { useContext } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import QueryParameterContext from '../../queryParameterProvider';
import DropDown from '../DropDown/DropDown';
import pin from '../../assets/img/pin.svg';

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 2rem 2rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.question.text};
  border-radius: 20px;
  text-align: center;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  position: relative;

  p {
    max-width: 20ch;
    margin: 0;
    font-weight: normal;
    font-family: 'Good Sans', sans-serif;
  }

  @media only screen and ${device.sm} {
    font-weight: 400;
    font-size: 56.3999px;
    line-height: 68px;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const StyledHeding = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  color: #231c00;
  font-family: Good Sans;
  letter-spacing: 0.24px;
  line-height: 120%;
  padding: 0 1rem;

  @media only screen and ${device.sm} {
    font-size: 64px;
    max-width: 20ch;
    margin-bottom: 44px;
  }
`;

const StyledFilterTag = styled.button`
  display: inline-flex;
  padding: 13.059px 26.182px 13.059px 20px;
  justify-content: center;
  align-items: center;
  gap: 8.727px;
  border-radius: 30.545px;
  background: #f3ecd0;

  @media only screen and ${device.sm} {
    font-size: 21.6px;
  }
`;

const TagSelect = ({ options, selectedOption, setSelectedOption }) => {
  const qpData = useContext(QueryParameterContext);

  let headingText = '';
  if (qpData.place && qpData.english) {
    headingText = 'Chose a place and give feedback?';
  } else if (qpData.place && !qpData.english) {
    headingText = 'Hva synes du om dette byrommet?';
  } else if (!qpData.place && qpData.english) {
    headingText = 'What do you think of this city space?';
  } else if (!qpData.place && !qpData.english) {
    headingText = 'Vel eit byrom og gi ditt innspel';
  }

  return (
    <>
      <StyledCardContainer>
        <StyledCard className="question-card">
          <StyledHeding>{headingText}</StyledHeding>
          {qpData.place ? (
            <StyledFilterTag>
              <img src={pin} alt="pin" />
              {qpData.place}
            </StyledFilterTag>
          ) : (
            <DropDown
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              options={options}
            />
          )}
        </StyledCard>
      </StyledCardContainer>
    </>
  );
};

export default TagSelect;

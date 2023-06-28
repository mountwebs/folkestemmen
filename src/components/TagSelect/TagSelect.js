import React, { useContext } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import QueryParameterContext from '../../queryParameterProvider';
import DropDown from '../DropDown/DropDown';

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
  border-radius: 25px;
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
`;

const StyledFilterTag = styled.button`
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

const TagSelect = ({ options, selectedOption, setSelectedOption }) => {
  const qpData = useContext(QueryParameterContext);
  console.log(qpData.place);

  return (
    <>
      <StyledCardContainer>
        <StyledCard className="question-card">
          <StyledHeding>Vel eit byrom og gi ditt innspel</StyledHeding>
          {qpData.place ? (
            <StyledFilterTag>
              <svg
                width="16"
                height="23"
                viewBox="0 0 16 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2941_1036)">
                  <path
                    d="M7.66214 2.66858C3.54787 2.66858 0.181641 6.0348 0.181641 10.1491C0.181641 15.1984 6.72708 20.9023 7.0076 21.1828C7.19461 21.2763 7.47513 21.3698 7.66214 21.3698C7.84915 21.3698 8.12967 21.2763 8.31669 21.1828C8.59721 20.9023 15.1426 15.1984 15.1426 10.1491C15.1426 6.0348 11.7764 2.66858 7.66214 2.66858ZM7.66214 19.2192C5.69851 17.3491 2.05177 13.3283 2.05177 10.1491C2.05177 7.06337 4.57644 4.5387 7.66214 4.5387C10.7478 4.5387 13.2725 7.06337 13.2725 10.1491C13.2725 13.2348 9.62577 17.3491 7.66214 19.2192ZM7.66214 6.40883C5.605 6.40883 3.92189 8.09194 3.92189 10.1491C3.92189 12.2062 5.605 13.8893 7.66214 13.8893C9.71928 13.8893 11.4024 12.2062 11.4024 10.1491C11.4024 8.09194 9.71928 6.40883 7.66214 6.40883ZM7.66214 12.0192C6.63357 12.0192 5.79202 11.1776 5.79202 10.1491C5.79202 9.12051 6.63357 8.27896 7.66214 8.27896C8.69071 8.27896 9.53227 9.12051 9.53227 10.1491C9.53227 11.1776 8.69071 12.0192 7.66214 12.0192Z"
                    fill="#332A0A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2941_1036">
                    <rect
                      width="15"
                      height="22.1429"
                      fill="white"
                      transform="translate(0.181641 0.755981)"
                    />
                  </clipPath>
                </defs>
              </svg>
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

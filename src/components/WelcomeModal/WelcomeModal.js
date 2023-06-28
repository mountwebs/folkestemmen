import React, { useRef, useContext, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import { useOutsideClick } from 'rooks';
import QueryParameterContext from '../../queryParameterProvider';
import { ReactComponent as Pin } from '../../assets/img/pin.svg';
import place1 from '../../assets/img/places/Korsatunellen utgang sør.jpg';
import place2 from '../../assets/img/places/Korsatunellen.jpg';
import place3 from '../../assets/img/places/Glassrommet, Korsatunellen utgang nord.jpg';
import place4 from '../../assets/img/places/Gaterommet St Olavs plass.jpg';
import place5 from '../../assets/img/places/Harald Torsviks plass.jpg';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const StyledModalMain = styled.div`
  position: fixed;
  padding: 1rem;
  width: 90%;
  background-color: #faf7ec;
  border-radius: 25px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 2rem;

  @media only screen and ${device.sm} {
    width: auto;
    max-width: 32.8125rem;
    padding: 2rem;
  }
`;

const StyledContent = styled.div`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
  position: relative;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.8rem;
    padding-right: 2rem;
    text-align: center;
  }

  p {
    opacity: 0.7;
    margin-bottom: 1rem;
    font-weight: 400;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  p:first-child {
    margin-top: 3rem;
  }

  @media only screen and ${device.sm} {
    font-size: 1.3rem;

    h1 {
      margin-top: 1rem;
      font-size: 4.375rem;
    }
  }
`;

const StyledPlaceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 30px;
  margin-top: 3rem;
`;

const StyledInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #332a0a;
    text-align: center;
    font-size: 15px;
    font-family: Good Sans;
    letter-spacing: 0.15px;
    margin: 1rem 0 0 0;
  }
`;

const StyledCard = styled.div`
  min-width: 0;
  background: white;
  border-radius: 7px;

  img {
    fit-content: cover;
    width: 100%;
  }

  p {
    margin-top: 14px;
    margin-bottom: 13px;
    font-size: 15px;
    color: black;
    margin-left: 11px;
  }
`;

const StyledButton = styled(Button)`
  background-color: black;
  color: white;
  padding: 0.875rem 3.75rem;
  border-radius: 2rem;

  :disabled {
    opacity: 50%;
  }

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and ${device.sm} {
    font-size: 1.5rem;
  }
`;

const StyledX = styled.div`
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }

  span {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }
`;

const WhatsThisModal = ({
  setShowWelcomeModal,
  setWelcomePage,
  welcomePage,
}) => {
  const ref = useRef();
  const qpData = useContext(QueryParameterContext);

  const handleX = () => {
    setShowWelcomeModal(false);
    setWelcomePage(1);
  };

  const handleButton = () => {
    if (welcomePage === 1) {
      setWelcomePage(2);
    } else {
      setShowWelcomeModal(false);
      setWelcomePage(1);
    }
  };

  function handleOutsideClick() {
    setShowWelcomeModal(false);
    setWelcomePage(1);
  }

  useOutsideClick(ref, handleOutsideClick);
  console.log(qpData.english);
  return (
    <StyledModal>
      <StyledModalMain ref={ref}>
        <StyledContent>
          <StyledX onClick={handleX}>
            <span>x</span>
          </StyledX>
          {qpData.english && welcomePage === 1 && (
            <>
              <h1>Hi! 👋</h1>
              <p>
                We, Ålesund municipality, are planning to upgrade the public
                spaces “Harald Torsviks plass, “Korsatunellen” and “St. Olavs
                plass”.
              </p>

              <p>
                The new street bus terminal in Keiser Wilhelm street will be
                established in 2024. This will result in a new and more
                important use in daily life for the public spaces nearby.
              </p>

              <p>
                This year, we would like to hear your opinion about what you
                want to see in these public spaces, and how we can develop them
                in the best possible way.
              </p>

              <p>
                Throughout this year we’re going to test the public spaces with
                temporary happenings, so please stay tuned!
              </p>
            </>
          )}
          {!qpData.english && welcomePage === 1 && (
            <>
              <h1>Hei! 👋</h1>
              <p>
                Vi i Ålesund kommune skal oppgradere byromma Harald Torsviks
                plass, Korsatunellen og St. Olavs plass.
              </p>
              <p>
                I 2024 vil Kollektivknutepunktet i Keiser Wilhelms gate komme på
                plass, og da vil byromma kunne få ein ny og viktigare bruk i det
                daglege. I år ønsker vi derfor å høyre di meining om kva du
                ønsker deg for byromma, slik at vi kan utvikle dei til å bli
                best mogleg for flest mogleg.
              </p>
              <p>
                Gjennom året ønsker vi å teste ut byromma ved bruk av
                midlertidige tiltak, så følg med!
              </p>
            </>
          )}
          {welcomePage === 2 && (
            <StyledPlaceContainer>
              <StyledInfo>
                <Pin />
                <p>
                  Du kan gi innspill på disse fem stedene i Ålesund sentrum.
                </p>
              </StyledInfo>
              <StyledCard>
                <img src={place1} alt="" />
                <p>Korsatunellen utgang sør</p>
              </StyledCard>
              <StyledCard>
                <img src={place2} alt="" />
                <p>Korsatunellen</p>
              </StyledCard>
              <StyledCard>
                <img src={place3} alt="" />
                <p>Glassrommet, Korsatunellen utgang nord</p>
              </StyledCard>
              <StyledCard>
                <img src={place4} alt="" />
                <p>Gaterommet St Olavs plass</p>
              </StyledCard>
              <StyledCard>
                <img src={place5} alt="" />
                <p>Harald Torsviks plass</p>
              </StyledCard>
            </StyledPlaceContainer>
          )}
        </StyledContent>
        <StyledButton onClick={handleButton}>
          {welcomePage === 1 ? 'Neste' : 'Okei!'}
        </StyledButton>
      </StyledModalMain>
    </StyledModal>
  );
};

export default WhatsThisModal;

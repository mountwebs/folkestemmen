import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import { useOutsideClick } from 'rooks';
import QueryParameterContext from '../../queryParameterProvider';

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
  background-color: #fafafa;
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

const WhatsThisModal = ({ setShowWelcomeModal }) => {
  const ref = useRef();
  const qpData = useContext(QueryParameterContext);

  const handleX = () => {
    setShowWelcomeModal(false);
  };

  function handleOutsideClick() {
    setShowWelcomeModal(false);
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
          {qpData.english ? (
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
          ) : (
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
        </StyledContent>
        <StyledButton onClick={handleX}>Okei!</StyledButton>
      </StyledModalMain>
    </StyledModal>
  );
};

export default WhatsThisModal;

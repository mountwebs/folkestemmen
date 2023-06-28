import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import { useOutsideClick } from 'rooks';

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
  max-height: 95vh;
  overflow-y: auto;
  position: absolute;
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
  font-family: 'Good Sans', sans-serif;

  @media only screen and ${device.sm} {
    width: 90%;
    max-width: 816px;
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
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.8rem;
    padding-right: 2rem;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    opacity: 0.7;
    margin-bottom: 1.5rem;
    font-weight: normal;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    margin-top: 0;
  }

  @media only screen and ${device.sm} {
    font-size: 1.3rem;

    p {
      font-size: 20px;
      line-height: 24px;
    }

    h1 {
      margin-top: 1rem;
      font-size: 44px;
      line-height: 58px;
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

const StyledInfo = styled.div`
  background-color: #fcfaef;
  width: 100%;
  border-radius: 25px;
  font-weight: 400;
  color: #2b2300;
  opacity: 0.9;

  p {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and ${device.sm} {
    p {
      line-height: 28px;
    }
  }
`;

const WhatsThisModal = ({ setShowWhatsThisModal }) => {
  const ref = useRef();

  const handleX = () => {
    setShowWhatsThisModal(false);
  };

  function handleOutsideClick() {
    setShowWhatsThisModal(false);
  }

  useOutsideClick(ref, handleOutsideClick);
  return (
    <StyledModal>
      <StyledModalMain ref={ref}>
        <StyledContent>
          <StyledX onClick={handleX}>
            <span>x</span>
          </StyledX>
          <h1>Hva er dette?</h1>
          <p>
            Tokke kommune skal revidere sin næringsplan og arbeidet er nyleg
            starta. Planen skal gi føringar for korleis arbeidet med
            næringsutvikling skal vere framover, og korleis kommunen kan bidra
            til å skape attraktivitet og vekst.
          </p>
          <p>
            Designkontoret Travers skal bistå kommunen i prosessen, og vil i
            løpet av dei neste vekene gjennomføre ulike aktivitetar for å samle
            innspel frå næringslivet.
          </p>
          <p>
            Gjennom heile prosessen kan du gi dine innspel om framtidas
            næringsutvikling i Tokke på www.innspill.io. Portalen opnar
            19.januar.
          </p>
          <p>
            Onsdag 8. februar blir det ope digital arbeidsverkstad for å gå
            gjennom behov, utfordringar og innspel.
          </p>
          <StyledInfo>
            <p>
              Har du andre spørsmål?
              <br /> Ikke nøl med å kontakte oss.
            </p>
          </StyledInfo>
        </StyledContent>
      </StyledModalMain>
    </StyledModal>
  );
};

export default WhatsThisModal;

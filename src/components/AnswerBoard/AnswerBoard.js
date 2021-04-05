import React from 'react';
import Input from '../Input/Input';
import Answer from './Answer';
import './AnswerBoard.css';

const placeholderText = 'Fortell oss hva du vil si her';
const buttonText = 'Legg ut';

const answerList = [
  {
    text:
      'Jeg ønsker at sentrum skal bli til det naturlige stedet å både bo og oppholde seg!',
    tema: 'Møteplasser',
    user: 'Navn',
  },
  {
    text: 'Gode møteplasser for folk i alle aldre.',
    tema: 'Møteplasser',
    user: 'Navn',
  },
  {
    text: 'Tilgang på god mat og drikke. Helst fra lokale produsenter.',
    tema: 'Mat og drikke',
    user: 'Navn',
  },
  {
    text: 'Uten bil, hvertfall!',
    tema: 'Bilfri',
    user: 'Navn',
  },
  {
    text:
      'En park uten biler der venner møtes for å ligge i gresset og ha det fint sammen. ',
    tema: 'Park',
    user: 'Navn',
  },
  {
    text:
      'Minst like viktig å ruste opp og se nye muligheter i det som allerede finnes, som å nødvendigvis måtte bygge alt fra scratch. ',
    tema: 'Gjenbruk',
    user: 'Navn',
  },
];

const AnswerBoard = () => {
  return (
    <div className="answer-board">
      <Input placeholderText={placeholderText} buttonText={buttonText} />

      {answerList.map(answer => {
        const { text, tema, user } = answer;
        return <Answer cardText={text} temaText={tema} userName={user} />;
      })}
    </div>
  );
};

export default AnswerBoard;

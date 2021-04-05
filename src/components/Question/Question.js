import React from 'react';
import TextCard from '../TextCard/TextCard';
import './Question.css';

const Question = ({ text }) => {
  return <TextCard className="question-card" cardText={text} />;
};

export default Question;

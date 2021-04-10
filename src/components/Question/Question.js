import React from 'react';
import './Question.css';

const Question = ({ text }) => {
  return (
    <div className="question-card">
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Question;

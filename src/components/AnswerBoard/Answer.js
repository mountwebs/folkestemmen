import React from 'react';
import './Answer.css';

const Answer = ({ cardText, temaText, userName }) => {
  return (
    <div className="answer-card-wrapper">
      <div className="answer-content">
        <p className="card-text">{cardText}</p>
      </div>

      <div className="answer-details">
        <div className="answer-user">
          <div className="thumbnail-wrapper">
            <img src="" alt="" className="user-thumbnail" />
          </div>
          <p>{userName}</p>
        </div>
        <span className="answer-tema">{temaText}</span>
      </div>
    </div>
  );
};

export default Answer;

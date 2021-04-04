import React from 'react';
import './Input.css';

const TextCard = ({ cardText, buttonText, userName }) => {
  return (
    <div className="card-wrapper">
      <p className="card-text">{cardText}</p>
      <button className="card-btn">{buttonText}</button>
      <span className="card-name">{userName}</span>
    </div>
  );
};

export default TextCard;

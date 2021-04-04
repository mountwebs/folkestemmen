import React from 'react';
import './Input.css';

const TextCard = ({ cardText, buttonType, userName }) => {
  return (
    <div className="card-wrapper">
      <p className="card-text">{cardText}</p>
      <button className="card-btn">{buttonType}</button>
      <span className="card-name">{userName}</span>
    </div>
  );
};

export default TextCard;

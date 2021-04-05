import React from 'react';

const TextCard = ({ className, cardText, buttonText, userName }) => {
  // const wrapperClass = `card-wrapper ${classes}`
  return (
    <div className={`card-wrapper ${className}`}>
      <p className="card-text">{cardText}</p>
      {buttonText && <button className="card-btn">{buttonText}</button>}
      {userName && <span className="card-name">{userName}</span>}
    </div>
  );
};

export default TextCard;

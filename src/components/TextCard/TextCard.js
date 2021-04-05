import React from 'react';

const TextCard = ({ className, cardText, temaText, userName }) => {
  // const wrapperClass = `card-wrapper ${classes}`
  return (
    <div className={`card-wrapper ${className}`}>
      <p className="card-text">{cardText}</p>

      {temaText && <button className="card-btn">{temaText}</button>}
      {userName && <span className="card-name">{userName}</span>}
    </div>
  );
};

export default TextCard;

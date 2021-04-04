import React from 'react';
import './Input.css';

const Input = ({ placeholderText, buttonText }) => {
  return (
    <div className="input-container">
      <textarea className="input-field" placeholder={placeholderText} />
      <button className="input-button">{buttonText}</button>
    </div>
  );
};

export default Input;

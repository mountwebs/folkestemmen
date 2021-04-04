import React from 'react';
import './Input.css';

const Input = ({ placeholderText, buttonText }) => {
  return (
    <div className="input-container">
      <textarea className="input-field" placeholder={placeholderText} />
      <div className="input-tema-button-wrapper">
        <input
          type="text"
          className="input-tema"
          placeholder="# Legg til tema"
        />
        <button className="input-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Input;

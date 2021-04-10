import React from 'react';
import './Input.css';
import Button from "../Button/Button"

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
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Input;

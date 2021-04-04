import React from 'react';
import './Input.css';

const Input = () => {
  return (
    <div className="input-container">
      <textarea
        className="input-field"
        placeholder="Fortell oss hva du vil si her"
      />
      <button className="input-button">Legg ut</button>
    </div>
  );
};

export default Input;

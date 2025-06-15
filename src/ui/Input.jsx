import React from 'react';
import './ui.css';

const Input = ({ type = 'text', ...props }) => {
  return (
    <input 
      type={type}
      className="input-base"
      {...props}
    />
  );
};

export default Input;
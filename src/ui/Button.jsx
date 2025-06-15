// Button.jsx
import React from 'react';

const Button = ({ children, color = 'purple', ...props }) => {
  const baseStyle = 'px-4 py-2 rounded-lg font-medium transition-all';
  const colors = {
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    green: 'bg-bug-green hover:bg-dark-green text-dark',
    outline: 'border border-purple-500 text-purple-500 hover:bg-purple-50',
  };

  return (
    <button
      className={`${baseStyle} ${colors[color]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
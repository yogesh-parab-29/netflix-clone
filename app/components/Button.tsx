import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-2"
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

interface InputFieldsProps {
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldsProps> = ({ placeholder,type, onChange }) => {

  return (
    <div className="w-full my-2">
      <input
        className="w-full bg-neutral-700 text-white text-xl px-4 py-2  rounded-md align-middle"
        type={type}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          try {
            onChange(e);
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </div>
  );
};

export default InputField;

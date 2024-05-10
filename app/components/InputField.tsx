import React from "react";

const InputField = (
  { placeholder }: { placeholder: string },
  onChange: () => void
) => {
  return (
    <div className="w-full">
      <input
        className="w-full bg-neutral-700 text-white text-2xl px-4 py-2 my-6  rounded-md align-middle"
        type="text"
      />
    </div>
  );
};

export default InputField;

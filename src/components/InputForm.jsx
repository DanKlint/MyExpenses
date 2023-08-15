import React from "react";
import "./InputForm.css";

const InputFormImpl = ({ inputType, inputName, inputPlaceholder }) => {
  return (
    <input type={inputType} name={inputName} placeholder={inputPlaceholder} />
  );
};

export const InputForm = React.memo(InputFormImpl);

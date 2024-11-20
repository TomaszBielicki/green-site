import React from "react";
import styles from "./FormInput.module.css";

interface InputProps {
  inputText: string;
  placeholder: string;
}

const FormInput: React.FC<InputProps> = ({ inputText, placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      <label id={inputText + "label"} htmlFor={inputText}>
        {inputText}
      </label>
      <input
        id="inputField"
        placeholder={placeholder}
        aria-labelledby="inputLabel"
        aria-describedby="inputDescription"
      />
    </div>
  );
};

export default FormInput;

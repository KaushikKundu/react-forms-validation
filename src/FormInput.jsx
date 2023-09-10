import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  function handleFocus() {
    setFocused(true);
  }
  
  return (
    <div className="formInput">
      <label>
        {label}
        </label>
        <input
          onChange={onChange}
          {...inputProps}
          onFocus={handleFocus}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

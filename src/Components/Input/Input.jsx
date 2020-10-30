import React from "react";
import "./Input.scss";

export default function Input({ placeholder, refer }) {
  return (
    <div class="input">
      <input
        ref={refer}
        id={placeholder}
        class="input__input"
        placeholder={placeholder}
      />
      <label for={placeholder} class="input__label">
        {placeholder} :
      </label>
    </div>
  );
}

import React from "react";
import "./Button.css";

const Button = ({ text, icon, ...rest }) => {
  return (
    <div>
      <button {...rest} className="Button">
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;

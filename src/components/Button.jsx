import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const ButtonImpl = ({ buttonText, rout }) => {
  return (
    <NavLink to={rout} className="link">
      <button className="form_button" type="submit" name="form_submit">
        {buttonText}
      </button>
    </NavLink>
  );
};

export const Button = React.memo(ButtonImpl);

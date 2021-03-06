import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherPorps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherPorps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

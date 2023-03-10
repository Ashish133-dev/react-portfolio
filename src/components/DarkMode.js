import React from "react";

export const DarkMode = () => {
  return (
    <>
      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />
      <label htmlhtmlFor="darkMode">
        <i className="fa-solid fa-circle-half-stroke toggle"></i>
      </label>
    </>
  );
};

import React from "react";
import style from "../css/style.module.css";

const Header = () => {
  return (
    <>
      <div className={`${style.header}`}>
        <h1>Tip Calculator</h1>
        <p>Build in React</p>
      </div>
    </>
  );
};

export default Header;

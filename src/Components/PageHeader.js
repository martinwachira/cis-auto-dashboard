import "../App.css";

import React from "react";
import logo from "../saf-logo.png";

const PageHeader = () => {
  return (
    <>
      <header className="App-header">
        <img width="300px" src={logo} alt="logo" />
      </header>
    </>
  );
};

export default PageHeader;

import React, { useState } from "react";
import Header from "./container/Header/Header";
import Filter from "./container/Filter/Filter";
import Main from "./container/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="content-wrapper">
        <Filter />
        <Main />
      </div>
    </div>
  );
}

export default App;

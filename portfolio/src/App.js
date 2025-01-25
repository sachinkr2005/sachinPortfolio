import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Button from "./Components/Button/Button";
import Cards from "./Components/Cards/Cards";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Hero />
        <Button />
        <Cards/>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import {
  Article,
  Brand,
  CTA,
  Feature,
  Navbar,
  Features,
  Blog,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

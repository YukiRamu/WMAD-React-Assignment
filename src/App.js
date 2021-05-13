import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ShowProps from "./components/Box/Box";
import People from "./components/People/People";

//functional component
const App = () => {
  return (
    <>
      <div className="App">
        <h1>Lab1: Showing the states values</h1>
        <People />

        <h1>Lab2: Practice Props</h1>
        <ShowProps imageUrl="./clickIcon.png" text="Click!!" />
        <ShowProps
          imageUrl="https://img.icons8.com/wired/64/000000/mouse-left-click.png"
          text="Click me"
        />
        <ShowProps
          imageUrl="https://img.icons8.com/pastel-glyph/64/000000/download--v1.png"
          text="Download"
        />
      </div>
    </>
  );
};

export default App;
// export default People;

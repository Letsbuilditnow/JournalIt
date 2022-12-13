import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Card from "./Card";
import Data from "./Data";

function App() {
  console.log(Data);
  const newData = Data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      {newData}
    </div>
  );
}

export default App;

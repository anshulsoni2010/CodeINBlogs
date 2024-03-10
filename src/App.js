import React from "react";
import "./App.css";
import "./index.css";
import HomePage from "./Pages/Homepage/Home";
import Navigation from "./common-component/navigation";

function App() {
  return (
    <>
     <Navigation/>
      <HomePage />
    </>
  );
}

export default App;

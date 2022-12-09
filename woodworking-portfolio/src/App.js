import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
} from "./components";

function App() {
  return (
    <div>
        <Navbar/>
        <h1> Hello World!</h1>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { text } from "stream/consumers";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import BARButton from "./Components/Button";
import Firstinp from "./Components/Input";
import APIhandel from "./pages/ApihandleScreen";
function App() {  return (
    <div>
    <APIhandel />
    </div>
    
  );
}

export default App;

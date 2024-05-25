import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { text } from "stream/consumers";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Quizscreen from "./pages/Quiz";
function App() {  return (
    <div>
      <Quizscreen />
    </div>
    
  );
}

export default App;

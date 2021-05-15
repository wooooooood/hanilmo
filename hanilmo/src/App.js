import React from "react";
import { Router } from "./router/Router";
import './App.css';
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;

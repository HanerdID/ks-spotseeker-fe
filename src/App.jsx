import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Destinasi from "./pages/Destinasi";
import Hangout from "./pages/Hangout";
import Kuliner from "./pages/Kuliner";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destinasi" element={<Destinasi />} />
          <Route path="/hangout" element={<Hangout />} />
          <Route path="/kuliner" element={<Kuliner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

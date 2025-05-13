// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the import path as needed
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Placeholder component - replace with your actual Home component

export default App;
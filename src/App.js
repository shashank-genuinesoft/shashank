import React, { useState, useEffect } from "react";
import './App.css';
import { themes } from "./theme"
import NavBar from "./components/Nav/Navbar";
import Home from "./screens/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  return (
    <Router>
      <div>
        <NavBar theme={themes[theme]} setTheme={setTheme} />
        <Routes>
       
          <Route path="/" element={<Home theme={themes[theme]} setTheme={setTheme} />} />
          
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

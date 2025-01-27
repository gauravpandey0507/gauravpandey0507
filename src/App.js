import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <header style={{ backgroundColor: "#282c34", padding: "1rem", textAlign: "right" }}>
        <nav>
          <Link to="/" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>About</Link>
          <Link to="/projects" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Projects</Link>
          <Link to="/contact" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Contact</Link>
        </nav>
      </header>

      <main style={{ padding: "2rem", minHeight: "160vh", textAlign:"center" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

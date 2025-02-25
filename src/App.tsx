import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiSnake } from "react-icons/gi";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SnakeGame from "./components/SnakeGame";
import Modal from "./components/Modal";
import "./styles/App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isGameOpen, setIsGameOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openGameModal = () => {
    setIsGameOpen(true);
  };

  const closeGameModal = () => {
    setIsGameOpen(false);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="button-container">
        <button onClick={toggleDarkMode} className="icon-button">
          {darkMode ? (
            <FaSun size={24} color="#FFFFFF" />
          ) : (
            <FaMoon size={24} color="#FFFFFF" />
          )}
        </button>
        <button onClick={openGameModal} className="icon-button">
          <GiSnake size={24} />
        </button>
      </div>

      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Modal isOpen={isGameOpen} onClose={closeGameModal}>
        <SnakeGame />
      </Modal>
    </div>
  );
};

export default App;

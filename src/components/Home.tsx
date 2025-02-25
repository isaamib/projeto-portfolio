import { TypeAnimation } from "react-type-animation";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  const matrixRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const container = matrixRef.current;

    const numberOfColumns = Math.floor(window.innerWidth / 20);
    const minSpeed = 5;
    const maxSpeed = 15;

    for (let i = 0; i < numberOfColumns; i++) {
      const column = document.createElement("div");
      column.classList.add("matrix-column");
      container?.appendChild(column);

      const createCharacters = () => {
        const characterCount = Math.floor(Math.random() * 20) + 10;
        const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;

        for (let j = 0; j < characterCount; j++) {
          const character = document.createElement("span");
          character.classList.add("matrix-character");
          character.textContent = characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
          character.style.setProperty("--speed", speed.toString());
          character.style.top = `${-Math.random() * 100}%`;
          character.style.animationDelay = `${Math.random() * 2}s`;
          column.appendChild(character);
        }
      };

      createCharacters();

      setInterval(() => {
        column.innerHTML = "";
        createCharacters();
      }, Math.random() * 5000 + 3000);
    }
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="matrix" ref={matrixRef}></div>
      <div className="home-content">
        <p className="Hello">Olá, me chamo</p>
        <h1 className="Name">Isabela Menezes</h1>
        <p className="Stack">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              3000,
              "",
              2000,
              "Full-Stack Developer",
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 200 }}
            wrapper="span"
            repeat={Infinity}
          />
        </p>

        <div className="social-buttons">
          <a
            href="https://github.com/isaamib"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/isabela-menezes-9189b4206/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

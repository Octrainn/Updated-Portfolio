import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import "./CSS Files/Navbar.css";
import Pdf from "./Images/Akshay_Vakil_Computer_Science_Resume (1).pdf";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Computer Science Student",
        "I like coding",
        "I enjoy watching shows",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <nav id="navbar">
      <div className="container">
        <a className="Resume" onClick={onResumeClick}>
          My Resume
        </a>
      </div>

      <a href="https://www.linkedin.com/in/akshay-vakil/" target="_blank" className="icons">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Octrainn" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
          <li className="Name">
            A <span className="period">.</span>
          </li>
        </div>
        <ScrollLink to="About" smooth={true} duration={500}>
          <li>Skills</li>
        </ScrollLink>
        <ScrollLink to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </ScrollLink>
        <ScrollLink to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </ScrollLink>
        {/* Use RouterLink for the Blogs route */}
        <RouterLink to="/blogs">
            <li>Blogs</li>
          </RouterLink>
      </ul>
      <div className="Introduction">
        <h1>Hey, I'm Akshay</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I'm currently a Full Stack Developer seeking many ways to improve my
          skills through problem-solving and creating various projects! Scroll
          down to learn more about me.
        </p>
        <ScrollLink to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;

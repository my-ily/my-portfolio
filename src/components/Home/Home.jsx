import React from 'react';
import NavBar from '../Nav-bar/NavBar';
import '../Home/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
const Home = () => {
  return (
    <div id="home">
      <NavBar />
      <div className="main-container">
        <header>
          <h1>
            Hi, I’m{' '}
            <span className="highlight">
              <Typewriter
                words={["GORGEOUS"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <h2>
            <span className="highlight">
              <Typewriter
                words={["a Front-End Developer"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p>I build websites that look good and work smoothly.</p>

          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <a href="/cv.pdf" download className="download-btn">Download CV</a>
        </header>
   <footer className="footer">
  <div className="skills-section">
    <p className="section-title">Best Skill On</p>
    <div className="icons">
      <FaGithub title="GitHub" />
      <FaPython title="Python" />
      <FaHtml5 title="HTML" />
      <FaCss3Alt title="CSS" />
      <FaJs title="JavaScript" />
    </div>
  </div>
</footer>

      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import '../About/About.css'
const About = () => {
   return (
    <section id="about" className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I'm <span className="highlight">GOURGEOUS</span>, a passionate front-end developer
        who loves building responsive and interactive websites. I enjoy turning
        ideas into real-world applications that are fast, accessible, and user-friendly.
      </p>

      <div className="about-boxes">
        <div className="box">
          <h3>🎨 UI/UX Design</h3>
          <p>Designing clean and modern user interfaces with great user experience.</p>
        </div>
        <div className="box">
          <h3>💻 Front-End Development</h3>
          <p>Creating interactive websites with HTML, CSS, JS, and React.</p>
        </div>
        <div className="box">
          <h3>🚀 Learning & Growth</h3>
          <p>Always learning new tech and improving coding skills.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

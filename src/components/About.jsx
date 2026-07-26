import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me.</h2>
          <div className="about-content">
            <div className="about-text glass">
              <p>
                I am a passionate creative developer with a strong focus on UI/UX design. 
                I bridge the gap between design and engineering, ensuring that the 
                final product is not only beautiful but also performant and accessible.
              </p>
              <p>
                My philosophy is simple: technology should be invisible. The best 
                interfaces are those that users don't even have to think about.
              </p>
            </div>
            <div className="about-stats glass">
              <div className="stat-item">
                <h3>Frontend</h3>
                <p>React, Vue, Next.js</p>
              </div>
              <div className="stat-item">
                <h3>Design</h3>
                <p>Figma, UI/UX, Motion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

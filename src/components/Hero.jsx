import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h2 className="hero-subtitle">Pro. Coder. Designer.</h2>
          <h1 className="hero-title">
            Creative<br />
            <span className="text-gradient">Developer.</span>
          </h1>
          <p className="hero-description">
            Building digital experiences that feel right. Focused on modern, performant, and hyper-responsive user interfaces.
          </p>
          <div className="hero-cta">
            <a href="#bento-grid" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let's talk <FaChevronRight size={14} />
            </a>
          </div>
        </motion.div>
        
        {/* Abstract shapes for decoration */}
        <motion.div 
          className="hero-abstract shape-1"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;

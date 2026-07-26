import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = document.querySelectorAll('section[id], footer[id]');
      let current = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Yayang.
        </a>
        <div className="navbar-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a 
                key={item.name} 
                href={item.href} 
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {isActive && (
                  <motion.span 
                    layoutId="nav-pill" 
                    className="nav-active-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="nav-text">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

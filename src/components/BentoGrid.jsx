import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import './BentoGrid.css';

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section className="bento-section">
      <div className="container">
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Project - Span 2x2 */}
          <motion.a href="#" className="bento-box bento-large glass" variants={itemVariants}>
            <div className="bento-image-wrapper">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="E-Commerce Platform" />
            </div>
            <div className="bento-content">
              <span className="bento-tag">Featured Project</span>
              <h3>Next-Gen E-Commerce</h3>
              <p>A headless commerce platform with 40% improved conversion rates.</p>
              <div className="bento-icon-corner">
                <FiArrowUpRight size={24} />
              </div>
            </div>
          </motion.a>

          {/* Stats / Experience - Span 2x1 */}
          <motion.div className="bento-box bento-wide glass" variants={itemVariants}>
            <div className="bento-content bento-stats-container">
              <div className="bento-stat">
                <h4>5+</h4>
                <p>Years of Experience</p>
              </div>
              <div className="bento-stat-divider"></div>
              <div className="bento-stat">
                <h4>50+</h4>
                <p>Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          {/* Skill 1 - Span 1x1 */}
          <motion.div className="bento-box glass bento-skill" variants={itemVariants}>
            <FaCode size={40} className="skill-icon text-gradient" />
            <h3>Frontend<br/>Engineering</h3>
          </motion.div>

          {/* Skill 2 - Span 1x1 */}
          <motion.div className="bento-box glass bento-skill" variants={itemVariants}>
            <FaPaintBrush size={40} className="skill-icon text-gradient" />
            <h3>UI/UX<br/>Design</h3>
          </motion.div>

          {/* Secondary Project - Span 2x1 */}
          <motion.a href="#" className="bento-box bento-wide glass bento-project-row" variants={itemVariants}>
            <div className="bento-content">
              <span className="bento-tag">App Design</span>
              <h3>Finance Dashboard</h3>
              <p>Real-time analytics for enterprise clients.</p>
            </div>
            <div className="bento-image-small">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="Finance Dashboard" />
            </div>
          </motion.a>

          {/* Contact / CTA - Span 2x1 */}
          <motion.a href="#contact" className="bento-box bento-wide glass bento-cta" variants={itemVariants}>
            <div className="bento-content">
              <FaRocket size={32} className="cta-icon" />
              <h3>Ready to start a project?</h3>
              <p>Let's build something amazing together.</p>
            </div>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;

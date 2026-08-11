import { motion, useReducedMotion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '../data/content';
import './BentoGrid.css';

const BentoGrid = () => {
  const reduceMotion = useReducedMotion();
  const featured = PROJECTS.filter((p) => p.featured);
  const primary = featured[0];
  const secondary = featured[1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="work" className="bento-section" aria-label="Featured work">
      <div className="container">
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-box bento-large glass"
            variants={itemVariants}
          >
            <div className="bento-image-wrapper">
              <img
                src={primary.image}
                alt=""
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="bento-content">
              <span className="bento-tag">Featured Project</span>
              <h3>{primary.title}</h3>
              <p>{primary.description}</p>
              <div className="bento-icon-corner" aria-hidden="true">
                <FiArrowUpRight size={24} />
              </div>
            </div>
          </motion.a>

          <motion.div className="bento-box bento-wide glass" variants={itemVariants}>
            <div className="bento-content bento-stats-container">
              <div className="bento-stat">
                <p className="bento-stat-value">5+</p>
                <p>Years of Experience</p>
              </div>
              <div className="bento-stat-divider" aria-hidden="true" />
              <div className="bento-stat">
                <p className="bento-stat-value">50+</p>
                <p>Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="bento-box glass bento-skill" variants={itemVariants}>
            <FaCode size={40} className="skill-icon text-gradient" aria-hidden="true" />
            <h3>
              Frontend
              <br />
              Engineering
            </h3>
          </motion.div>

          <motion.div className="bento-box glass bento-skill" variants={itemVariants}>
            <FaPaintBrush
              size={40}
              className="skill-icon text-gradient"
              aria-hidden="true"
            />
            <h3>
              UI/UX
              <br />
              Design
            </h3>
          </motion.div>

          <motion.a
            href={secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-box bento-wide glass bento-project-row"
            variants={itemVariants}
          >
            <div className="bento-content">
              <span className="bento-tag">{secondary.category}</span>
              <h3>{secondary.title}</h3>
              <p>{secondary.description}</p>
            </div>
            <div className="bento-image-small">
              <img
                src={secondary.image}
                alt=""
                loading="lazy"
                width={400}
                height={240}
              />
            </div>
          </motion.a>

          <motion.a
            href="#contact"
            className="bento-box bento-wide glass bento-cta"
            variants={itemVariants}
          >
            <div className="bento-content">
              <FaRocket size={32} className="cta-icon" aria-hidden="true" />
              <h3>Ready to start a project?</h3>
              <p>Let&apos;s build something amazing together.</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;

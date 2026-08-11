import { motion, useReducedMotion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="hero-subtitle">Pro. Coder. Designer.</p>
          <h1 id="hero-title" className="hero-title">
            Creative
            <br />
            <span className="text-gradient">Developer.</span>
          </h1>
          <p className="hero-description">
            Building digital experiences that feel right. Focused on modern,
            performant, and hyper-responsive user interfaces.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s talk <FaChevronRight size={14} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {!reduceMotion && (
          <motion.div
            className="hero-abstract shape-1"
            aria-hidden="true"
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'easeInOut',
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;

import { motion, useReducedMotion } from 'framer-motion';
import { SKILLS } from '../data/content';
import './About.css';

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
        >
          <h2 id="about-title" className="section-title">
            About Me.
          </h2>
          <div className="about-content">
            <div className="about-text glass">
              <p>
                I am a passionate creative developer with a strong focus on UI/UX
                design. I bridge the gap between design and engineering, ensuring
                that the final product is not only beautiful but also performant
                and accessible.
              </p>
              <p>
                My philosophy is simple: technology should be invisible. The best
                interfaces are those that users don&apos;t even have to think about.
              </p>
            </div>
            <div className="about-stats glass">
              <div className="stat-item">
                <h3>Frontend</h3>
                <p>{SKILLS.frontend.join(', ')}</p>
              </div>
              <div className="stat-item">
                <h3>Design</h3>
                <p>{SKILLS.design.join(', ')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

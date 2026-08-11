import { motion, useReducedMotion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { EXPERIENCES } from '../data/content';
import './Experience.css';

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">
          Experience.
        </h2>
        <ol className="timeline">
          {EXPERIENCES.map((exp, index) => (
            <motion.li
              key={exp.id}
              className="experience-card glass"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.15,
              }}
            >
              <div className="exp-icon" aria-hidden="true">
                <FaBriefcase size={24} />
              </div>
              <div className="exp-content">
                <span className="exp-period">{exp.period}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

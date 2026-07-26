import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    id: 1,
    period: "2023 - Present",
    role: "Senior Frontend Engineer",
    company: "TechNova Inc.",
    description: "Leading the frontend architecture for an enterprise-level SaaS platform. Improved performance scores by 40%."
  },
  {
    id: 2,
    period: "2021 - 2023",
    role: "UI/UX Designer & Developer",
    company: "Creative Studio",
    description: "Designed and developed award-winning marketing websites for Fortune 500 clients."
  },
  {
    id: 3,
    period: "2019 - 2021",
    role: "Frontend Developer",
    company: "Startup Hub",
    description: "Built interactive web applications using React and modern JavaScript ecosystems."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience.</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="exp-icon">
                <FaBriefcase size={24} />
              </div>
              <div className="exp-content">
                <span className="exp-period">{exp.period}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '../data/content';
import './Projects.css';

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">
          Selected Works.
        </h2>
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt=""
                  className="project-image"
                  loading="lazy"
                  width={800}
                  height={480}
                />
                <div className="project-overlay" aria-hidden="true">
                  <span className="view-btn">
                    View Project <FiArrowUpRight size={18} />
                  </span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

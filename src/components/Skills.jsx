import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'Vue', level: 75 },
      { name: 'TypeScript', level: 82 },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Motion Design', level: 78 },
      { name: 'Design Systems', level: 80 },
    ],
  },
  {
    title: 'Tools & Backend',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Git', level: 92 },
      { name: 'Vite / Webpack', level: 85 },
      { name: 'Firebase', level: 70 },
    ],
  },
];

const SkillBar = ({ name, level, index, reduceMotion }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            },
      });
    }
  }, [inView, controls, level, index, reduceMotion]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-label">
        <span>{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <motion.div
          ref={sectionRef}
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={
            sectionInView || reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
        >
          <h2 id="skills-title" className="section-title">
            Skills.
          </h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group glass">
                <h3 className="skill-group-title">{group.title}</h3>
                {group.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion, useReducedMotion } from 'framer-motion';
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

const SkillBar = ({ name, level, delay, reduceMotion }) => (
  <div className="skill-item">
    <div className="skill-label">
      <span>{name}</span>
      <span className="skill-pct">{level}%</span>
    </div>
    <div className="skill-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name}: ${level}%`}>
      <motion.div
        className="skill-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: '-80px' }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
        }
      />
    </div>
  </div>
);

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
                    delay={i * 0.08}
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

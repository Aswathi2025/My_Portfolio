import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} />,
      skills: ["Python", "Java", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: ["HTML", "CSS", "Bootstrap", "React.js"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Django", "Django REST Framework"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Postman"]
    }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

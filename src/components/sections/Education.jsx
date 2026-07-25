import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Chinmaya Institute of Technology",
      period: "2023 – 2025"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Mahatma Gandhi College",
      period: "2019 – 2022"
    }
  ];

  return (
    <section className="section education-section bg-light" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <div className="edu-timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="edu-item card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
              <div className="edu-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="edu-period">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

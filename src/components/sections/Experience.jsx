import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Python Full Stack Developer Trainee",
      company: "Kompetenzen Technologies",
      period: "Jan 2026 – Present",
      responsibilities: [
        "Python Development",
        "Django",
        "React Integration",
        "REST API Development",
        "SQL",
        "Full Stack Development",
        "Git",
        "Agile"
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Altos Technologies",
      period: "Jun 2025 – Sep 2025",
      responsibilities: [
        "Hospital Management System",
        "Appointment Scheduling",
        "Role Based Authentication",
        "Database Design",
        "Python",
        "SQL"
      ]
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Internships
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  <Briefcase size={16} />
                </div>
                {index !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <h4 className="job-company">{exp.company}</h4>
                  </div>
                  <span className="job-period">{exp.period}</span>
                </div>
                
                <div className="job-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <span key={i} className="resp-tag">{resp}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

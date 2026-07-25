import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-image-container">
              <img src={profileImg} alt="Aswathi Valsaraj" className="about-image" />
              <div className="about-image-backdrop"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="about-heading">Hello! I'm Aswathi.</h3>
            
            <p className="about-description">
              I am a dedicated Full Stack Developer who recently graduated with a Master of Computer Applications (MCA). 
              My academic journey has provided me with a strong foundation in computer science principles, 
              data structures, and modern software engineering practices.
            </p>
            
            <p className="about-description">
              My primary interest lies in Full Stack Development, particularly using Python, Django, and React.js. 
              I am also deeply fascinated by Artificial Intelligence and actively explore how to integrate 
              Generative AI capabilities into web applications to solve complex problems and create intelligent user experiences.
            </p>
            
            <p className="about-description">
              As a fresher, my career goal is to join a forward-thinking tech company where I can apply my skills, 
              learn from experienced professionals, and contribute to meaningful projects. I am a quick learner, 
              a strong problem solver, and I thrive in collaborative environments.
            </p>
            
            <div className="about-badges">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Adaptability'].map((badge, idx) => (
                <motion.span 
                  key={idx}
                  className="badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            
            <motion.div 
              className="about-action"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <a href="/Aswathi_Valsaraj_Resume.pdf" download className="btn btn-outline btn-sm">
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Code, Terminal, BrainCircuit } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="hero-section" id="home">
      
      {/* Animated Background Elements */}
      <div className="hero-bg-grid"></div>
      <motion.div 
        className="glowing-orb orb-1"
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -50, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="glowing-orb orb-2"
        animate={{ 
          x: [0, -60, 0], 
          y: [0, 60, 0] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span>Aswathi Valsaraj</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="hero-subtitle">
            <TypeAnimation
              sequence={[
                'Python Full Stack Developer',
                2000,
                'React.js Specialist',
                2000,
                'AI Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p variants={itemVariants} className="hero-description">
            Motivated MCA graduate passionate about Python, Django, React.js, and AI-powered web applications.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="/Aswathi_Valsaraj_Resume.pdf" download className="btn btn-outline">
              <Download size={18} />
              Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>

          {/* Quick Highlights */}
          <motion.div variants={itemVariants} className="hero-highlights">
            <div className="highlight-item">
              <Terminal size={18} />
              <span>MCA Graduate</span>
            </div>
            <div className="highlight-item">
              <Code size={18} />
              <span>Python & React</span>
            </div>
            <div className="highlight-item">
              <BrainCircuit size={18} />
              <span>AI Integration</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://www.linkedin.com/in/aswathi-valsaraj/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="mailto:aswathivalsaraj01@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-container">
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>Get in Touch</h3>
            <p className="contact-subtitle">
              Whether you have a question, an opportunity, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
            </p>
            
            <div className="info-list">
              <div className="info-item card">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:aswathivalsaraj01@gmail.com">aswathivalsaraj01@gmail.com</a></p>
                </div>
              </div>
              
              <div className="info-item card">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8301898442</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Find me on:</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/aswathi-valsaraj/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FiLinkedin size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <FiGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;

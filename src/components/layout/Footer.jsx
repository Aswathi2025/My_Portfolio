import { ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <h3 className="logo">Aswathi Valsaraj</h3>
            <p>&copy; {new Date().getFullYear()} Aswathi Valsaraj. All rights reserved.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
          </div>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

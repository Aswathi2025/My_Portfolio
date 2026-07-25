import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "EXTRACTOR – AI Powered Recruitment Portal",
      featured: true,
      description: "A comprehensive recruitment platform leveraging Generative AI to streamline the hiring process. Features AI-driven resume analysis, automatic MCQ generation, and advanced candidate matching.",
      techStack: ["React.js", "Django REST Framework", "MySQL", "Generative AI", "REST APIs"],
      features: [
        "AI Resume Analysis", "Resume Parsing", "AI Candidate Matching", 
        "AI Job Description Generator", "Automatic MCQ Generator", 
        "Recruiter & Candidate Dashboards", "Online Assessment"
      ],
      links: {
        github: "#",
        live: "#",
        caseStudy: "#"
      }
    },
    {
      title: "MediCare Management System",
      featured: false,
      description: "A comprehensive hospital management platform designed to optimize healthcare administration. Integrates Admin, Doctor, and Reception modules to streamline patient registration, appointments, and medical documentation.",
      techStack: ["Python", "Django", "React", "HTML", "CSS"],
      features: [
        "Role-Based Access (Admin, Doctor, Reception)",
        "Voice Notes to Text Conversion",
        "Live Form Validation & Secure Auth",
        "Automated Email with Password Generation",
        "Appointment Scheduling & Record Management",
        "Mobile-Responsive Design"
      ],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "One Touch Job",
      featured: false,
      description: "A centralized platform connecting job seekers, interns, and freelancers with opportunities. Offers skill development resources and placement services.",
      techStack: ["MERN Stack", "Python", "SQL"],
      features: [
        "Job Portal", "Internship Platform", "Freelancing", 
        "Skill Development", "Placement Services"
      ],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Haritha Karma Sena",
      featured: false,
      description: "A waste management and monitoring system for efficient collection and segregation tracking.",
      techStack: ["Python", "SQL", "HTML", "CSS"],
      features: [
        "Waste Collection", "Segregation Tracking", "Monitoring Dashboard"
      ],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-card card ${project.featured ? 'featured-project' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const experiences = [
  {
    company: 'Freelance',
    role: 'Full-Stack Developer & AI Automation',
    period: 'Jan 2026 — Present',
    location: 'Remote',
    type: 'Freelancing',
    tasks: [
      'Building modern web applications using Next.js for various clients',
      'Designing and implementing AI-powered automation workflows with n8n',
      'Integrating AI tools and APIs to streamline business processes',
      'Delivering end-to-end solutions from development to deployment',
    ],
    tech: ['Next.js', 'n8n', 'AI Tools', 'GitLab', 'CI/CD', 'Automation'],
  },
  {
    company: 'TALYS',
    role: 'DevOps Engineer Intern (PFE)',
    period: 'Feb 2025 — Aug 2025',
    location: 'Tunis, TN',
    type: 'FinTech',
    tasks: [
      'Designed Kubernetes-based continuous deployment architecture, improving scalability by 40%',
      'Built CI/CD pipelines with Jenkins, Docker, Argo CD, SonarQube & GitLeaks, accelerating releases by 60%',
      'Migrated infrastructure from Docker Compose to Kubernetes, reducing manual deployment effort by 50%',
      'Integrated Prometheus, Grafana, Loki & Filebeat monitoring stack, improving incident detection by 45%',
      'Implemented automated security scans, reducing configuration & secret exposure risks by 35%',
    ],
    tech: ['Kubernetes', 'Jenkins', 'Docker', 'ArgoCD', 'Prometheus', 'Grafana', 'SonarQube'],
  },
  {
    company: 'HRMAPS',
    role: 'DevOps Engineer Intern',
    period: 'Jul 2024 — Sep 2024',
    location: 'Tunis, TN',
    type: 'HR Tech',
    tasks: [
      'Implemented CI/CD pipelines using Azure DevOps for SIRH application, reducing release time by 55%',
      'Automated database migration workflows using Azure DevOps, IIS & SQL Server, decreasing errors by 45%',
      'Standardized multi-environment configurations (dev, pre-prod, prod), improving consistency by 40%',
    ],
    tech: ['Azure DevOps', 'IIS', 'SQL Server', '.NET'],
  },
  {
    company: 'Global Payment Gateway',
    role: 'Full-Stack Developer (PFE)',
    period: 'Jan 2022 — Jun 2022',
    location: 'Tunis, TN',
    type: 'FinTech',
    tasks: [
      'Developed a commercial management and accounting web application',
      'Handled end-to-end development from requirements to deployment',
    ],
    tech: ['Web Development', 'Database', 'Full-Stack'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="glow-line"></div>
          <p className="section-subtitle">
            My professional journey in Cloud & DevOps engineering.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="company-type">{exp.type}</span>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="company-role">{exp.role}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>

                <ul className="timeline-tasks">
                  {exp.tasks.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

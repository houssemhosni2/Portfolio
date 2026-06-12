import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import {
  SiKubernetes, SiJenkins,
  SiOpenstack, SiSymfony, SiAngular, SiSpringboot
} from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    title: 'Kubernetes CD Platform',
    company: 'TALYS — PFE',
    description:
      'End-to-end continuous deployment platform for a FinTech application. Migrated from Docker Compose to Kubernetes with GitOps practices using ArgoCD, integrated security scanning and full monitoring stack.',
    tech: ['Kubernetes', 'Jenkins', 'Docker', 'ArgoCD', 'Prometheus', 'Grafana', 'Loki'],
    icon: <SiKubernetes />,
    metrics: [
      { label: 'Faster Releases', value: '60%' },
      { label: 'Less Manual Work', value: '50%' },
      { label: 'Better Detection', value: '45%' },
    ],
    featured: true,
  },
  {
    title: 'CI/CD Pipeline Automation',
    company: 'Academic Project',
    description:
      'Comprehensive CI/CD pipeline with Jenkins for automated building, testing, and deployment. Integrated Docker image delivery via Ansible playbooks and quality gates with SonarQube.',
    tech: ['Jenkins', 'Git', 'Docker', 'Ansible', 'Maven', 'JUnit', 'SonarQube'],
    icon: <SiJenkins />,
    featured: false,
  },
  {
    title: 'Khademni.tn — Cloud Platform',
    company: 'ESPRIT — Academic',
    description:
      'Private OpenStack-based IaaS platform with Kubernetes PaaS layer. Automated infrastructure provisioning with Ansible, reducing costs by 35% vs public cloud equivalents.',
    tech: ['OpenStack', 'Kubernetes', 'Docker', 'KVM', 'Ansible'],
    icon: <SiOpenstack />,
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Better Utilization', value: '45%' },
      { label: 'Faster Setup', value: '60%' },
    ],
    featured: true,
  },
  {
    title: 'Azure DevOps HR Pipeline',
    company: 'HRMAPS',
    description:
      'Automated deployment pipeline for an SIRH application using Azure DevOps. Included database migration automation and standardized multi-environment configurations.',
    tech: ['Azure DevOps', 'IIS', 'SQL Server', '.NET'],
    icon: <SiAngular />,
    featured: false,
  },
  {
    title: 'Ibadel — Exchange Platform',
    company: 'ESPRIT — Academic',
    description:
      'Multi-platform application for article exchange with web, mobile, and desktop interfaces. Built with Symfony, Java, and CodeNameOne following Scrum methodology.',
    tech: ['Symfony', 'Java', 'CodeNameOne', 'MySQL', 'Scrum'],
    icon: <SiSymfony />,
    featured: false,
  },
  {
    title: 'Global Payment Gateway',
    company: 'ISET — PFE',
    description:
      'Commercial management and accounting web application for a payment processing company. Full-stack development from requirements gathering to production deployment.',
    tech: ['Full-Stack', 'Web Development', 'Database'],
    icon: <SiSpringboot />,
    featured: false,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="glow-line"></div>
          <p className="section-subtitle">
            Key projects that showcase my DevOps and cloud engineering capabilities.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a href="https://github.com/houssemhosni2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>

              <span className="project-company">{project.company}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.metrics && (
                <div className="project-metrics">
                  {project.metrics.map(m => (
                    <div key={m.label} className="metric">
                      <span className="metric-value">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiKubernetes, SiDocker, SiJenkins, SiAnsible, SiTerraform,
  SiPrometheus, SiGrafana, SiArgo, SiNginx, SiApache,
  SiGit, SiLinux, SiVmware, SiReact, SiAngular, SiNodedotjs,
  SiSpringboot, SiSymfony, SiOpenstack,
  SiSonar, SiLaravel
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaServer, FaNetworkWired } from 'react-icons/fa';
import './Skills.css';

const categories = [
  {
    id: 'devops',
    name: 'DevOps & CI/CD',
    skills: [
      { name: 'Kubernetes', icon: <SiKubernetes />, level: 90 },
      { name: 'Docker', icon: <SiDocker />, level: 95 },
      { name: 'Jenkins', icon: <SiJenkins />, level: 85 },
      { name: 'Argo CD', icon: <SiArgo />, level: 80 },
      { name: 'Terraform', icon: <SiTerraform />, level: 75 },
      { name: 'Ansible', icon: <SiAnsible />, level: 85 },
      { name: 'Git', icon: <SiGit />, level: 90 },
      { name: 'SonarQube', icon: <SiSonar />, level: 80 },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Virtualization',
    skills: [
      { name: 'Azure', icon: <VscAzure />, level: 80 },
      { name: 'OpenStack', icon: <SiOpenstack />, level: 85 },
      { name: 'VMware', icon: <SiVmware />, level: 75 },
      { name: 'Linux', icon: <SiLinux />, level: 90 },
      { name: 'KVM/ESXi', icon: <FaServer />, level: 75 },
    ],
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Networking',
    skills: [
      { name: 'Prometheus', icon: <SiPrometheus />, level: 85 },
      { name: 'Grafana', icon: <SiGrafana />, level: 85 },
      { name: 'Nginx', icon: <SiNginx />, level: 80 },
      { name: 'HAProxy', icon: <FaNetworkWired />, level: 75 },
      { name: 'Apache', icon: <SiApache />, level: 70 },
    ],
  },
  {
    id: 'dev',
    name: 'Development',
    skills: [
      { name: 'React', icon: <SiReact />, level: 75 },
      { name: 'Angular', icon: <SiAngular />, level: 70 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 75 },
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 70 },
      { name: 'Symfony', icon: <SiSymfony />, level: 65 },
      { name: 'Laravel', icon: <SiLaravel />, level: 60 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('devops');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const active = categories.find(c => c.id === activeCategory);

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="glow-line"></div>
          <p className="section-subtitle">
            Technologies I work with to build and automate cloud infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="skill-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`skill-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

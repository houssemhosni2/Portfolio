import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaServer, FaDocker, FaCloud, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const highlights = [
  { icon: <FaCloud />, title: 'Cloud Native', desc: 'Azure, OpenStack, VMware' },
  { icon: <FaDocker />, title: 'Containerization', desc: 'Docker, Kubernetes, Helm' },
  { icon: <FaServer />, title: 'CI/CD Pipelines', desc: 'Jenkins, Azure DevOps, ArgoCD' },
  { icon: <FaShieldAlt />, title: 'DevSecOps', desc: 'SonarQube, GitLeaks, OWASP' },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="glow-line"></div>
          <p className="section-subtitle">
            Passionate about building reliable infrastructure and automating everything.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a <span className="highlight">Cloud & DevOps Engineer</span> based in Tunis, Tunisia,
              with a strong foundation in computer science and hands-on experience in designing and
              implementing cloud-native architectures.
            </p>
            <p>
              My journey spans from building <span className="highlight">full-stack applications</span> to
              architecting <span className="highlight">Kubernetes-based deployment platforms</span>, CI/CD
              pipelines, and monitoring stacks. I thrive on transforming complex manual processes into
              automated, repeatable, and secure workflows.
            </p>
            <p>
              With experience across FinTech and HR tech domains, I bring a pragmatic approach to
              infrastructure challenges — focusing on scalability, security, and developer experience.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Professional Experiences</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="highlight-card"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

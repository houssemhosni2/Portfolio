import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiOutlineMail, HiArrowDown } from 'react-icons/hi';
import profileImg from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="terminal-prompt">$</span> Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Houssem Hosni
          </motion.h1>

          <motion.div
            className="hero-title-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'Cloud & DevOps Engineer',
                2000,
                'CI/CD Pipeline Architect',
                2000,
                'Kubernetes Specialist',
                2000,
                'Next.js Developer & AI Automator',
                2000,
                'Infrastructure Automator',
                2000,
              ]}
              wrapper="h2"
              className="hero-title"
              repeat={Infinity}
              speed={50}
            />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I build and automate cloud-native infrastructure, design secure CI/CD pipelines,
            and orchestrate Kubernetes deployments for scalable, production-ready systems.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary">
                <span>Get In Touch</span>
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn-secondary">
                <span>View Projects</span>
              </button>
            </Link>
            <a href="/Houssem_Hosni_CV.pdf" download className="btn-outline">
              <FaDownload />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a href="https://github.com/houssemhosni2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/houssem-hosni/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:houssemhosni2018@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="hero-avatar">
            <div className="hero-avatar-ring">
              <img src={profileImg} alt="Houssem Hosni" />
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">houssem@cloud:~</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span> kubectl get pods
              </div>
              <div className="terminal-output">
                NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS
              </div>
              <div className="terminal-output success">
                portfolio-app&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;Running
              </div>
              <div className="terminal-output success">
                api-server&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;Running
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> docker ps --format "table"
              </div>
              <div className="terminal-output success">
                3 containers running...
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> <span className="cursor">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <HiArrowDown />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

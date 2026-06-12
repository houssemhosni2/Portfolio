import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              HH
              <span className="logo-bracket"> /&gt;</span>
            </span>
            <p className="footer-tagline">
              Building reliable infrastructure, one pipeline at a time.
            </p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/houssemhosni2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/houssem-hosni/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:houssemhosni2018@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            Designed & Built with <FaHeart className="heart-icon" /> by Houssem Hosni
          </p>
          <p className="footer-year">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

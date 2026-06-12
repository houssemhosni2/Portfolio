import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:houssemhosni2018@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink);
    setStatus('Email client opened!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="glow-line"></div>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-info-title">Let's talk</h3>
            <p className="contact-info-text">
              I'm currently open to new opportunities in Cloud & DevOps engineering.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <HiOutlineMail />
                </div>
                <div>
                  <span className="contact-item-label">Email</span>
                  <a href="mailto:houssemhosni2018@gmail.com">houssemhosni2018@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="contact-item-label">Phone</span>
                  <a href="tel:+21699906307">+216 99 906 307</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="contact-item-label">Location</span>
                  <span>Tunis, Ariana 2080, Tunisia</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
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
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

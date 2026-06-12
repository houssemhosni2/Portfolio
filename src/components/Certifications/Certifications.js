import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiDocker, SiAnsible, SiKubernetes } from 'react-icons/si';
import { FaCode, FaAward, FaTimes, FaExpand, FaEye, FaFilePdf } from 'react-icons/fa';
import './Certifications.css';

const certs = [
  {
    title: 'Docker (Level 1)',
    issuer: 'KodeKloud',
    year: '2024',
    icon: <SiDocker />,
    color: '#2496ED',
    images: [],
    details: null,
  },
  {
    title: 'Ansible (Level 1)',
    issuer: 'KodeKloud',
    year: '2024',
    icon: <SiAnsible />,
    color: '#EE0000',
    images: [],
    details: null,
  },
  {
    title: 'Kubernetes (Level 1)',
    issuer: 'KodeKloud',
    year: '2024',
    icon: <SiKubernetes />,
    color: '#326CE5',
    images: [],
    details: null,
  },
  {
    title: 'Full-Stack JS Bootcamp',
    issuer: 'GoMyCode',
    year: '2021',
    icon: <FaCode />,
    color: '#EE2A35',
    documents: [
      { src: '/certificates/gomycode-certificate.pdf', label: 'Certificate of Completion', type: 'pdf' },
      { src: '/certificates/gomycode-report.pdf', label: 'Full Academic Report', type: 'pdf' },
    ],
    details: {
      duration: 'Jun 2021 — Nov 2021',
      grade: 'Titan I',
      credentialId: '00009468',
      highlights: [
        { skill: 'Data Manipulation Language (DML)', score: 100 },
        { skill: 'Deployment', score: 100 },
        { skill: 'MERN APP', score: 100 },
        { skill: 'Programming Design & Methodology', score: 100 },
        { skill: 'Development', score: 100 },
        { skill: 'Web Fundamentals', score: 98 },
        { skill: 'Relational Model', score: 98 },
        { skill: 'CSS & Layout', score: 97 },
        { skill: 'Databases', score: 96 },
        { skill: 'Node.js', score: 95 },
        { skill: 'REST API', score: 95 },
        { skill: 'HTML', score: 95 },
      ],
    },
  },
  {
    title: 'Sustainability & Ethics',
    issuer: 'Honoris',
    year: '2024',
    icon: <FaAward />,
    color: '#22c55e',
    images: [],
    details: null,
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeDoc, setActiveDoc] = useState(0);

  const hasContent = (cert) => (cert.documents && cert.documents.length > 0) || cert.details;

  const openModal = (cert) => {
    if (hasContent(cert)) {
      setSelectedCert(cert);
      setActiveDoc(0);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="certifications section" id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="glow-line"></div>
          <p className="section-subtitle">
            Professional certifications validating my technical expertise. Click to explore details.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              className={`cert-card ${hasContent(cert) ? 'has-content' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => openModal(cert)}
            >
              <div
                className="cert-icon"
                style={{ color: cert.color, background: `${cert.color}15` }}
              >
                {cert.icon}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
              {hasContent(cert) && (
                <div className="cert-badge">
                  <FaEye /> View Details
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="cert-modal-header">
                <div className="cert-modal-header-info">
                  <div
                    className="cert-modal-icon"
                    style={{ color: selectedCert.color, background: `${selectedCert.color}15` }}
                  >
                    {selectedCert.icon}
                  </div>
                  <div>
                    <h3>{selectedCert.title}</h3>
                    <p>{selectedCert.issuer} &middot; {selectedCert.year}</p>
                  </div>
                </div>
                <button className="cert-modal-close" onClick={closeModal}>
                  <FaTimes />
                </button>
              </div>

              <div className="cert-modal-body">
                {/* Document Tabs & Viewer */}
                {selectedCert.documents && selectedCert.documents.length > 0 && (
                  <div className="cert-docs">
                    {/* Tab buttons */}
                    <div className="cert-doc-tabs">
                      {selectedCert.documents.map((doc, idx) => (
                        <button
                          key={idx}
                          className={`cert-doc-tab ${activeDoc === idx ? 'active' : ''}`}
                          onClick={() => setActiveDoc(idx)}
                        >
                          <FaFilePdf />
                          <span>{doc.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* PDF Viewer */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeDoc}
                        className="cert-doc-viewer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <iframe
                          src={`${selectedCert.documents[activeDoc].src}#toolbar=0&navpanes=0`}
                          title={selectedCert.documents[activeDoc].label}
                          className="cert-pdf-frame"
                        />
                        <div className="cert-doc-actions">
                          <a
                            href={selectedCert.documents[activeDoc].src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-doc-open"
                          >
                            <FaExpand /> Open Full Screen
                          </a>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {/* Details & Scores */}
                {selectedCert.details && (
                  <div className="cert-details">
                    <div className="cert-details-meta">
                      {selectedCert.details.duration && (
                        <div className="cert-meta-item">
                          <span className="meta-label">Duration</span>
                          <span className="meta-value">{selectedCert.details.duration}</span>
                        </div>
                      )}
                      {selectedCert.details.grade && (
                        <div className="cert-meta-item">
                          <span className="meta-label">Grade</span>
                          <span className="meta-value grade">{selectedCert.details.grade}</span>
                        </div>
                      )}
                      {selectedCert.details.credentialId && (
                        <div className="cert-meta-item">
                          <span className="meta-label">Credential ID</span>
                          <span className="meta-value mono">{selectedCert.details.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {selectedCert.details.highlights && (
                      <div className="cert-scores">
                        <h4 className="cert-scores-title">Skills & Scores</h4>
                        <div className="cert-scores-list">
                          {selectedCert.details.highlights.map((item, idx) => (
                            <motion.div
                              key={item.skill}
                              className="score-item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <div className="score-header">
                                <span className="score-skill">{item.skill}</span>
                                <span className={`score-value ${item.score === 100 ? 'perfect' : ''}`}>
                                  {item.score}%
                                </span>
                              </div>
                              <div className="score-bar-bg">
                                <motion.div
                                  className="score-bar-fill"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.score}%` }}
                                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                                  style={{
                                    background: item.score === 100
                                      ? 'linear-gradient(90deg, #22c55e, #06b6d4)'
                                      : 'var(--gradient-primary)',
                                  }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;

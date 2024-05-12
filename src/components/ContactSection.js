import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 class="contact-heading">Contact Me</h2>
      <div className="contact-details">
        <a href="https://m.facebook.com/people/Hashim-Qasim/100007922914346" target="_blank" rel="noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faFacebookF} />
          <span>Facebook</span>
        </a>
        <a href="https://github.com/UroojSha/uroojsha.github.io" target="_blank" rel="noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
        <a href="https://twitter.com/CodeWooInsider" target="_blank" rel="noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faTwitter} />
          <span>Twitter</span>
        </a>
        <a href="mailto:urooj_shafait292@hotmail.com" rel="noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Send an Email</span>
        </a>
        <a href="tel:+44 7366622536" rel="noreferrer" className="contact-link">
          <FontAwesomeIcon icon={faPhone} />
          <span>Call Me</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

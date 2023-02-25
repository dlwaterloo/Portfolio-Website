import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info-text">
                  <a href="mailto:d8liu@uwaterloo.ca">d8liu@uwaterloo.ca</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaGithub />
                </div>
                <div className="contact-info-text">
                  <a href="https://github.com/dlwaterloo" target="_blank" rel="noopener noreferrer">github.com/dlwaterloo</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-info-text">
                  <a href="https://www.linkedin.com/in/davidliuzenan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/davidliuzenan/</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-photo">
              <img src="assets/contact-photo.jpg" alt="Contact" />
              <div className="contact-photo-text">
                <a href="tel:+14372607422">(437) 260-7422</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

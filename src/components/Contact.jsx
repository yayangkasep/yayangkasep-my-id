import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="contact-wrapper"
        >
          <div className="contact-header">
            <h2 className="section-title">Let's Connect.</h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info glass">
              <h3>Contact Information</h3>
              <p>Fill out the form and I will get back to you within 24 hours.</p>
              
              <div className="contact-email">
                <FiMail size={20} />
                <a href="mailto:hello@yayangkasep.my.id">hello@yayangkasep.my.id</a>
              </div>
              
              <div className="contact-social">
                <a href="#" className="social-pill">
                  <FaGithub size={18} /> GitHub
                </a>
                <a href="#" className="social-pill">
                  <FaLinkedin size={18} /> LinkedIn
                </a>
                <a href="#" className="social-pill">
                  <FaTwitter size={18} /> Twitter
                </a>
              </div>
            </div>

            <div className="contact-form glass">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can I help you?"></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message <FiSend size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

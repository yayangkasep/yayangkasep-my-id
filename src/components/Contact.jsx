import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SITE, SOCIAL } from '../data/content';
import './Contact.css';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | error

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email';
    }
    if (!form.message.trim()) next.message = 'Message is required';
    else if (form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    // Client-side mailto fallback until a backend is connected
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="contact-wrapper"
        >
          <div className="contact-header">
            <h2 id="contact-title" className="section-title">
              Let&apos;s Connect.
            </h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hi? I&apos;d love to hear
              from you.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info glass">
              <h3>Contact Information</h3>
              <p>Fill out the form and I will get back to you within 24 hours.</p>

              <div className="contact-email">
                <FiMail size={20} aria-hidden="true" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>

              <div className="contact-social">
                {SOCIAL.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="social-pill"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} (opens in new tab)`}
                    >
                      {Icon && <Icon size={18} aria-hidden="true" />}
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="contact-form glass">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="How can I help you?"
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === 'success' && (
                  <p className="form-status form-status-success" role="status">
                    <FiCheck size={16} aria-hidden="true" />
                    Opening your email client…
                  </p>
                )}

                {status === 'error' && Object.keys(errors).length > 0 && (
                  <p className="form-status form-status-error" role="alert">
                    <FiAlertCircle size={16} aria-hidden="true" />
                    Please fix the errors above.
                  </p>
                )}

                <button type="submit" className="submit-btn">
                  Send Message <FiSend size={18} aria-hidden="true" />
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

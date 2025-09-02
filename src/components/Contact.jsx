import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: '', isError: false, isSubmitting: true });

    if (formData.honeypot) {
      setFormStatus({
        message: 'Spam detected.',
        isError: true,
        isSubmitting: false
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwpnnvbj", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setFormStatus({
          message: 'Thank you! Your message has been sent successfully.',
          isError: false,
          isSubmitting: false
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        });
      } else {
        setFormStatus({
          message: 'Oops! Something went wrong. Please try again later.',
          isError: true,
          isSubmitting: false
        });
      }
    } catch (error) {
      setFormStatus({
        message: 'Network error. Please try again later.',
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's discuss your project</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-info-text">
              <h4>Location</h4>
              <p>Lalitpur-25, Lalitpur, Nepal</p>
            </div>
          </div>

          <div className="contact-info-item">
            <i className="fas fa-envelope"></i>
            <div className="contact-info-text">
              <h4>Email</h4>
              <p>ghimireasim3@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-info-text">
              <h4>Phone</h4>
              <p>+977 9861973100</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/asimghimire11" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/asim-ghimire-68891829a/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field (hidden from users but visible to bots) */}
            <div style={{ display: "none" }}>
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus.message && (
              <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

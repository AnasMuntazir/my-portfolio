import React, { useState } from 'react';
import './Contact.css';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'; // icons added

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-down">📩 Contact Me</h2>
      <p>Let’s work together — I’d love to hear from you!</p>

      <form action="https://formspree.io/f/mnnzbvnd" method="POST" className="contact-form" data-aos="fade-up">
        <div className="input-group">
          <FiUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <FiMail className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <FiMessageSquare className="input-icon" />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {submitted && <p className="success">Thanks! I’ll get back to you shortly.</p>}
      </form>
    </section>
  );
}

export default Contact;

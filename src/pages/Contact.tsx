import { useState, FormEvent } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const heroAnim = useScrollAnimation();
  const contentAnim = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="contact">
      <section 
        ref={heroAnim.ref}
        className={`contact-hero fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
      >
        <h1 className="page-title animated-title">Contact</h1>
        <p className="page-subtitle">Let's connect and create something great together</p>
      </section>

      <section 
        ref={contentAnim.ref}
        className="contact-content"
      >
        <div className={`contact-info fade-in-left ${contentAnim.isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:eboyd.jason@gmail.com">eboyd.jason@gmail.com</a>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <a href="linkedin.com/in/jasoneboyd" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jasoneboyd
                </a>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">🐙</span>
              <div>
                <h3>GitHub</h3>
                <a href="github.com/boydje23" target="_blank" rel="noopener noreferrer">
                  github.com/boydje23
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`contact-form-container fade-in-right stagger-1 ${contentAnim.isVisible ? 'visible' : ''}`}>
          {isSubmitted ? (
            <div className="form-success">
              <span className="success-icon">✓</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                className="btn btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
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
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;

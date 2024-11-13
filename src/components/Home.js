import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Meeting Scheduler</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <Link to="/Login"><a href="#login" className="login" required>Sign In</a></Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="Hero-content">
          <h1 id="H2">Online Schedule Meeting</h1>
          <p>Manage your meetings with ease, sync with your calendar, and never miss an appointment.</p>
          <Link to="/meeting"><button className="cta-button" onClick={openModal}>Get Started</button></Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Easy Scheduling</h3>
            <p>Set up meetings in just a few clicks.</p>
          </div>
          <div className="feature-item">
            <h3>Calendar Integration</h3>
            <p>Sync your meetings with Google Calendar, Outlook, and more.</p>
          </div>
          <div className="feature-item">
            <h3>Automatic Reminders</h3>
            <p>Receive reminders before your meetings.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-item">
            <h3>Step 1</h3>
            <p>Create an account or log in to your existing account.</p>
          </div>
          <div className="step-item">
            <h3>Step 2</h3>
            <p>Schedule a meeting by choosing the date, time, and participants.</p>
          </div>
          <div className="step-item">
            <h3>Step 3</h3>
            <p>Send invites and receive confirmations instantly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p >"This tool has made my scheduling so much easier!" - John Doe</p>
          </div>
          <div className="testimonial-item">
            <p>"I love the calendar integration feature." - Jane Smith</p>
          </div>
          <div className="testimonial-item">
            <p>"Automatic reminders ensure I never miss a meeting." - Alex Johnson</p>
          </div>
        </div>
      </section>
       {/* Contact Section */}
       <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Get Started</h2>
            <p>Sign up now to start scheduling your meetings effortlessly!</p>
            <button className="cta-button">Sign Up</button>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
        <p>&copy; 2024 Meeting Scheduler. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

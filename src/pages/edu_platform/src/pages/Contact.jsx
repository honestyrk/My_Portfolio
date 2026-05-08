import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact <span>Us</span></h1>
          <p>Have questions? We're here to help. Reach out to us through any of the channels below.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="contact-methods">
              <div className="method-card">
                <MapPin className="method-icon" />
                <div>
                  <h3>Address</h3>
                  <p>123 Education Lane, Knowledge Hub,<br />New Delhi, India - 110001</p>
                </div>
              </div>
              <div className="method-card">
                <Phone className="method-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 12345 67890</p>
                </div>
              </div>
              <div className="method-card">
                <Mail className="method-icon" />
                <div>
                  <h3>Email</h3>
                  <p>info@educentre.com</p>
                  <p>admissions@educentre.com</p>
                </div>
              </div>
              <div className="method-card">
                <Clock className="method-icon" />
                <div>
                  <h3>Office Hours</h3>
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#"><Instagram /></a>
                <a href="#"><Facebook /></a>
                <a href="#"><Twitter /></a>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1213426211843!2d77.2104033150824!3d28.62612738241551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3695555555%3A0x6e9114f6b649d8c0!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Centre Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

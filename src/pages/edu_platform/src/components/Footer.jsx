import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <BookOpen size={28} />
              <span>Edu<span>Centre</span></span>
            </Link>
            <p>Empowering minds since 2010. We provide quality education and practical skills to help you build a successful career.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><ChevronRight size={16} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={16} /> About Us</Link></li>
              <li><Link to="/courses"><ChevronRight size={16} /> Courses</Link></li>
              <li><Link to="/admission"><ChevronRight size={16} /> Admission</Link></li>
              <li><Link to="/contact"><ChevronRight size={16} /> Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><MapPin size={18} /> 123 Education Lane, New Delhi</li>
              <li><Phone size={18} /> +91 98765 43210</li>
              <li><Mail size={18} /> info@educentre.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EduCentre. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

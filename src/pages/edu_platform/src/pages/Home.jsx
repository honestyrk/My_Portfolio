import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, GraduationCap, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our <span>Educational Centre</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unlock your potential with our world-class courses and expert guidance. 
            Empowering students with quality education and practical skills for a brighter future.
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Visit Centre <ArrowRight size={20} />
            </Link>
            <Link to="/admission" className="btn btn-outline">
              Apply Now
            </Link>
          </motion.div>
        </div>
        <div className="hero-image">
          <div className="image-blob"></div>
          {/* Using a placeholder gradient pattern since image generation is unavailable */}
          <div className="hero-visual">
            <GraduationCap size={120} color="var(--primary)" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us?</h2>
            <p>We provide the best learning environment for our students.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><CheckCircle /></div>
              <h3>Expert Faculty</h3>
              <p>Learn from industry experts with years of experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BookOpen /></div>
              <h3>Practical Learning</h3>
              <p>Hands-on training and real-world projects for better understanding.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users /></div>
              <h3>Placement Support</h3>
              <p>Dedicated assistance to help you land your dream job.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { Award, Target, Eye } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Our <span>Institute</span></h1>
          <p>Founded in 2010, we have been a beacon of excellence in education for over a decade.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              We started with a single classroom and a vision to provide quality education to everyone. 
              Today, we are one of the leading educational centres in the region, offering a wide range 
              of courses from vocational training to professional certifications.
            </p>
            <p>
              Our mission is to empower individuals with the knowledge and skills they need to succeed 
              in the modern world. we believe that education is the key to personal and professional growth.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-card">
              <h3>5000+</h3>
              <p>Students Graduated</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container grid">
          <div className="mv-card">
            <Target className="mv-icon" />
            <h3>Our Mission</h3>
            <p>To provide accessible, high-quality education that equips students with practical skills and theoretical knowledge.</p>
          </div>
          <div className="mv-card">
            <Eye className="mv-icon" />
            <h3>Our Vision</h3>
            <p>To be a global leader in education, fostering innovation and lifelong learning for a better society.</p>
          </div>
          <div className="mv-card">
            <Award className="mv-icon" />
            <h3>Our Values</h3>
            <p>Integrity, Excellence, Inclusivity, and Student-Centricity are at the heart of everything we do.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

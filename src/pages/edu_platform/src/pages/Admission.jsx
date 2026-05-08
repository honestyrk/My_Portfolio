import React, { useState } from 'react';
import { Send, CheckCircle2, ClipboardCheck, ExternalLink } from 'lucide-react';
import './Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    timing: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admission Form Data:', formData);
    setIsSubmitted(true);
    // Temporary state store (resets on refresh as requested)
  };

  if (isSubmitted) {
    return (
      <div className="admission-page success-container">
        <div className="success-card fade-in">
          <CheckCircle2 size={80} color="#22c55e" />
          <h1>Thank you!</h1>
          <p>We will contact you soon. Please visit our centre for more details.</p>
          <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admission-page">
      <section className="admission-hero">
        <div className="container">
          <h1>Admission <span>Process</span></h1>
          <p>Secure your future today. Fill out the form below to apply for your preferred course.</p>
        </div>
      </section>

      <section className="admission-content">
        <div className="container grid">
          <div className="admission-info">
            <div className="info-item">
              <ClipboardCheck size={32} color="var(--primary)" />
              <div>
                <h3>Step 1: Application</h3>
                <p>Fill the online application form with your details.</p>
              </div>
            </div>
            <div className="info-item">
              <ClipboardCheck size={32} color="var(--primary)" />
              <div>
                <h3>Step 2: Counselling</h3>
                <p>Our experts will call you for a brief counselling session.</p>
              </div>
            </div>
            <div className="info-item">
              <ClipboardCheck size={32} color="var(--primary)" />
              <div>
                <h3>Step 3: Enrollment</h3>
                <p>Visit the centre to complete the formalities and start learning.</p>
              </div>
            </div>

            <div className="google-form-box">
              <p>Prefer Google Forms?</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfD2x-3v-fJ6w4H8uY-uP_V8y0-xPzQ_zZ1rA/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Open Google Form <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <form className="admission-form" onSubmit={handleSubmit}>
            <h2>Application Form</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="+91 1234567890" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Selection</label>
              <select 
                id="course" 
                name="course" 
                required
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select a Course</option>
                <option value="typewriting">Typewriting (English/Hindi)</option>
                <option value="computer_basics">Computer Basics & MS Office</option>
                <option value="spoken_english">Spoken English</option>
                <option value="graphic_design">Graphic Designing</option>
                <option value="web_dev">Web Development</option>
                <option value="tally">Tally Prime with GST</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timing">Preferred Timing</label>
              <select 
                id="timing" 
                name="timing" 
                required
                value={formData.timing}
                onChange={handleChange}
              >
                <option value="">Select Timing</option>
                <option value="morning">Morning (8 AM - 11 AM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Submit Application <Send size={18} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admission;

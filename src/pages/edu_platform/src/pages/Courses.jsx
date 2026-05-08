import React from 'react';
import { Clock, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    title: "Typewriting (English/Hindi)",
    duration: "3 Months",
    description: "Master the art of fast and accurate typing with our specialized software and expert guidance.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800",
    category: "Vocational"
  },
  {
    id: 2,
    title: "Computer Basics & MS Office",
    duration: "6 Months",
    description: "Learn essential computer skills including Windows, Word, Excel, PowerPoint, and Internet usage.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    category: "Technology"
  },
  {
    id: 3,
    title: "Spoken English & Personality",
    duration: "4 Months",
    description: "Enhance your communication skills, fluency, and overall personality with interactive sessions.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    category: "Language"
  },
  {
    id: 4,
    title: "Graphic Designing",
    duration: "6 Months",
    description: "Learn Photoshop, Illustrator, and CorelDraw to create stunning visual content and designs.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    category: "Design"
  },
  {
    id: 5,
    title: "Web Development",
    duration: "8 Months",
    description: "Master HTML, CSS, JavaScript, and React to build modern and responsive websites.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    category: "Technology"
  },
  {
    id: 6,
    title: "Tally Prime with GST",
    duration: "4 Months",
    description: "Professional accounting course covering Tally Prime, GST filing, and financial management.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    category: "Accounting"
  }
];

const Courses = () => {
  return (
    <div className="courses-page">
      <section className="courses-header">
        <div className="container">
          <h1>Our <span>Courses</span></h1>
          <p>Explore our wide range of professional and vocational courses designed for your success.</p>
        </div>
      </section>

      <section className="courses-list">
        <div className="container">
          <div className="courses-grid">
            {coursesData.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <span className="course-category">{course.category}</span>
                </div>
                <div className="course-info">
                  <div className="course-meta">
                    <span className="meta-item"><Clock size={16} /> {course.duration}</span>
                    <span className="meta-item"><Book size={16} /> Certificate</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <Link to="/admission" className="course-link">
                    Apply Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

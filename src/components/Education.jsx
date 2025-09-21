import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title">
          <h2>My Education</h2>
          <p>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
        </div>

        <div className="education-container">
          <div className="education-item">
            <div className="education-image">
              <img src="/images/education/university.svg" alt="University" />
            </div>
            <div className="education-content">
              <h3>BSc. CSIT</h3>
              <p>Patan Multiple Campus, Tribhuvan University, Nepal</p>
              <p className="education-year">2020 - 2025</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-image">
              <img src="/images/education/highschool.svg" alt="High School" />
            </div>
            <div className="education-content">
              <h3>High School (10+2)</h3>
              <p>Advance Academy, Lalitpur, Nepal</p>
              <p className="education-year">2018 - 2020</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-image">
              <img src="/images/education/school.svg" alt="Secondary School" />
            </div>
            <div className="education-content">
              <h3>Secondary School (SEE)</h3>
              <p>Hill Side English Secondary School, Lalitpur, Nepal</p>
              <p className="education-year">2006 - 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
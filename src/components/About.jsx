import '../styles/About.css';

const About = () => {
  const skills = [
    { name: 'Python', percentage: 85 },
    { name: 'Odoo', percentage: 80 },
    { name: 'NumPy/Pandas', percentage: 75 },
    { name: 'Django', percentage: 70 },
    { name: 'JavaScript', percentage: 65 },
    { name: 'HTML/CSS', percentage: 70 },
    { name: 'XML', percentage: 75 },
    { name: 'Machine Learning', percentage: 65 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Learn more about my background and skills</p>
      </div>
      
      <div className="about-container">
        <div className="about-content">
          <h3 className="about-heading">
            BSc. CSIT graduate (awaiting results) with practical experience in Software development
          </h3>
          
          <p className="about-text">
            I have completed my BSc. CSIT degree at Tribhuvan University and am currently awaiting final results. 
            I bring practical experience in Odoo development, backend systems, and machine learning. Skilled in Python, 
            with hands-on knowledge of NumPy, Pandas, Matplotlib, and OpenCV.
          </p>
          
          <p className="about-text">
            Experienced in building and customizing ERP modules, developing ML models, and creating full-stack applications 
            using Django. I'm passionate about leveraging AI and software to solve real-world problems efficiently.
          </p>
          
          <p className="about-text">
            I studied at Tribhuvan University, Patan Multiple Campus in Kathmandu, Nepal, where I recently completed my 
            final semester of the BSc. CSIT program and am now awaiting results.
          </p>
          
          <div className="skills-container">
            <h4 className="skills-heading">My Skills</h4>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

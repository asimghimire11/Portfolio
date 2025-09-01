import '../styles/Hero.css';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="animated-text-container">
            <TypeAnimation
              sequence={[
                'H', 100,
                'Hi', 100,
                'Hi ', 100,
                'Hi I', 100,
                'Hi I ', 100,
                'Hi I a', 100,
                'Hi I am', 100,
                'Hi I am ', 100,
                'Hi I am A', 100,
                'Hi I am As', 100,
                'Hi I am Asi', 100,
                'Hi I am Asim', 100,
                'Hi I am Asim ', 100,
                'Hi I am Asim G', 100,
                'Hi I am Asim Gh', 100,
                'Hi I am Asim Ghi', 100,
                'Hi I am Asim Ghim', 100,
                'Hi I am Asim Ghimi', 100,
                'Hi I am Asim Ghimir', 100,
                'Hi I am Asim Ghimire', 1000,
                () => {
                  const element = document.querySelector('.animated-greeting');
                  element.classList.add('cursor-hidden');
                  return 'Hi I am Asim Ghimire';
                },
              ]}
              wrapper="span"
              speed={99}
              style={{ fontSize: '2rem', display: 'inline-block', color: 'rgba(255, 255, 255, 0.8)' }}
              repeat={0}
              cursor={false}
              className="animated-greeting"
            />
          </div>

          <div className="profession-container">
            <TypeAnimation
              sequence={[
                // Wait for the name to finish typing
                3500,
                'P', 100,
                'Py', 100,
                'Pyt', 100,
                'Pyth', 100,
                'Pytho', 100,
                'Python', 100,
                'Python ', 100,
                'Python D', 100,
                'Python De', 100,
                'Python Dev', 100,
                'Python Deve', 100,
                'Python Devel', 100,
                'Python Develo', 100,
                'Python Develop', 100,
                'Python Develope', 100,
                'Python Developer', 1000,
                () => {
                  const element = document.querySelector('.animated-profession');
                  element.classList.add('cursor-hidden');
                  return 'Python Developer';
                },
              ]}
              wrapper="span"
              speed={99}
              style={{ fontSize: '3.5rem', fontWeight: '700', color: '#ff6b00', display: 'inline-block' }}
              repeat={0}
              cursor={false}
              className="animated-profession"
            />
          </div>
          
          <div className="social-icons">
            <a href="mailto:ghimireasim3@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/asim-ghimire-68891829a/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/asimghimire11" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
          
          <div className="cta-buttons">
            <a href="#contact" className="hire-me-btn">Hire Me</a>
            <a href="#" className="download-cv-btn">Download Resume</a>
          </div>
        </div>
        
        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number">8th</h3>
            <p className="stat-text">Semester</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">4+</h3>
            <p className="stat-text">Projects</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">2+</h3>
            <p className="stat-text">Organizations</p>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <img src="/images/profile.svg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;

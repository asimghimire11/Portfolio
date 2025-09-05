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
                'S', 100,
                'So', 100,
                'Sof', 100,
                'Soft', 100,
                'Softw', 100,
                'Softwa', 100,
                'Softwar', 100,
                'Software', 100,
                'Software ', 100,
                'Software D', 100,
                'Software De', 100,
                'Software Dev', 100,
                'Software Deve', 100,
                'Software Devel', 100,
                'Software Develo', 100,
                'Software Develop', 100,
                'Software Develope', 100,
                'Software Developer', 1000,
                () => {
                  const element = document.querySelector('.animated-profession');
                  element.classList.add('cursor-hidden');
                  return 'Software Developer';
                },
              ]}
              wrapper="span"
              speed={99}
              style={{ fontWeight: '700', color: '#ff6b00', display: 'inline-block' }}
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
            <a
              href="/resume/Asim_Ghimire_Resume.pdf"
              download="Asim_Ghimire_Resume.pdf"
              className="download-cv-btn"
            >
              Download Resume
            </a>
          </div>

        </div>

        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number">Bachelor</h3>
            <p className="stat-text">Graduate</p>
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
        <img src="/images/profile.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;

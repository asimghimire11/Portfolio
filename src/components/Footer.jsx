import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">ASIM GHIMIRE</div>
        
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#portfolio" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/asimghimire11" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/asim-ghimire-68891829a/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">&copy; {currentYear} Asim Ghimire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'House Price Prediction',
      category: 'machine-learning',
      image: '/images/portfolio/project1.svg',
      link: 'https://github.com/asimghimire11/House-Price-Prediction',
      code: 'https://github.com/asimghimire11/House-Price-Prediction',
      description: 'Predict house prices using ML regression models.'
    },
    {
      id: 2,
      title: 'Customer Segmentation',
      category: 'machine-learning',
      image: '/images/portfolio/project2.svg',
      link: 'https://github.com/asimghimire11/Customer-Segmentation',
      code: 'https://github.com/asimghimire11/Customer-Segmentation',
      description: 'Segment customers based on spending behaviour.'
    },
    {
      id: 3,
      title: 'Python Basics Projects',
      category: 'python',
      image: '/images/portfolio/project3.svg',
      link: 'https://github.com/asimghimire11/Python-Basics',
      code: 'https://github.com/asimghimire11/Python-Basics',
      description: 'Small Python scripts and beginner friendly projects.'
    },
    {
      id: 4,
      title: 'MedifAI',
      category: 'full-stack',
      image: '/images/portfolio/project4.svg',
      link: 'https://github.com/asimghimire11/MedifAI-Project',
      code: 'https://github.com/asimghimire11/MedifAI-Project',
      description: 'Full-stack medical assistance web application.'
    },
    {
      id: 5,
      title: 'Odoo ERP Customization',
      category: 'odoo',
      image: '/images/portfolio/project5.svg',
      link: '#',
      code: '#',
      description: 'Customized Odoo ERP modules for business needs.'
    },
    {
      id: 6,
      title: 'Django Backend API',
      category: 'full-stack',
      image: '/images/portfolio/project6.svg',
      link: '#',
      code: '#',
      description: 'RESTful backend API built with Django.'
    }
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Check out some of my technical projects and contributions
        </p>
      </div>

      <div className="portfolio-filter">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            filter === 'machine-learning' ? 'active' : ''
          }`}
          onClick={() => setFilter('machine-learning')}
        >
          Machine Learning
        </button>
        <button
          className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
          onClick={() => setFilter('python')}
        >
          Python
        </button>
        <button
          className={`filter-btn ${filter === 'full-stack' ? 'active' : ''}`}
          onClick={() => setFilter('full-stack')}
        >
          Full Stack
        </button>
        <button
          className={`filter-btn ${filter === 'odoo' ? 'active' : ''}`}
          onClick={() => setFilter('odoo')}
        >
          Odoo
        </button>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />

              {/* Hover overlay card */}
              <div className="portfolio-overlay">
                <div className="overlay-card">
                  <h3 className="overlay-title">{project.title}</h3>
                  <p className="overlay-desc">{project.description}</p>
                  <div className="overlay-buttons">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn view-btn"
                    >
                      View
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn code-btn"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
              {/* end overlay */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

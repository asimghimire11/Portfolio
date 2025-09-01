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
      link: 'https://github.com/asimghimire11/House-Price-Prediction'
    },
    {
      id: 2,
      title: 'Customer Segmentation',
      category: 'machine-learning',
      image: '/images/portfolio/project2.svg',
      link: 'https://github.com/asimghimire11/Customer-Segmentation'
    },
    {
      id: 3,
      title: 'Python Basics Projects',
      category: 'python',
      image: '/images/portfolio/project3.svg',
      link: 'https://github.com/asimghimire11/Python-Basics'
    },
    {
      id: 4,
      title: 'MedifAI',
      category: 'full-stack',
      image: '/images/portfolio/project4.svg',
      link: 'https://github.com/asimghimire11/MedifAI-Project'
    },
    {
      id: 5,
      title: 'Odoo ERP Customization',
      category: 'odoo',
      image: '/images/portfolio/project5.svg',
      link: '#'
    },
    {
      id: 6,
      title: 'Django Backend API',
      category: 'full-stack',
      image: '/images/portfolio/project6.svg',
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my technical projects and contributions</p>
      </div>
      
      <div className="portfolio-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'machine-learning' ? 'active' : ''}`}
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
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{project.title}</h3>
                <a href={project.link} className="portfolio-link">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
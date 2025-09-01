import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Python Developer (Odoo)',
      company: 'Shangrila Informatics Pvt. Ltd.',
      period: 'Nov 2024 - Present',
      description:
        'As a Python Developer (Odoo), I design, develop, and customise Odoo modules to streamline business processes. My responsibilities include building backend logic with Python and the Odoo ORM, creating XML-based views, and implementing JavaScript features for improved user experience.',
    },
    {
      id: 2,
      title: 'Python Developer Intern(Odoo)',
      company: 'Shangrila Informatics Pvt. Ltd.',
      period: 'Aug 2024 - Oct 2024',
      description:
        'During my internship, I developed and customised Odoo modules to meet business requirements. I gained hands-on experience with Python, Odoo ORM, XML, and JavaScript for both backend functionality and UI modifications.',
    },
    {
      id: 3,
      title: 'Treasurer',
      company: 'Rotaract Club of Durbarmarg',
      period: 'for RY 2025/26',
      description:
        'Managing the financial operations of the club, including preparing budgets, executing financial plans, and ensuring transparent handling of funds for projects and events.',
    },
    {
      id: 4,
      title: 'Learning Facilitator',
      company: 'Rotaract Club of Durbarmarg',
      period: 'for RY 2024/25',
      description:
        'Facilitated professional and technical workshops for members, including sessions on skill development, awareness programmes, and career-oriented learning activities.',
    },
    {
      id: 5,
      title: 'General Member',
      company: 'Rotaract Club of Durbarmarg',
      period: 'for RY 2023/24',
      description:
        'Actively participated in club activities, service projects, and member engagement programmes, contributing to both community service and professional growth initiatives.',
    },
    {
      id: 6,
      title: 'General Member',
      company: 'Code for Change Kathmandu',
      period: 'for year 2024',
      description:
        'Contributed to open-source projects addressing local community challenges, collaborating with peers to create technology-driven solutions.',
    },
    {
      id: 7,
      title: 'General Member',
      company: 'CSIT Association of Nepal',
      period: '',
      description:
        'Engaged in technical workshops, events, and collaborative activities organised by the association to foster skill development and community involvement.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">My Experience</h2>
        <p className="section-subtitle">Professional journey and contributions</p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
            </div>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

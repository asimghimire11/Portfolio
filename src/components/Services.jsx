import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'fab fa-python',
      title: 'Odoo Development',
      description: 'Designing, developing, and customizing Odoo modules to meet business requirements.'
    },
    {
      id: 2,
      icon: 'fas fa-database',
      title: 'Backend Development',
      description: 'Building robust backend systems using Python, Django, and other technologies.'
    },
    {
      id: 3,
      icon: 'fas fa-brain',
      title: 'Machine Learning',
      description: 'Developing ML models using NumPy, Pandas, and other libraries for data analysis.'
    },
    {
      id: 4,
      icon: 'fas fa-code',
      title: 'Full-Stack Development',
      description: 'Creating end-to-end applications with Python backend and JavaScript frontend.'
    },
    {
      id: 5,
      icon: 'fas fa-laptop-code',
      title: 'ERP Customization',
      description: 'Customizing and extending ERP modules to optimize business processes.'
    },
    {
      id: 6,
      icon: 'fas fa-chalkboard-teacher',
      title: 'Technical Training',
      description: 'Providing training and facilitation in Python, Odoo, and related technologies.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">Here are the technical services I offer to help solve your business challenges</p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
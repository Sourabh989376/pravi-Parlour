function Services() {
  const services = [
    {
      icon: 'fas fa-cut',
      title: 'Hair Care',
      description: 'Complete hair styling, cutting, and treatment solutions for all hair types'
    },
    {
      icon: 'fas fa-spa',
      title: 'Skin Care',
      description: 'Rejuvenating facial treatments and advanced skincare therapies'
    },
    {
      icon: 'fas fa-hand-sparkles',
      title: 'Nail Care',
      description: 'Professional manicure, pedicure, and nail art services'
    },
    {
      icon: 'fas fa-palette',
      title: 'Makeup',
      description: 'Bridal makeup, party makeup, and special occasion styling'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Waxing',
      description: 'Smooth and professional hair removal services'
    },
    {
      icon: 'fas fa-magic',
      title: 'Hair Treatments',
      description: 'Hair straightening, coloring, and therapeutic treatments'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title font-playfair">
            Popular Services
          </h2>
          <p className="section-subtitle">
            Explore our most sought-after beauty and wellness treatments
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                <a href="#booking" className="btn-primary-custom mt-3">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
function About() {
  const features = [
    {
      icon: "fas fa-award",
      title: "Expert Professionals",
      description:
        "Our certified beauty experts have years of experience in the industry",
    },
    {
      icon: "fas fa-heart",
      title: "Premium Products",
      description:
        "We use only the finest, high-quality beauty products for all treatments",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safe & Hygienic",
      description:
        "Maintaining the highest standards of cleanliness and safety protocols",
    },
    {
      icon: "fas fa-clock",
      title: "Flexible Timing",
      description: "Convenient appointment slots to fit your busy schedule",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Founded",
      description:
        "Started our journey with a vision to redefine beauty standards",
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Opened multiple branches across different cities",
    },
    {
      year: "2022",
      title: "Recognition",
      description:
        'Awarded "Best Beauty Salon Chain" by Beauty Industry Awards',
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Launched online booking platform and premium services",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="section-title font-playfair text-start mb-4">
                About{" "}
                <span style={{ color: "#e91e63" }}>Pravi Beauty Parlour</span>
              </h2>
              <p
                className="text-muted mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Welcome to Pravi Beauty Parlour, where beauty meets excellence.
                Since 2018, we have been dedicated to enhancing your natural
                beauty through our comprehensive range of professional beauty
                services.
              </p>
              <p
                className="text-muted mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Our team of skilled professionals is committed to providing you
                with personalized care and exceptional service. We believe that
                every individual is unique, and our treatments are tailored to
                bring out your best features while ensuring your comfort and
                satisfaction.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="me-4">
                  <h4 className="fw-bold mb-1" style={{ color: "#e91e63" }}>
                    6+
                  </h4>
                  <p className="text-muted mb-0 small">Years of Excellence</p>
                </div>
                <div className="me-4">
                  <h4 className="fw-bold mb-1" style={{ color: "#e91e63" }}>
                    1000+
                  </h4>
                  <p className="text-muted mb-0 small">Happy Clients</p>
                </div>
                <div>
                  <h4 className="fw-bold mb-1" style={{ color: "#e91e63" }}>
                    50+
                  </h4>
                  <p className="text-muted mb-0 small">Services Offered</p>
                </div>
              </div>
              <a href="#booking" className="btn-primary-custom">
                <i className="fas fa-calendar-alt me-2"></i>
                Book Your Appointment
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image-grid">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Beauty Treatment"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="./src/components/images/blog-1.jpg"
                    alt="Skincare"
                    className="img-fluid rounded-3 shadow-sm mb-3"
                    style={{
                      height: "120px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <img
                    src="./src/components/images/service-img5.jpg"
                    alt="Hair Care"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{
                      height: "120px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3
              className="text-center font-playfair mb-5"
              style={{ fontSize: "2rem", color: "#2c2c2c" }}
            >
              Why Choose Us?
            </h3>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card text-center">
                <div className="feature-icon mb-3">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="fw-bold mb-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 mb-4">
            <div className="mission-card">
              <div className="d-flex align-items-center mb-3">
                <div className="mission-icon me-3">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h4 className="fw-bold mb-0">Our Mission</h4>
              </div>
              <p className="text-muted mb-0">
                To provide exceptional beauty and wellness services that enhance
                our clients' natural beauty, boost their confidence, and create
                memorable experiences through personalized care and professional
                expertise.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="vision-card">
              <div className="d-flex align-items-center mb-3">
                <div className="vision-icon me-3">
                  <i className="fas fa-eye"></i>
                </div>
                <h4 className="fw-bold mb-0">Our Vision</h4>
              </div>
              <p className="text-muted mb-0">
                To become the leading beauty destination that sets industry
                standards for quality, innovation, and customer satisfaction
                while empowering individuals to look and feel their absolute
                best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

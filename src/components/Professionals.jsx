function Professionals() {
  const professionals = [
    {
      name: "Shivani Mishra",
      specialty: "Hair Stylist & Makeup Artist",
      rating: 4.9,
      reviews: 127,
      image: "src/public/images/shibbu di.jpg",
      location: "Satna",
    },
    {
      name: "Anita Soni",
      specialty: "Skin Specialist",
      rating: 4.8,
      reviews: 98,
      image: "src/public/images/Artist.jpg",
      location: "Satna",
    },
    {
      name: "Saniya Tiwari",
      specialty: "Nail Artist",
      rating: 4.9,
      reviews: 156,
      image:
        "src/public/images/bitti.jpg",
      location: "Babupur Satna",
    },
  ];

  return (
    <section className="professionals-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title font-playfair">
            Book Our Professionals
          </h2>
          <p className="section-subtitle">
            Meet our expert team of beauty professionals ready to serve you
          </p>
        </div>

        <div className="row g-4">
          {professionals.map((professional, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="professional-card">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="professional-avatar"
                />
                <h5 className="fw-bold mb-1">{professional.name}</h5>
                <p className="text-muted mb-2">{professional.specialty}</p>

                <div className="rating-stars mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < Math.floor(professional.rating)
                          ? "text-warning"
                          : "text-muted"
                      }`}
                    ></i>
                  ))}
                  <span className="ms-2 text-muted small">
                    ({professional.reviews} reviews)
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-center mb-3 text-muted">
                  <i className="fas fa-map-marker-alt me-1"></i>
                  <small>{professional.location}</small>
                </div>

                <button className="btn-primary-custom">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Professionals;

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title font-playfair">
                DISCOVER THE
                <br />
                <span style={{ color: "#e91e63" }}>BEAUTY</span>
                <br />
                WITHIN YOU
              </h1>
              <p className="hero-subtitle">
                Transform your look with our professional beauty services.
                Experience luxury treatments that enhance your natural radiance
                and boost your confidence.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#booking" className="btn-primary-custom">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="btn btn-outline-dark rounded-pill px-4 py-2"
                >
                  <i className="fas fa-sparkles me-2"></i>
                  Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-video">
              <video autoPlay muted loop playsInline className="video-player">
                <source
                  src="./public/images/beauty-video8.mp4"
                  type="video/mp4"
                />
                <source src="./public/images/beauty-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">Pravi Beauty Parlour</h5>
            <p className="text-light mb-4">
              Your trusted partner for all beauty and wellness needs. We provide
              professional services that enhance your natural beauty and boost
              your confidence.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/shivani.tiwari.261140"
                className="text-light"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/pravi_parlour?igsh=MXY4Ymd2anMwOXo4OQ=="
                className="text-light"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home">Home</a>
              </li>
              <li className="mb-2">
                <a href="#services">Services</a>
              </li>
              <li className="mb-2">
                <a href="#booking">Book Now</a>
              </li>
              <li className="mb-2">
                <a href="#blog">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#services">Hair Care</a>
              </li>
              <li className="mb-2">
                <a href="#services">Skin Care</a>
              </li>
              <li className="mb-2">
                <a href="#services">Makeup</a>
              </li>
              <li className="mb-2">
                <a href="#services">Nail Care</a>
              </li>
              <li className="mb-2">
                <a href="#services">Bridal Package</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">Contact Info</h5>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-map-marker-alt me-3"></i>
              <a href="https://maps.app.goo.gl/6Xg4dUTCLdefcfM8A?g_st=ipc">
                Pravi Beauty Parlour, bank Colony Road, Satna Bus Stand MP
                485001{" "}
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-phone me-3"></i>
              <span>+91 8305021620</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope me-3"></i>
              <span>info@pravibeauty.com</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-clock me-3"></i>
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              © 2024 Pravi Beauty Parlour. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">
              Privacy Policy
            </a>
            <a href="#" className="me-3">
              Terms of Service
            </a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

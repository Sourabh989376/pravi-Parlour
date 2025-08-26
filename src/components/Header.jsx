import beauty2 from "../../public/images/beauty2.jpg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={beauty2} alt="Pravi Beauty" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#services"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu service">
                  <li>
                    <a className="dropdown-item" href="#services">
                      Bridal Makeup
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#services">
                      Hair Color
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#services">
                      Hair Straightening
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#services">
                      Facial Treatment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#services">
                      Nail Care
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search services..."
                aria-label="Search"
              />
              <button className="bton" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
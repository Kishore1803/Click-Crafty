import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black ps-4 pe-4">
      
      <Link className="navbar-brand fw-bold fs-4" to="/">
        Illus<span className="text-light">book</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown fs-5">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categories
            </a>

            <ul className="dropdown-menu bg-dark drop">
              <li><a className="dropdown-item text-light" href="#">Christmas</a></li>
              <li><a className="dropdown-item text-light" href="#">Festivals</a></li>
              <li><a className="dropdown-item text-light" href="#">Education</a></li>
              <li><a className="dropdown-item text-light" href="#">Technology</a></li>
              <li><a className="dropdown-item text-light" href="#">Business</a></li>
              <li><a className="dropdown-item text-light" href="#">People</a></li>
            </ul>
          </li>

          <li className="nav-item fs-5">
            <a className="nav-link" href="#">Collections</a>
          </li>

          <li className="nav-item fs-5">
            <a className="nav-link" href="#">
              AI Images <span className="badge bg-primary ms-1">New</span>
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ms-lg-auto align-items-lg-center mt-lg-0">
          <li className="nav-item me-lg-3 fs-5">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>

          <li className="nav-item fs-5">
            <button className="btn btn-outline-light">Log in</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
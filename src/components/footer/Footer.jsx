import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-light py-5">
      <div className="container">
        <div className="row g-4">

          {/* BRAND */}
          <div className="col-12 col-md-3">
            <h5>
              <span className="fw-bold fs-4">illusbook</span>
              <span className="fw-normal fs-6"> by Goodsketches</span>
            </h5>

            <p className="small">
              © 2025 Goodsketches. All Rights Reserved.
            </p>
          </div>

          {/* CATEGORIES */}
          <div className="col-6 col-md-2">
            <h6 className="text-secondary text-uppercase small">
              Categories
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Festival</li>
              <li className="mb-2">Education</li>
              <li className="mb-2">Technology</li>
              <li className="mb-2">Business</li>
              <li>People</li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div className="col-6 col-md-2">
            <h6 className="text-secondary text-uppercase small">
              Information
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/pricing" className="text-light text-decoration-none">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">Support</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* POLICIES */}
          <div className="col-6 col-md-3">
            <h6 className="text-secondary text-uppercase small">
              Policies
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Shipping Policy</li>
              <li className="mb-2">Cancellation & Refund</li>
              <li>Policy</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-6 col-md-2">
            <h6 className="text-secondary text-uppercase small">
              Get in Touch
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none"
                >
                  <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none"
                >
                  <i className="fa-brands fa-instagram me-2"></i>Instagram
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none"
                >
                  <i className="fa-brands fa-x-twitter me-2"></i>Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none"
                >
                  <i className="fa-brands fa-pinterest me-2"></i>Pinterest
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

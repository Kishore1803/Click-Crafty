import "./Home.css";
import Explore from "../explore/Explore";
import SearchBar from "../searchbar/SearchBar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <div className="home text-light">
        <div className="container py-4">

          {/* Holiday badge */}
          <div className="d-flex justify-content-center">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill border border-secondary bg-dark text-white">
              <span className="fw-medium">Holiday Sales</span>
              <span className="badge rounded-pill bg-warning text-dark px-2 py-2">
                Up to 80% OFF
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-4 text-center px-2">
            <h2 className="fw-bold responsive-title">
              Design Faster with Stunning Illustrations
            </h2>

            <p className="mt-2 text-secondary responsive-text">
              Use it on your landing pages, apps, or presentations — ready to
              go, right away.
            </p>

            {/* Search */}
            <div className="w-100 d-flex justify-content-center mt-3">
              <div className="search-wrapper">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BOX */}
      <div className="box d-flex justify-content-center text-center py-4 px-3">
        <div className="d-flex flex-column flex-md-row align-items-center gap-3 fs-5">
          <span>
            Start free with 3 daily downloads or Go Pro for unlimited access.
          </span>

          <div className="d-flex gap-3">
            <button
              className="btn btn-primary px-4"
              onClick={() => navigate("/pricing")}
            >
              Go Pro
            </button>

            <button className="btn btn-outline-dark px-4">
              Sign up for free
            </button>
          </div>
        </div>
      </div>

      <Explore />
    </>
  );
}

export default Home;

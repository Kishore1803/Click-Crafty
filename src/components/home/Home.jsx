import "./Home.css";
import Explore from "../explore/Explore";
import SearchBar from "../searchbar/SearchBar";

function Home() {
  return (
    <>
      <div className="home text-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill border border-secondary bg-dark text-white">
              <a className="text-decoration-none" href="#" role="button">
                <span className="text-light fw-medium">Holiday Sales</span>
                <span className="badge rounded-pill bg-warning text-dark ms-2 px-2 py-2">
                  Up to 80% OFF
                </span>
              </a>
            </div>
          </div>

          <div
            className="container mt-3 d-flex flex-column align-items-center justify-content-center"
          >
            <h2>Design Faster with Stunning Illustrations</h2>
            <p>
              Use it on your landing pages, apps, or presentations — ready to
              go, right away.
            </p>

            <SearchBar />

          </div>
        </div>
      </div>

      {/* box */}

      <div className="box d-flex justify-content-center text-center pt-3 fs-5">
        <p>
          Start free with 3 daily downloads or Go Pro for unlimited access.
          <button className="btn btn-primary ms-4">
            <a href="" className="text-decoration-none text-light w-100 w-md-auto">
              Go Pro
            </a>
          </button>
          <button className="btn border-dark outline-light ms-4">
            <a href="" className="text-decoration-none text-dark w-100 w-md-auto">
              Sign up for free
            </a>
          </button>
        </p>
      </div>

      <Explore />
    </>
  );
}

export default Home;

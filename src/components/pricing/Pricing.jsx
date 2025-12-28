import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  const activatePro = () => {
    // ✅ Save pro access
    if (localStorage.getItem("isProUser") !== "true") {
      localStorage.setItem("isProUser", "true");
    } 
    else
    {
      alert("You are already a Pro user!");
    }
    // 👉 Redirect back to gallery
    navigate("/gallery");
  };

  return (
    <>
      <div className="pt-5 text-center plan">
        <h1 style={{ fontSize: "50px" }}>Pick your plan</h1>
      </div>

      <div className="container text-center text-secondary fs-5">
        <p>
          Choose a plan that fits your creative needs — download beautiful
          <br />
          illustrations with ease and power your projects with premium assets.
        </p>
      </div>

      <div className="container my-5">
        <div className="row g-4 justify-content-center">

          {/* FREE PLAN */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 p-4 rounded-4 border">
              <h2 className="fw-bold mb-2">Free</h2>
              <p className="text-muted">
                Get PNG downloads for personal and non-commercial use.
              </p>

              <h1>
                ₹ 0 <span>/mo</span>
              </h1>

              <ul className="list-unstyled fs-5">
                <li className="mb-3">✅ Limited downloads</li>
                <li className="mb-3">✅ No Commercial Use</li>
                <li className="mb-3">✅ Download PNG for Illustrations</li>
                <li className="mb-3">
                  ✅ Download AI Images
                  <span className="badge bg-primary rounded-pill ms-2 p-2">
                    New
                  </span>
                </li>
                <li className="mb-3">✅ No custom illustration requests</li>
                <li className="mb-4">✅ Community Email</li>
              </ul>

              <button className="btn btn-outline-dark w-100 py-3 mt-auto">
                Get Started
              </button>
            </div>
          </div>

          {/* PRO PLAN */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 p-4 rounded-4 border">
              <h2 className="fw-bold mb-2">Pro</h2>

              <p className="text-muted">
                Access all formats and unlock full commercial rights.
              </p>

              <del className="text-muted fs-4 mb-1">₹499</del>

              <div className="d-flex align-items-center gap-3 mb-4">
                <h1 className="fw-bold mb-0">
                  ₹ 99 <span className="fs-4 fw-normal">/mo</span>
                </h1>

                <span className="badge rounded-pill bg-warning text-dark px-3 py-2">
                  Up to 80% OFF
                </span>
              </div>

              <ul className="list-unstyled fs-5">
                <li className="mb-3">✅ Unlimited downloads</li>
                <li className="mb-3">✅ Allow commercial use</li>
                <li className="mb-3">✅ Download PNG, SVG, EPS, AI</li>
                <li className="mb-3">
                  ✅ Download AI Images
                  <span className="badge bg-primary rounded-pill ms-2">
                    New
                  </span>
                </li>
                <li className="mb-3">✅ Custom illustration requests</li>
                <li className="mb-4">✅ Priority Email Support</li>
              </ul>

              {/* 🔥 PRO ACTIVATION BUTTON */}
              <button
                className="btn btn-primary w-100 py-3 fw-semibold mt-auto"
                onClick={activatePro}
              >
                Get Pro
              </button>
            </div>
          </div>
        </div>

        {/* COMPARE PLANS */}
        <div className="container my-5">
          <h1 className="text-center fw-bold mb-5">Compare plans</h1>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="border-bottom">
                  <th></th>
                  <th className="text-center fs-5 fw-semibold">Free</th>
                  <th className="text-center fs-5 fw-semibold">Pro</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="fw-semibold py-4">Daily Download Limit</td>
                  <td className="text-center py-4">3 downloads/day</td>
                  <td className="text-center py-4">Unlimited</td>
                </tr>

                <tr>
                  <td className="fw-semibold py-4">
                    Commercial Use License
                  </td>
                  <td className="text-center py-4">No</td>
                  <td className="text-center py-4">Yes</td>
                </tr>

                <tr>
                  <td className="fw-semibold py-4">Download Formats</td>
                  <td className="text-center py-4">PNG only</td>
                  <td className="text-center py-4">
                    PNG, SVG, EPS, AI
                  </td>
                </tr>

                <tr>
                  <td className="fw-semibold py-4">
                    Custom illustration requests
                  </td>
                  <td className="text-center py-4">No</td>
                  <td className="text-center py-4">Yes</td>
                </tr>

                <tr>
                  <td className="fw-semibold py-4">Support</td>
                  <td className="text-center py-4">
                    Community Email
                  </td>
                  <td className="text-center py-4">
                    Priority Email Support
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;

import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  const images = [
    { id: 1, src: "/event1.jpg", pro: true },
    { id: 2, src: "/event2.jpg", pro: false },
    { id: 3, src: "/event3.jpg", pro: false },
    { id: 4, src: "/event4.jpg", pro: true },
    { id: 5, src: "/event2.jpg", pro: false },
    { id: 6, src: "/event1.jpg", pro: true },
    { id: 7, src: "/event4.jpg", pro: false },
    { id: 8, src: "/event3.jpg", pro: true },
  ];

  return (
    <div className="container mt-3 mb-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold mb-0">Explore Illustrations</h4>

        <div className="d-flex gap-2">
          <span className="px-3 py-1 rounded bg-secondary text-light fw-medium">
            Recent
          </span>
          <span className="px-3 py-1 rounded bg-light text-muted fw-medium">
            Popular
          </span>
        </div>
      </div>

      <div className="row mt-3 g-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div
              role="button"
              onClick={() => navigate(`/gallery/${img.id}`)}
              className="position-relative border rounded-4 p-3 bg-white h-100"
            >

              {img.pro && (
                <span
                  className="position-absolute top-0 start-0 m-3 px-2 py-1 bg-dark text-white rounded small fw-semibold"
                >
                  Pro
                </span>
              )}

              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center  rounded-3"
              >
                <img
                  src={img.src}
                  alt={`event-${img.id}`}
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
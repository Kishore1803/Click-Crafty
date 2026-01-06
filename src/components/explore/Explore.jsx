import { useNavigate, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";

function Explore() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Category from Navbar
  const category = searchParams.get("category") || "all";

  // Tab state
  const [tab, setTab] = useState("recent"); // recent | popular

  const images = [
    // 🎄 Christmas
    { id: 1, src: "/event1.jpg", pro: true, category: "christmas", popular: true },
    { id: 2, src: "/event2.jpg", pro: false, category: "christmas", popular: false },
    { id: 3, src: "/event3.jpg", pro: false, category: "christmas", popular: true },
    { id: 4, src: "/event4.jpg", pro: true, category: "christmas", popular: false },

    // 🎉 Festivals
    { id: 5, src: "/event4.jpg", pro: false, category: "festivals", popular: true },
    { id: 6, src: "/event3.jpg", pro: true, category: "festivals", popular: false },
    { id: 7, src: "/event1.jpg", pro: false, category: "festivals", popular: true },
    { id: 8, src: "/event2.jpg", pro: true, category: "festivals", popular: false },

    // 🎓 Education
    { id: 9, src: "/event2.jpg", pro: false, category: "education", popular: true },
    { id: 10, src: "/event3.jpg", pro: true, category: "education", popular: false },
    { id: 11, src: "/event4.jpg", pro: true, category: "education", popular: true },
    { id: 12, src: "/event1.jpg", pro: false, category: "education", popular: false },

    // 💻 Technology
    { id: 13, src: "/event1.jpg", pro: true, category: "technology", popular: true },
    { id: 14, src: "/event2.jpg", pro: false, category: "technology", popular: false },
    { id: 15, src: "/event3.jpg", pro: true, category: "technology", popular: true },
    { id: 16, src: "/event4.jpg", pro: false, category: "technology", popular: false },

    // 💼 Business
    { id: 17, src: "/event2.jpg", pro: false, category: "business", popular: true },
    { id: 18, src: "/event4.jpg", pro: true, category: "business", popular: false },
    { id: 19, src: "/event3.jpg", pro: false, category: "business", popular: true },
    { id: 20, src: "/event1.jpg", pro: true, category: "business", popular: false },

    // 👥 People
    { id: 21, src: "/event4.jpg", pro: false, category: "people", popular: true },
    { id: 22, src: "/event2.jpg", pro: true, category: "people", popular: false },
    { id: 23, src: "/event3.jpg", pro: false, category: "people", popular: true },
    { id: 24, src: "/event1.jpg", pro: true, category: "people", popular: false }
  ];

  // 🔹 Filter only when tab/category changes
  const filteredImages = useMemo(() => {
    let data = [...images];

    // Category filter (from Navbar)
    if (category !== "all") {
      data = data.filter((img) => img.category === category);
    }

    // Popular tab filter
    if (tab === "popular") {
      data = data.filter((img) => img.popular);
    }

    return data;
  }, [category, tab]);

  return (
    <div className="container mt-4 mb-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold text-capitalize">
          {category === "all" ? "Explore Illustrations" : category}
        </h4>

        {/* Tabs */}
        <div className="d-flex gap-2">
          <span
            role="button"
            onClick={() => setTab("recent")}
            className={`px-3 py-1 rounded fw-medium ${
              tab === "recent"
                ? "bg-secondary text-light"
                : "bg-light text-muted"
            }`}
          >
            Recent
          </span>

          <span
            role="button"
            onClick={() => setTab("popular")}
            className={`px-3 py-1 rounded fw-medium ${
              tab === "popular"
                ? "bg-secondary text-light"
                : "bg-light text-muted"
            }`}
          >
            Popular
          </span>
        </div>
      </div>

      {/* Images Grid */}
      <div className="row mt-3 g-4">
        {filteredImages.map((img) => (
          <div key={img.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              role="button"
              onClick={() => navigate(`/gallery/${img.id}`)}
              className="position-relative border rounded-4 p-3 bg-white h-100"
            >
              {img.pro && (
                <span className="position-absolute top-0 start-0 m-3 px-2 py-1 bg-dark text-white rounded small fw-semibold">
                  Pro
                </span>
              )}

              <img
                src={img.src}
                alt={`event-${img.id}`}
                className="w-100 rounded-3"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Explore;

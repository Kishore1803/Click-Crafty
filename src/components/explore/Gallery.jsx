import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🔹 SAME IMAGE DATA AS EXPLORE
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
  // 🔹 Pro user check
  const [isProUser, setIsProUser] = useState(false);

  useEffect(() => {
    setIsProUser(localStorage.getItem("isProUser") === "true");
  }, []);

  // 🔹 Selected image from URL
  const selectedImage = useMemo(() => {
    return images.find((img) => img.id === Number(id)) || images[0];
  }, [id]);

  // 🔹 FULL LIST (exclude selected image)
  const restImages = useMemo(() => {
    return images.filter((img) => img.id !== selectedImage.id);
  }, [selectedImage]);

  // 🔹 Thumbnail click
  const handleImageClick = (img) => {
    if (img.pro && !isProUser) {
      navigate("/pricing");
    } else {
      navigate(`/gallery/${img.id}`);
    }
  };

  // 🔹 Download logic
  const handleDownload = () => {
    if (selectedImage.pro && !isProUser) {
      navigate("/pricing");
      return;
    }

    const link = document.createElement("a");
    link.href = selectedImage.src;
    link.download = "image";
    link.click();
  };

  return (
    <div className="container mt-4 mb-4">

      {/* ✅ SELECTED IMAGE */}
      <div className="d-flex justify-content-center">
        <div
          className="position-relative border rounded-4 p-3 shadow"
          style={{ width: "520px", height: "320px" }}
        >
          {selectedImage.pro && (
            <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-dark text-white rounded-pill small fw-semibold">
              PRO
            </span>
          )}

          <button
            onClick={handleDownload}
            className="position-absolute top-0 end-0 m-3 btn btn-light btn-sm shadow"
            title="Download"
          >
            <i className="fa-solid fa-download"></i>
          </button>

          <img
            src={selectedImage.src}
            alt="selected"
            className="w-100 h-100 rounded-3"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* ✅ FULL IMAGE LIST */}
      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        {restImages.map((img) => (
          <div
            key={img.id}
            onClick={() => handleImageClick(img)}
            className="position-relative border rounded-4 p-2 shadow-sm"
            style={{ width: "200px", height: "140px" }}
            role="button"
          >
            {img.pro && (
              <span className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-dark text-white rounded small fw-semibold">
                PRO
              </span>
            )}

            <img
              src={img.src}
              alt=""
              className={`w-100 h-100 rounded-3 ${img.pro && !isProUser ? "opacity-50" : ""
                }`}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
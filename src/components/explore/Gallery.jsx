import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Gallery() {
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

  // Default selected image (FREE)
  const [selectedImage, setSelectedImage] = useState(images[1]);
  const [isProUser, setIsProUser] = useState(false);

  // Check pro status
  useEffect(() => {
    setIsProUser(localStorage.getItem("isProUser") === "true");
  }, []);

  const restImages = images.filter(
    (img) => img.id !== selectedImage.id
  );

  // Bottom image click
  const handleImageClick = (img) => {
    if (img.pro && !isProUser) {
      navigate("/pricing");
    } else {
      setSelectedImage(img);
    }
  };

  // Download logic
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
    <div className="container mt-4">

      {/* SELECTED IMAGE */}
      <div className="d-flex justify-content-center">
        <div
          className="position-relative border rounded-4 p-3 shadow"
          style={{ width: "500px", height: "300px" }}
        >
          {/* PRO BADGE */}
          {selectedImage.pro && (
            <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-dark text-white rounded-pill small fw-semibold">
              PRO
            </span>
          )}

          {/* DOWNLOAD BUTTON */}
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

      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        {restImages.map((img) => (
          <div
            key={img.id}
            onClick={() => handleImageClick(img)}
            className="position-relative border rounded-4 p-2 shadow-sm"
            style={{ width: "200px", height: "140px", cursor: "pointer" }}
          >
            {/* PRO BADGE */}
            {img.pro && (
              <span className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-dark text-white rounded small fw-semibold">
                PRO
              </span>
            )}

            <img
              src={img.src}
              alt=""
              className={`w-100 h-100 rounded-3 ${
                img.pro && !isProUser ? "opacity-50" : ""
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

import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [selected, setSelected] = useState("Illustration");

  const placeholderMap = {
    Illustration: "Search for illustrations",
    Collections: "Search for collections",
    "AI Images": "Search for AI images",
  };

  return (
    <div className="search-pill d-flex align-items-center rounded shadow bg-white px-2">
      
      {/* Dropdown (hidden on mobile) */}
      <div className="dropdown d-none d-md-block">
        <button
          className="btn dropdown-toggle border-0 fw-medium"
          type="button"
          data-bs-toggle="dropdown"
        >
          {selected}
        </button>

        <ul className="dropdown-menu">
          {Object.keys(placeholderMap).map((item) => (
            <li key={item}>
              <button
                className="dropdown-item"
                onClick={() => setSelected(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Input */}
      <input
        type="text"
        className="form-control border-0 shadow-none search-input"
        placeholder={placeholderMap[selected]}
      />

      {/* Search Icon */}
      <button className="btn border-0">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;

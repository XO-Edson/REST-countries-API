import React, { useState } from "react";

export const Home = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <div className="search-bar">
      <input type="text" name="search" placeholder="Search for a country..." />
      <div className="dropdown-menu">
        <button onClick={toggleDropdown}>Filter by region</button>
        <div
          className="menu-items"
          style={{ display: show ? "block" : "none" }}
        >
          <p>Africa</p>
          <p>Africa</p>
          <p>Africa</p>
          <p>Africa</p>
        </div>
      </div>
    </div>
  );
};

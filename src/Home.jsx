import React, { useState } from "react";
import { Country } from "./Country";
import { CountryDetails } from "./CountryDetails";

export const Home = ({ data }) => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
        />
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

      <div className="countries-container">
        {data.map((countryInfo) => (
          <Country key={countryInfo.name.common} countryInfo={countryInfo} />
        ))}
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import { Country } from "./Country";

export const Home = ({ data }) => {
  const [show, setShow] = useState(false);
  const [region, setRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredResults = data.filter((countryInfo) =>
      countryInfo.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(filteredResults);
  }, [searchQuery, data]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
    setShow(false);
  };

  const toggleDropdown = () => {
    setShow(!show);
  };

  const filterCountries = () => {
    if (searchQuery) {
      const searchResults = data.filter((countryInfo) =>
        countryInfo.name.common
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );

      return searchResults.filter(
        (countryInfo) => region === "" || countryInfo.region === region
      );
    } else {
      return data.filter(
        (countryInfo) => region === "" || countryInfo.region === region
      );
    }
  };

  const filteredCountries = filterCountries();

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="dropdown-menu">
          <button onClick={toggleDropdown}>Filter by region</button>
          <div
            className="menu-items"
            style={{ display: show ? "block" : "none" }}
          >
            <li onClick={() => handleRegionChange("Europe")}>Europe</li>
            <li onClick={() => handleRegionChange("Africa")}>Africa</li>
            <li onClick={() => handleRegionChange("Asia")}>Asia</li>
            <li onClick={() => handleRegionChange("Americas")}>Americas</li>
            <li onClick={() => handleRegionChange("Oceania")}>Oceania</li>
          </div>
        </div>
      </div>

      <div className="countries-container">
        {filteredCountries.map((countryInfo, index) => (
          <Country key={index} countryInfo={countryInfo} />
        ))}
      </div>
    </>
  );
};

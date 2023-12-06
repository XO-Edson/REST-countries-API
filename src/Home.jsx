import React, { useState, useEffect } from "react";
import { Country } from "./Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Home = ({ data, darkMode }) => {
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
        <div className="input-with-icon">
          <input
            className={!darkMode ? "light" : ""}
            type="text"
            name="search"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="input-icon" />
        </div>

        <div className="dropdown-menu">
          <button onClick={toggleDropdown} className={!darkMode ? "light" : ""}>
            Filter by region
          </button>
          <div
            className={`menu-items ${!darkMode ? "light" : ""}`}
            style={{ display: show ? "block" : "none" }}
          >
            <li
              onClick={() => handleRegionChange("Europe")}
              className={!darkMode ? "light" : ""}
            >
              Europe
            </li>
            <li
              onClick={() => handleRegionChange("Africa")}
              className={!darkMode ? "light" : ""}
            >
              Africa
            </li>
            <li
              onClick={() => handleRegionChange("Asia")}
              className={!darkMode ? "light" : ""}
            >
              Asia
            </li>
            <li
              onClick={() => handleRegionChange("Americas")}
              className={!darkMode ? "light" : ""}
            >
              Americas
            </li>
            <li
              onClick={() => handleRegionChange("Oceania")}
              className={!darkMode ? "light" : ""}
            >
              Oceania
            </li>
          </div>
        </div>
      </div>

      <div className="countries-container">
        {filteredCountries.map((countryInfo, index) => (
          <Country key={index} countryInfo={countryInfo} darkMode={darkMode} />
        ))}
      </div>
    </>
  );
};

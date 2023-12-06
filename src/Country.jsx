import React from "react";
import { Link } from "react-router-dom";

export const Country = ({ countryInfo, darkMode }) => {
  return (
    <Link to={`/countryDetails/${countryInfo.name.common}`}>
      <div
        className={`country ${!darkMode ? "light" : ""}`}
        key={countryInfo.name.common}
      >
        <img src={countryInfo.flags.png} alt={countryInfo.name.common} />
        <div className="country-info">
          <h2>{countryInfo.name.common}</h2>
          <p>
            <span className="bold">Population: </span>
            {countryInfo.population}
          </p>
          <p>
            <span className="bold">Region: </span>
            {countryInfo.region}
          </p>
          <p>
            <span className="bold">Capital:</span> {countryInfo.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

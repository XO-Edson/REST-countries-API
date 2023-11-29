import React from "react";
import { Link } from "react-router-dom";

export const Country = ({ countryInfo }) => {
  return (
    <Link to="/CountryDetails">
      <div className="country" key={countryInfo.name.common}>
        <img src={countryInfo.flags.png} alt={countryInfo.name.common} />
        <div className="country-info">
          <h2>{countryInfo.name.common}</h2>
          <p>Population: {countryInfo.population}</p>
          <p>Region: {countryInfo.region}</p>
          <p>Capital: {countryInfo.capital}</p>
        </div>
      </div>
    </Link>
  );
};

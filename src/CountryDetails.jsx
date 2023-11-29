import React from "react";
import { useParams } from "react-router-dom";

export const CountryDetails = ({ data }) => {
  const { name } = useParams();
  const countryInfo = data.find((country) => country.name.common === name);
  console.log(countryInfo);

  // You can check if countryInfo exists before rendering
  if (!countryInfo) {
    return <div>Loading...</div>; // or handle not found scenario
  }

  return (
    <div className="Country-details">
      <img src={countryInfo.flags.png} alt={countryInfo.name.common} />
      <div>
        <h2>{countryInfo.name.common}</h2>

        <p>Population: {countryInfo.population}</p>
        <p>Region: {countryInfo.region}</p>
        <p>Capital: {countryInfo.capital}</p>
      </div>
    </div>
  );
};

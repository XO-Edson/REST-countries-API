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
    <>
      <div className="search-bar">
        <button>Back</button>
      </div>
      <div className="country-details">
        <img src={countryInfo.flags.png} alt={countryInfo.name.common} />

        <div>
          <h2>{countryInfo.name.common}</h2>

          <p>Native Name: {}</p>
          <p>Population: {countryInfo.population}</p>
          <p>Region: {countryInfo.region}</p>
          <p>Sub Region:{countryInfo.subregion}</p>
          <p>Capital:{countryInfo.capital}</p>
          <p>Top Level Domain:{countryInfo.tld}</p>
          {/*   <p>Currencies: {countryInfo.currencies.EUR.name}</p> */}
          <p>Languages:{countryInfo.languages.est}</p>

          <div className="borders">
            <ul>
              <p>Border Countries:</p>
              {countryInfo.borders.map((borderCountry, index) => (
                <li key={index}>{borderCountry}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

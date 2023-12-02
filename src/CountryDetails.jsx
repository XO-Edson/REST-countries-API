import React from "react";
import { Link, useParams } from "react-router-dom";

export const CountryDetails = ({ data }) => {
  const { name } = useParams();
  const countryInfo = data.find((country) => country.name.common === name);
  console.log(countryInfo);

  // You can check if countryInfo exists before rendering
  if (!countryInfo) {
    return <div>Loading...</div>; // or handle not found scenario
  }

  function getNativeName() {
    let nativeName = null;

    for (const key in countryInfo.name.nativeName) {
      if (countryInfo.name.nativeName[key].common) {
        nativeName = countryInfo.name.nativeName[key].common;
      }
    }
    return nativeName;
  }

  function getCurrency() {
    let currency;

    for (const key in countryInfo.currencies) {
      if (countryInfo.currencies[key].name) {
        currency = countryInfo.currencies[key].name;
      }
    }
    return currency;
  }

  function getlanguages() {
    const languages = countryInfo.languages;

    const languageNames = Object.values(languages);

    const languagesString = languageNames.join(", ");

    return languagesString;
  }

  return (
    <>
      <div className="search-bar">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="country-details">
        <img src={countryInfo.flags.png} alt={countryInfo.name.common} />

        <div>
          <h2>{countryInfo.name.common}</h2>

          <p>Native Name : {getNativeName()}</p>
          <p>Population : {countryInfo.population}</p>
          <p>Region : {countryInfo.region}</p>
          <p>Sub Region :{countryInfo.subregion}</p>
          <p>Capital :{countryInfo.capital}</p>
          <p>Top Level Domain :{countryInfo.tld}</p>
          <p>Currencies : {getCurrency()}</p>
          <p>Languages :{getlanguages()}</p>

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

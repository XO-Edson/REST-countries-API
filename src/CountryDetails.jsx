import React from "react";
import { Link, useParams } from "react-router-dom";

export const CountryDetails = ({ data, darkMode }) => {
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
          <button className={!darkMode ? "light" : ""}>Back</button>
        </Link>
      </div>
      <div className="country-details">
        <img src={countryInfo.flags.png} alt={countryInfo.name.common} />

        <div>
          <h2>{countryInfo.name.common}</h2>

          <div className="details-info">
            <div>
              <p>
                <span className="bold">Native Name : </span> {getNativeName()}
              </p>
              <p>
                <span className="bold">Population :</span>{" "}
                {countryInfo.population}
              </p>
              <p>
                <span className="bold">Region :</span> {countryInfo.region}
              </p>
              <p>
                <span className="bold">Sub Region :</span>
                {countryInfo.subregion}
              </p>
              <p>
                <span className="bold">Capital :</span>
                {countryInfo.capital}
              </p>
            </div>

            <div>
              <p>
                <span className="bold">Top Level Domain :</span>
                {countryInfo.tld}
              </p>
              <p>
                <span className="bold">Currencies :</span> {getCurrency()}
              </p>
              <p>
                <span className="bold">Languages :</span>
                {getlanguages()}
              </p>
            </div>
          </div>

          <div className="borders">
            <ul>
              <h4>Border Countries:</h4>
              {countryInfo.borders.map((borderCountry, index) => (
                <li key={index} className={!darkMode ? "light" : ""}>
                  {borderCountry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

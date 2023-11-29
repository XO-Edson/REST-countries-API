import { useEffect, useState } from "react";
import { Country } from "./Country";
import { Header } from "./Header";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import { CountryDetails } from "./CountryDetails";

function App() {
  const [data, setData] = useState([]);
  const API =
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,languages,capital,borders,tld,currencies";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home data={data} />} />

        <Route
          path="/CountryDetails/:name"
          element={<CountryDetails data={data} />}
        />
        <Route path="*" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;

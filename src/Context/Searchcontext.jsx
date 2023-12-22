import React, { Children, createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searched, setSearched] = useState("");
  const [searcheds, setSearcheds] = useState([]);
  const [Data, setData] = useState([]);

  // =======================================================

  function handleSearch(e) {
    e.preventDefault();

    setSearched("");
    getSong(searched);
  }
  // =========================================================
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "66be40c665mshded91bc42ecca4bp1a43c7jsna966caef2747",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };
  // =====================================================================
  async function getSong(searched) {
    try {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${searched}type=multi&offset=0&limit=25&numberOfTopResults=5`;
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.artists.items)
      console.log(result);


      setSearcheds(result.tracks.items);
    } catch (error) {
      console.error(error);
    }
  }

  const data = {
    handleSearch,
    searcheds,
    setSearched,
    Data,
  };
  return (
    <>
      <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    </>
  );
}

export default SearchProvider;

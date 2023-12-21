import {  useState } from "react";

function App() {
  
  const [searched, setSearched] = useState("");
  const [searcheds, setSearcheds] = useState([]);

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
      const url = `https://spotify23.p.rapidapi.com/search/?q=${searched}type=multi&offset=0&limit=20&numberOfTopResults=5`;
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSearcheds(result.tracks.items)
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <p>Spotify </p>
      <form onSubmit={handleSearch}>
        <input
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
          type="text"
        />
        <button>search</button>
      </form>
      {searcheds.map((song,i)=>(
        <>
        <div key={i}>
          <h2>{song.data.name}</h2>

        </div>
        
        </>

      ))}
    </>
  );
}

export default App;

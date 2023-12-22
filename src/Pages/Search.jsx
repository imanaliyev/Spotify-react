import React, { useContext } from "react";
import { SearchContext } from "../Context/Searchcontext";

function Search() {
  const { handleSearch, searched, searcheds, setSearched,Data } =
    useContext(SearchContext);
    console.log(Data);
  return (
    <section id="search">
      <div className="search-top">
        <div className="arrows">
          <div className="arrow">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div className="arrow">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <form onSubmit={handleSearch}>
            <input
              placeholder="What do you want to listen?"
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
              type="text"
            />
          </form>
        </div>
        <div className="explore">
          <button>
            <i class="fa-regular fa-circle-down"></i> Install App
          </button>
          <div className="bell">
            <i class="fa-regular fa-bell"></i>
          </div>
          <div className="user">
            <i class="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
      <div className="browse-all">
        <h1>Browse all</h1>
       
        <div className="artists">
        
           
            {Data.slice(0,12).map((x,i)=>(
                <>
                <div className="artist-photo">
                <img key={i} src={x.data?.visuals?.avatarImage?.sources[0]?.url} alt="" />
                <div className="underline"></div>
                </div>
                 
                </>
              
            ))}

        </div>
     
        <div className="songs">
          {searcheds.map((song, i) => (
          
            <>
              <div className="card" key={i}>
                <img className="card-img" src={song.data?.albumOfTrack?.coverArt?.sources[0]?.url} />
                <p>{song.data.name}</p>
                <p>{song.data?.artists?.items[0]?.profile.name}</p>
               
                <div className="play">
                <i class="fa-solid fa-play"></i>
                </div>

               
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;

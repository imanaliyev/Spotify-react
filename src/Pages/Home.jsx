import { useContext, useState } from "react";
import { SearchContext } from "../Context/Searchcontext";
import MusicPlayer from "../Components/MusicPlayer/MusicPlayer";
import mp3 from "../Assets/music/myTrck.mp3"



function Home() {
  const {Data,searcheds} = useContext(SearchContext)

  const audioTrack = mp3;
 

  return (
    <>
      <div id="all">
        <section id="hero">
          <div className="hero-top">
            <div className="arrows">
              <div className="arrow">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div className="arrow">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div className="explore">
              <button>Eplore Premium</button>
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
          <h1>Good afternoon</h1>
          <div className="hero-bottom">

          </div>
        </section>
        <section id="top-mixes">
       
        


        </section>
        <MusicPlayer audioTrack={audioTrack}></MusicPlayer>
        
     
       
      </div>
  
    </> 
  );
}

export default Home;

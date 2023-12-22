import React, { useContext } from 'react'
import { SearchContext } from '../Context/Searchcontext'
import { Link } from 'react-router-dom'




function Nav() {



    const {} = useContext(SearchContext)
  return (
    <>
    <header>
        <nav>
            <Link to={"/"}>  <div className="home-nav">
            <i class="fa-solid fa-house"></i>  <h2> Home</h2>

            </div></Link>
          
            <Link to={"/search"}><div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>  <h2>Search</h2>
            </div></Link>
          
            
          
          
            

            <div className="your-library">
                <div className="left">
                <i class="fa-solid fa-layer-group"></i>
                <p>Your Library</p>
                </div>
                <div className="right">
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>
            <div className="buttons">
                <button>Playlists</button>
                <button>Artists</button>
            </div>
            <div className="search-playlist">
                <div className="hover-search">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            
            <div className="recents">
                <p>recents</p>
                <i class="fa-solid fa-bars"></i>


            </div>
            </div>

     

        </nav>
        <div className="playlists">

        </div>
      
    </header>

    
    </>
  )
}

export default Nav
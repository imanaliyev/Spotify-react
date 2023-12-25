import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MainLayout from './Layout/MainLayout'

import "./Assets/home.scss"
import "./Assets/layout.scss"
import "./Assets/reset.scss"
import "./Assets/search.scss"
import "./Assets/musicPlayer.scss"


 

import Search from './Pages/Search'

function App() {
  return (
    <>

<BrowserRouter >
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/"  element={<Home/>}/> 
        <Route path="/search"  element={<Search/>}/> 
          
        </Route>
       
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
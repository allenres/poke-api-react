import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import CardInfo from './components/CardInfo.jsx'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => setPokemon(data))
  ,[pokemon]
  )


  return (
    <>
    <Header />
    <SearchBar/>
    <CardInfo />
    <Footer />
    </>
  )
}

export default App

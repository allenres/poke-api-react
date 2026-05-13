import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import CardInfo from './components/CardInfo.jsx'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  async function allPokemon(){
    const url = "https://pokeapi.co/api/v2/pokemon/1/"
    const response = await fetch(url)
    const pokemonData = await response.json();
    setPokemon(pokemonData)
    // console.log(pokemon)
  }
  useEffect(() => {
    //console.log("USEEFFECT RAN")
    allPokemon()
  }, [])

  allPokemon()
  // useEffect(() => {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setPokemon(data) 
  //       console.log(data)
  //     })
  //   }
  // ,[])


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

import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import CardInfo from './components/CardInfo.jsx'
import './App.css'

function App() {
  const [pokeName, SetPokeName] = useState("")
  const [pokemon, setPokemon] = useState([])

  async function allPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`
    const response = await fetch(url)
    const pokemonData = await response.json();
    setPokemon(pokemonData)
    console.log(pokemon)
  }
  useEffect(() => {
    // console.log("USEEFFECT RAN")
    allPokemon()
  }, [pokeName])
 
  
  function typePokemon(e){
    const pokeSearch = e.target.value
    console.log(pokeSearch)
    SetPokeName(pokeSearch);
  }

  // function searchPokemon(){
  //   typePokemon()
  // }
  // Other method
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

    <div className="search-container">  
        <input type='text' name="poke-name" placeholder='Enter pokemon name' className="search-bar" onChange={typePokemon}></input>
        <button className='search-btn'>Search</button>
    </div>

    <CardInfo stats={pokemon.stats} name={pokemon.name}/>
    <Footer />
    </>
  )
}

export default App

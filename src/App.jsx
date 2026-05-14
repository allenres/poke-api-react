import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import CardInfo from './components/CardInfo.jsx'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState("")
  const [pokeName, SetPokeName] = useState("bulbasaur")
  const [pokeData, setPokeData] = useState([])

  async function allPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`
    const response = await fetch(url)
    const pokemonData = await response.json();
    setPokeData(pokemonData)
  }

  useEffect(() => {
    // console.log("USEEFFECT RAN")
    allPokemon()
  }, [pokeName])
 
  
  function typePokemon(e){
    const pokeSearch = e.target.value
    setUserInput(pokeSearch);
  }

  function searchPokemon(){
    SetPokeName(userInput)
    // console.log("pokemon searched: " + pokeName)
    console.log(pokeData)
  }

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
        <button className='search-btn' onClick={searchPokemon}>Search</button>
    </div>

    <CardInfo pokemonInfo={pokeData} pokemonStats={pokeData.stats}/>
    <Footer />
    </>
  )
}

export default App

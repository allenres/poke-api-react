import "./PokeImage.css";
import {useState} from 'react'
export default function PokeImage({pokeSprite, pokeIndex}) {
    return (
        <div className="img-container">
            <img src={pokeSprite?.front_default} alt="pokemon sprite"/>
            <span className="poke-number">{"#" + pokeIndex}</span>
        </div>
    )
}
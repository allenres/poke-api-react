import './CardInfo.css'
import StatsList from './StatsList'
import PokeImage from './PokeImage';

function Header({pokemonInfo, pokemonStats}){
    return (
        <div className='card-container'>
            <PokeImage />
            <StatsList
                pokeStats={pokemonStats}
                pokeInfo={pokemonInfo}
                pokeName={pokemonInfo.name}
                pokeTypes={pokemonInfo.types}
            />
        </div>
    )
}
export default Header;
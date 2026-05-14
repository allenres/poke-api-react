import './CardInfo.css'
import StatsList from './StatsList'
import PokeImage from './PokeImage';

function Header({pokemonInfo, pokemonStats}){
    return (
        <div className='card-container'>
            <PokeImage />
            <StatsList 
                pokeInfo={pokemonInfo}
                statInformation={pokemonStats}
                pokemonName={pokemonInfo.name}
                pokemonTypes={pokemonInfo.types}
            />
        </div>
    )
}
export default Header;
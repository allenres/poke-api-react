import './CardInfo.css'
import StatsList from './StatsList'
import PokeImage from './PokeImage';

function Header({stats, info}){
    return (
        <div className='card-container'>
            <PokeImage />
            <StatsList 
                statInformation={stats}
                pokemonName={info.name}
                pokemonTypes={info.types}
            />
        </div>
    )
}
export default Header;
import './CardInfo.css'
import StatsList from './StatsList'
import PokeImage from './PokeImage';

function Header({stats, name}){
    return (
        <div className='card-container'>
            <PokeImage />
            <StatsList 
                statInformation={stats}
                pokemonName={name}
            />
        </div>
    )
}
export default Header;
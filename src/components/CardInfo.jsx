import './CardInfo.css'
import StatsList from './StatsList'
import PokeImage from './PokeImage';

function Header(){
    return (
        <div className='card-container'>
            <PokeImage />
            <StatsList />
        </div>
    )
}
export default Header;
import './StatsList.css';
export default function StatsList({statInformation, pokemonName, pokemonTypes}) {
    return (
        <div className="stats-container">
            <h3>{pokemonName}</h3>
            
            <div className='type-container'>
                {pokemonTypes?.length > 0 && pokemonTypes.map((typeObj) => (<p className='type' key={typeObj.slot}>{typeObj.type.name}</p>))}
            </div>

            <div className='stat-item'>
                <p className="stat">Height</p>
                <p className="value">0.3m</p>
            </div>
        </div>
    ) 
}
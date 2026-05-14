import './StatsList.css';
export default function StatsList({statInformation, pokemonName}) {
    console.log(statInformation)
    return (
        <div className="stats-container">
            <h3>{pokemonName}</h3>
            <p className="type">Normal</p>
            <div className='stat-item'>
                <p className="stat">Height</p>
                <p className="value">0.3m</p>
            </div>
        </div>
    ) 
}
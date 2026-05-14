import './StatsList.css';
export default function StatsList({pokeInfo, statInformation, pokemonName, pokemonTypes}) {
    console.log(statInformation)
    return (
        <div className="stats-container">
            <h3>{pokemonName}</h3>

            <div className='type-container'>
                {pokemonTypes?.length > 0 && pokemonTypes.map((typeObj) => (<p className='type' key={typeObj.slot}>{typeObj.type.name}</p>))}
            </div>

            <div className='stat-item'>
                <p className="stat">{"height: " + pokeInfo.height}</p>
                <p className="stat">{"weight: " + pokeInfo.weight}</p>

                {statInformation?.length > 0 && statInformation.map((statObj) => (<p>{statObj.stat.name + " " + statObj.base_stat}</p> ))}
            </div>
        </div>
    ) 
}
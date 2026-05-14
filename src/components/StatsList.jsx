import './StatsList.css';
export default function StatsList({pokeInfo, pokeStats, pokeName, pokeTypes}) {
    console.log(pokeStats)
    return (
        <div className="stats-container">
            <h3>{pokeName}</h3>

            <div className='type-container'>
                {pokeTypes?.length > 0 && pokeTypes.map((typeObj) => (<p className='type' key={typeObj.slot}>{typeObj.type.name}</p>))}
            </div>

            <div className='stat-item'>
                <p className="stat">{"height: " + pokeInfo.height}</p>
                <p className="stat">{"weight: " + pokeInfo.weight}</p>

                {pokeStats?.length > 0 && pokeStats.map((statObj) => (<p>{statObj.stat.name + " " + statObj.base_stat}</p> ))}
            </div>
        </div>
    ) 
}
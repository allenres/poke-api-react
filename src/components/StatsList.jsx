import './StatsList.css';
export default function StatsList() {
    return (
        <div className="stats-container">
            <h3>Name</h3>
            <p className="type">Normal</p>
            <div className='stat-item'>
                <p className="stat">Height</p>
                <p className="value">0.3m</p>
            </div>
        </div>
    ) 
}
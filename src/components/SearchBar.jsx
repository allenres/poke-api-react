import './SearchBar.css';
export default function SearchBar() {
    return (
        <>
            <input type='text' name="poke-name" placeholder='Enter pokemon name' className="search-bar"></input>
            <button className='search-btn'>Search</button>
        </>
    )
}
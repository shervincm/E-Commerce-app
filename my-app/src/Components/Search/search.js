

function Search({ userInput, onChange}) {

    
    return (
        <div>
            <input type="text" placeholder="Search" onChange={onChange}/>
            <button type="submit">Search</button>
        </div>
    )
}

export default Search;
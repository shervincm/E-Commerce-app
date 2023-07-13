import './search.css'

function Search({ userInput, onChange}) {

    
    return (
      <div className='container'>  
        <div className="searchBar">
            <input type="text" placeholder="Search" onChange={onChange}/>
        </div>
      </div>
    )
}

export default Search;
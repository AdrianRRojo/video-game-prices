import React from 'react'
import {Link} from 'react-router-dom'


function SearchPage(props){
    const games = props.apiResponse.map((game, i) => {
        return(
            <div key={`games${i}`}>
                <Link to={`/game/${i}`}>
                    <h2>{game.title}</h2>
                </Link>

                <div>
                    <button onClick={() => props.readLater([...props.readLater, {id: i, game}])}>Button</button>
                </div>
            </div>
        )
    })
   const ReadLaters = props.readLater.map(readLater => {
    return(
        <li key={`readLater${readLater.id}`}>
            <Link to={`/game/${readLater.id}`}>{readLater.game.title}</Link>
        </li>
    )
   })
   const handleSubmit = e => {
    e.preventDefault()
    props.setSearchQuery(props.inputValue)
}
return(
    <div>
        <h2>SEARCH RESULTS</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='input'>Search:</label>
            <input 
                type='text'
                value={props.inputValue}
                onChange={e => props.setInputValue(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
        <ul>
            {ReadLaters}
        </ul>
        <h2>Games:</h2>
        {games}
    </div>
)
}
export default SearchPage;
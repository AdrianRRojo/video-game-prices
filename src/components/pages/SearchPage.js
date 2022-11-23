import React from 'react'
import {Link} from 'react-router-dom'


function SearchPage(props){
    const games = props.apiResponse.map((game, i) => {
        return(
            <div key={`games${i}`}>
                <Link to={`/game/${i}`}>
                    <img 
                        src={game.thumb} 
                    />
                    <h2>{game.external}</h2>
                    </Link>
                    <p> cheapest price! {game.cheapest}</p> 
                

                <div>
                    {/* //! Add Watch list later */}
                    {/* <button onClick={() => props.setWatchList([...props.watchList, {id: i, game}])}>Add to your watch list</button> */}
                </div>
            </div>
        )
    })
    {/* //! Add Watch list later */}
//    const watchList = props.watchList.map(watchList => {
//     return(
//         <li key={`WatchList${watchList.id}`}>
//             <Link to={`/game/${watchList.id}`}>{watchList.game.title}</Link>
//         </li>
//     )
//    })
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
        {/* //! Add Watch list later */}
        {/* <ul>
            <h1>Watch List</h1>
            {watchList}
           { console.log("Watch List", watchList )}
        </ul> */}
        <h2>Games:</h2>
        {games}
    </div>
)
}
export default SearchPage;
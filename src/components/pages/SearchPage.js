import React from 'react'
import {Link} from 'react-router-dom'


// "c" replaces "console.log"
const c = console.log.bind(document)

function SearchPage(props){
    const games = props.apiResponse.map((game, i) => {
        return(
            <div key={`games${i}`}>
                <Link to={`/game/${i}`}>
                    <img 
                        src={game.background_image}
                        alt={game.external} 
                    />
                    <h2>{game.external}</h2>
                    </Link>
                    <p> cheapest price! {game.cheapest}</p>  

                {/* <div>
                    {/* //! Add Watch list later */}
                    {/* <button onClick={() => props.setWatchList([...props.watchList, {id: i, game}])}>Add</button> */}
                
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
// TODO: I am implementing tailwind components to redesign the home page.
    <div className="App">
        &nbsp;
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
           { c("Watch List", watchList )}
        </ul> */}

        <h2>Games:</h2>
        {games}
    </div>
// )
// TODO: The above code allows for searching, It is commented out so that I can implement tailwind.

    // <h1 className="text-center text-green-500 font-bold">
    //   Hello world!
    // </h1>

)
}
export default SearchPage;
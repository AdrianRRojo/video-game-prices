import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import axios from 'axios'


function GamePage(props){
    // Cheapshark Game ID 
    // const [idResponse,setIdResponse] = useState([])
    // const [price, setPrice] = useState("")

    // Cheapest 
    // const [deals, setDeals] = useState([])

    // Color
    // const [color, setColor]= useState("")

    const {id} = useParams()
    const game = props.apiResponse[id]

    const [gamePageData, setGamePageData] = useState([{game}])
    


    // Setting a new variable ,c, to console.log to reduce typing console.log over and over again.
  const c = console.log.bind(document)
    // c(game)
    c("ID -" ,game.id)

    // Specific Game lookup using games ID provided by CheapShark API
useEffect(() =>{
    const getId = async() => {
        try{
            const url = `https://api.rawg.io/api/games/${game.id}?key=${process.env.REACT_APP_API_KEY}`
            const response = await axios.get(url)
            c('response ',response.data)

            // const rd = response.data
            setGamePageData = ([...gamePageData,...response.data.description])
            c("GPD -> ",gamePageData)
            // setPrice (rd.cheapestPriceEver.price)
            // setColor(rd.dominant_color)

            // Checking to see if the price variable was changed to match data.
            // c('price', price)
            // setDeals([rd.deals[0].retailPrice])
            
        }catch(err){
            console.warn(err)
        }
    }
    getId()
}, [])


// TODO: description is returning Undefined.
// c('desc', game.description_raw)

    if(!game){
        return(
            <h1>Oops! something went wrong</h1>
        )
    }
    return(
        <main>
        <div>
            {/* <h1>Game Page</h1> */}
            <img 
                src={game.background_image}
                alt={game.name}
            />
        </div>
        <div>
            <h1>{game.name}</h1>
            <p>ESRB: {game.esrb_rating.name}</p>
            <p>Rating: {game.rating} 🎖️</p>
            <p>metacritic: {game.metacritic} 🏅</p>
            <p>{game.ratings[0].title}: {game.ratings[0].count}</p>
            <p>{game.ratings[1].title}:  {game.ratings[1].count}</p>
            <p>{game.ratings[2].title}:  {game.ratings[2].count}</p>
            <p>{game.ratings[3].title}:  {game.ratings[3].count}</p>
            {/* <p>{gamePageData.description}</p> */}
            {/* <p>{game.developers.name}</p> */}

            {/* Logo paths are wrong.*/}
            {/* <a href={game.reddit_url}>
                <img
                    src="../Reddit.png" >
                </img>
            </a> */}

        </div>
        </main>
    )
}
export default GamePage;
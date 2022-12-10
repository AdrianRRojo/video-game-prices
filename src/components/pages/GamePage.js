import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import axios from 'axios'


function GamePage(props){
    // Cheapshark Game ID 
    // const [idResponse,setIdResponse] = useState([])
    const [price, setPrice] = useState("")

    // Cheapest 
    const [deals, setDeals] = useState([])

    // Color
    const [color, setColor]= useState("")

    const {id} = useParams()
    const game = props.apiResponse[id]

    


    // Setting a new variable ,c, to console.log to reduce typing console.log over and over again.
  const c = console.log.bind(document)
    c(game)
    c("ID -" ,game.id)

    // Specific Game lookup using games ID provided by CheapShark API
useEffect(() =>{
    const getId = async() => {
        try{
            const url = `https://api.rawg.io/api/games/${game.id}?key=${process.env.REACT_APP_API_KEY}`
            const response = await axios.get(url)
            c('response ',response.data)

            const rd = response.data

            setPrice (rd.cheapestPriceEver.price)
            setColor(rd.dominant_color)

            // Checking to see if the price variable was changed to match data.
            // c('price', price)
            setDeals([rd.deals[0].retailPrice])
            
        }catch(err){
            console.warn(err)
        }
    }
    getId()
    // c('price-2', price)
}, [])

c('desc', game.description_raw)
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
        <div 
            style={{
                backgroundColor: "0f0f0f",
                width: "100%",
                height: "100%",
            }}
        >
            <h1>{game.name}</h1>
            <p>{game.rating}</p>
            
            
            {/* <a href='' ></a> */}
        </div>
        </main>
    )
}
export default GamePage;
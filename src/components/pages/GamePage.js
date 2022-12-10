import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import axios from 'axios'


function GamePage(props){
    // Cheapshark Game ID 
    // const [idResponse,setIdResponse] = useState([])
    const [price, setPrice] = useState("")

    // Cheapest 
    const [deals, setDeals] =useState([])

    const {id} = useParams()
    const game = props.apiResponse[id]


    // Setting a new variable ,c, to console.log to reduce typing console.log over and over again.
  const c = console.log.bind(document)
    c(game)

    // Specific Game lookup using games ID provided by CheapShark API
useEffect(() =>{
    const getId = async() => {
        try{
            const url = `https://www.cheapshark.com/api/1.0/games?id=${game.gameID}`
            const response = await axios.get(url)
            c('response ',response.data)

            const rd = response.data

            setPrice (rd.cheapestPriceEver.price)

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


    if(!game){
        return(
            <h1>Oops! something went wrong</h1>
        )
    }
    return(
        <div>
            {/* <h1>Game Page</h1> */}
            <h2>{game.external}</h2>
            <img src={game.thumb}/>
            <p>Retail: {deals}</p>
            <p>Current price: {price} </p>
            
            {/* <a href='' ></a> */}
        </div>
    )
}
export default GamePage;
import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


import axios from 'axios'

function GamePage(props){
    // Cheapshark Game ID 
    // const [idResponse,setIdResponse] = useState([])
    const [price, setPrice] = useState("")
    const [deals, setDeals] =useState([])

    const {id} = useParams()
    const game = props.apiResponse[id]

    // console.log(game)
useEffect(() =>{
    const getId = async() => {
        try{
            const url = `https://www.cheapshark.com/api/1.0/games?id=${game.gameID}`
            const response = await axios.get(url)
            console.log('response ',response.data)
            const rd = response.data
            setPrice (rd.cheapestPriceEver.price)
            // console.log('price', price)
            setDeals([rd.deals[0].retailPrice])
            
        }catch(err){
            console.warn(err)
        }
    }
    getId()
    // console.log('price-2', price)
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
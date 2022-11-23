import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import axios from 'axios'

function GamePage(props){
    // Cheapshark Game ID 
    const [gameId, setGameId] = useState('') 
    const [idResponse,setIdResponse] = useState('')


    const {id} = useParams()
    const game = props.apiResponse[id]

    console.log(game)
    if(!game){
        return(
            <h1>Oops! something went wrong</h1>
        )
    }
useEffect(() =>{
    const getId = async() => {
        try{
            const url = `https://www.cheapshark.com/api/1.0/games?id=${gameId}`
            const response = await axios.get(url)
            console.log(response.data)
            setIdResponse([...idResponse, ...response.data])
        }catch(err){
            console.warn(err)
        }
    }
    getId()
}, [])
    return(
        <div>
            <h1>Game Page</h1>
            <h2>{game.external}</h2>
            <img src={game.thumb}/>
            <p>{game.cheapest}</p>
            
        </div>
    )
}
export default GamePage;
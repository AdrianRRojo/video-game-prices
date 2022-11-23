import React from 'react'
import {useParams} from 'react-router-dom'


function GamePage(props){
    const {id} = useParams()
    const game = props.apiResponse[id]
    console.log(game)
    if(!game){
        return(
            <h1>Oops! something went wrong</h1>
        )
    }
    return(
        <div>
            <h1>Game Page</h1>
            <h2>{game.title}</h2>
        </div>
    )
}
export default GamePage;
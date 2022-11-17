import './App.css';

import React from 'react';
import {Routes, Route} from 'react'
import {useState, useEffect} from'react'
import { Link } from 'react-router-dom'

import axios from 'axios'


import Home from './components/pages/Home';
import Landing from './components/pages/Landing';
import Results from './components/pages/Results';



function App() {
  //Response from API
  const [apiResponse, setApiResponse] = useState([])

  //Users search query
  const [searchQuery, setSearchQuery] = useState('State not set.')

  // saved to read later
  const [readLater, setReadLater] = useState([])
  
  // controlled input 
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    const getDeals = async () => {
      try{
        const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`
        const response = await axios.get(url)
        console.log(response.data)
        setApiResponse([...apiResponse, ...response.data])
      }catch(err){
        console.warn(err)
      }
    }
    getDeals()
  },[searchQuery])

  return (
    
    <div className="App">
      <main>
        <Routes>
          
        <Route path="/" element={
              <Home 
                // apiResponse={apiResponse} 
                // inputValue={inputValue} 
                // setInputValue={setInputValue} 
                // setSearchQuery={setSearchQuery} 
                // readLater={readLater}
                // setReadLater={setReadLater}
              />
        }
        />
        {/* <Route path='/results/:id' element={ <Results apiResponse={apiResponse}/>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

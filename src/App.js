
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from'react'


import axios from 'axios'
import './App.css';

import GamePage from './components/pages/GamePage';
import SearchPage from './components/pages/SearchPage';

function App() {
  //Response from API
  const [apiResponse, setApiResponse] = useState([])

  //Users search query
  const [searchQuery, setSearchQuery] = useState('')

  // saved to read later
  const [watchList, setWatchList] = useState([])
  
  // controlled input 
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  
  useEffect(() => {
    const getDeals = async () => {
      try{
        const url = `https://www.cheapshark.com/api/1.0/games?title=${searchQuery}`
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
          <SearchPage 
            apiResponse={apiResponse}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setSearchQuery={setSearchQuery}
            watchList={watchList}
            setWatchList={setWatchList}  
          />
        }
        />
        <Route path="/game/:id" element={
          <GamePage 
            apiResponse={apiResponse}
          />
        }
        />
      </Routes>
     </main>
    </div>
  );
}

export default App;

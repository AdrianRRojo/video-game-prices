import './App.css';

import React from 'react';
import {Routes, Route} from 'react'
import {useState, useEffect} from'react'
import { Form, Link } from 'react-router-dom'

import axios from 'axios'







function App() {
  //Response from API
  const [apiResponse, setApiResponse] = useState([])

  //Users search query
  const [searchQuery, setSearchQuery] = useState('')

  // saved to read later
  const [readLater, setReadLater] = useState([])
  
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
      <h1>HOME</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchQuery} />


    </div>
  );
}

export default App;

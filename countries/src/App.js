import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySearchFilt from "./DisplaySearchFilt";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([])

  

  useEffect(() =>{
    console.log('effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then((response) =>{
      console.log('Successful')
      setCountries(response.data)
    
    })
    
  }, [])

  const searchFiltered = countries.filter((country) => country.name.common.toLowerCase().includes(search.toLocaleLowerCase()))

  console.log(searchFiltered)

  return (
    <div className="App">
      <label htmlFor="">find countries</label>
      <input type="text" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <DisplaySearchFilt searchFiltered={searchFiltered} setSearch={setSearch} search ={search}/>

      
      

      </div>
  );
}

export default App;

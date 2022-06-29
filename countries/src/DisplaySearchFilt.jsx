import React from 'react'




const DisplaySearchFilt = ({searchFiltered, setSearch, search}) =>{
  
    const country = searchFiltered[0]

    if(searchFiltered.length ===1){
        // console.log(Object.values(country.languages))
         const getVal = Object.values(country.languages)
         
         

        
        return(
        <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Population: {country.population}</p>
        
            <ul>
            Language(s) : {getVal.map((language, i) => <li key={i}>{language}</li>)}
                
            </ul>
            <div>Total Language speaks: {getVal.length}</div>

            <img src={country.flags.png} alt="" />
            
        
        
        
        
        
        
        
        </div>
        )
    }


    if(searchFiltered.length > 10) return <div>Too many matches, specify another filter</div>
    



    return(
        <div>
        {/* { (searchFiltered.length > 10) ? <div>Too many matches</div> : searchFiltered.map((country, i) => <div key={i}>{country.name.common}</div>)} */}
        {searchFiltered.map((country) => {
            return <div key={country.name.common}>{country.name.common}<button value={country.name.common} onClick={(e) => setSearch(e.target.value)}>show</button></div>})}
        

        </div>
    )
}

export default DisplaySearchFilt
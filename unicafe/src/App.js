import React,{useState} from 'react'

const Statistics = ({good, neutral, bad}) =>{
  
  <h2>Statistics</h2>
  // const {good, bad, neutral} = props
  if( (good || neutral || bad) === 0){
    return(
      <p>No feedback given yet</p>
    )
  }
    
  return (
    <>
    <table>
    <tbody>
     <tr>     
    <td>Good {good}</td>
    </tr>  
   
    <tr><td>Neutral {neutral}</td></tr>
    <tr><td>Bad {bad}</td></tr>
    <tr><td>All {good + neutral + bad}</td></tr>
    <tr><td>Average {(good + bad - neutral) / (good + neutral + bad)}</td></tr>
    <tr><td>Positive {(good / (good + neutral + bad) * 100 )} %</td></tr>
    </tbody>
    </table>
    </>
    
  )

}

function App() {
  

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)





  function handleGood () {
    setGood(good + 1)
  }

  function handleNeutral () {
    setNeutral(neutral + 1)
  }

  function handleBad () {
    setBad(bad + 1)
  }



  return(
    <main>
    <h1>Feedback</h1>
      <button onClick = {handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />

      
    </main>
  )
 
}

export default App;

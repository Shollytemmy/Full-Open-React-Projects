import React, {useState} from 'react'

const Display = ({anecdotes}) =>{

  return(
    <p>{anecdotes}</p>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.. ',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients..'
  ]
  const [selected, setSelected] = useState(0)
  const arrVotes = new Array(anecdotes.length).fill(0)
  const [points, setPoints] = useState(arrVotes)
  

  const vote = () =>{
   const copied = [...points]
   copied[selected] += 1
   setPoints(copied)
    // const copied = [...points];
    // console.log(copied)
    // copied[selected] += 1
    // setPoints(copied)
    // console.log(points)
  }
  
  function generate () {
  return setSelected( Math.floor(Math.random() * anecdotes.length))
  }

  return(
    <main>
    
    <Display anecdotes = {anecdotes[selected]}/>
    <p>has {points[selected]}vote</p>
    
    <Button handleClick = {generate} text ='Next anecdotes' />
    
    <button onClick={() => vote()}>vote</button>

    </main>
  )
}

export default App;

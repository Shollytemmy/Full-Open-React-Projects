const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const getId = () => Number( (100000 * Math.random()).toFixed(0))

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map((anecdote) => {
  return asObject(anecdote)
})

const reducer = (state = initialState, action) => {

  switch(action.type){
    case 'ADD_VOTE':
      {
    const {id} = action.payload
   
    const voteToChange = state.find((vote) => vote.id === id)
  
    const changeVote = {...voteToChange, votes: voteToChange.votes + 1}

    const newState = state.map((vote) => vote.id !== id ? vote : changeVote)
    return newState.sort((a , b) => b.votes - a.votes )

    
      }
      case 'ADD_NEW_ANECDOTE':
        return state.concat(action.payload)

      default:
        return state  
  }

  
}

export const createAnecdote = (content) =>{
  return {
    type: 'ADD_NEW_ANECDOTE',
    payload:{
        content: content,
        votes: 0,
        id: getId()
      }

  }
    
}

export const handleVotes = (id) => {
  return{
    type: 'ADD_VOTE',
    payload: {id}
      

  }
}







export default reducer


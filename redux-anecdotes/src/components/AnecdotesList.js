import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleVotes } from '../reducers/anecdoteReducer'

export const AnecdotesList = () => {

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const AnecdoteList = ({anecdoteContent, anecdoteVote, handleClick}) => {
        
        return(
            <div>
                <div>
            {anecdoteContent}
          </div>
          <div>
              has {anecdoteVote}
              <button onClick={handleClick}>vote</button>
          </div>
            </div>

        )
    }

  return (
      <div>
          {
        anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <AnecdoteList
            anecdoteContent = {anecdote.content}
            anecdoteVote = { anecdote.votes}
            handleClick = {() => dispatch(handleVotes(anecdote.id))}

             />
          
        </div>
      )
    }

      </div>
     
    
  )
}

/**
 * 
 * <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(handleVotes(anecdote.id))}>vote</button>
          </div>
 */

import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";


export const AnecdotesForm = () => {

    const dispatch = useDispatch()
    const addVotes = (e) =>{
    e.preventDefault()

    const content = e.target.anecdote.value
    if(!content) return
   
    e.target.anecdote.value = ''
    dispatch(createAnecdote(content))

    
  }


    return(
        <div>
            <h2>create new</h2>

        <form onSubmit={addVotes}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>


        </div>
        
    )
}

//  const newVote = state.map((states) => states.votes + states.votes + 1)
//     console.log(newVote)

//  console.log(action.payload.id.id)




/**if(action.type === 'ADD_VOTE'){

   

    const {id} = action.payload.id
    console.log('ID :' ,id)
    const voteToChange = state.find((vote) => vote.id === id)
    console.log(voteToChange)
    const changeVote = {...voteToChange, votes: voteToChange.votes + 1}

    return state.map((vote) => vote.id !== id ? vote : changeVote)

    // console.log(changeVote);


  // console.log(changeVote);
    
    
    
  }

  return state */


  /**
   * dispatch({
      type: 'ADD_NEW_ANECDOTE',
      payload:{
        content: content,
        votes: 0,
        id: getId()
      }
    })


   */

    /**
     * 
     * return{
      type: 'ADD_VOTE',
      payload:{
        id: {id}
      }
    
    }
     */

    const vote = (id) => {
    console.log('vote', id)

    /**
     * 
     * return{
      type: 'ADD_VOTE',
      payload:{
        id: {id}
      }
    
    }
     */
  }
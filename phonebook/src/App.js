import React, {useState, useEffect} from 'react'
import Services from './Components/Services'

function App() {
  const [persons, setPerson] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [search, setSearch] = useState('')

// const baseUrl = 'http://localhost:3001/api/persons'

  useEffect(() =>{
    console.log('effect')
   Services
    .getAll()
    .then((response) =>{
      setPerson(response.data)
    })
  }, [])

  // const addPersonBackend = async (obj) => {
  //  Services
  //  .addPersonBackend(obj)
  //  .then((response) => setPerson(response.data))
  // }

  //return request.then((response) => response.data)


  // const deletedContact = async (id) =>{
  //   const response = await axios.delete(`${baseUrl}/${id}`)
  //   return response
    


  // }

  

  const addPerson = (event) => {
    event.preventDefault();

    if(persons.find(person => person.name === newName) && persons.find(person => person.number === newNumber)){
      return alert(`${newName} and ${newNumber} is already added to phonebook`)
    }


    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
      
    }

    Services
    .addPersonBackend(personObj)
    console.log(personObj)
    .then((response) =>{
      setPerson(persons.concat(response.data))
      setNewName('')
      setNumber('')

    } 
)

   


    // Services
    // .addPersonBackend()
    // .then((response) => setPerson(persons.concat(response.data)))
  // const data = await addPersonBackend(personObj)
  }
 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addContact = (event) => {
    setNumber(event.target.value)
  }

  // delete function

  const removeContact = (id) =>{
    const person = persons.find((person) => person.id === id)
    const { name } = person
    window.confirm(`delete ${name}?`)

 Services.deletedContact(id)
 .then((response) => setPerson(persons.filter((person) => person.id !== id))
  )

  }

  // search

  const filteredPersonson = search.trim() ? persons.filter(person => person.name.toLowerCase().includes(search.trim().toLocaleLowerCase())) : persons
 


  return(
    <div>
      <h1>Phonebook</h1>
      <form action="" onSubmit={addPerson}>
      <div>
       Filter shown name <input type="search" name="" id="" value={search} onChange={(event) => setSearch(event.target.value)}  />
       <h2>Add New Number</h2>

      </div>
        <div>
          Name: <input  value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          Number: <input value={newNumber}  onChange={addContact}/>
        </div>

        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
         {filteredPersonson.map((person) =>{
           const {id, name, number} = person
           return <li key={person.id}>{name} {number} <button onClick={() =>{removeContact(id)}}>Delete</button></li>
         })}
       </ul>
      
    </div>
    

  )
  
}

export default App;

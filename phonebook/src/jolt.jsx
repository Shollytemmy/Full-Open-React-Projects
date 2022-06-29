// import axios from "axios";



// const baseUrl = 'http://localhost:3001/api/persons'

// const getAll = (obj) =>{
//     return axios.get(baseUrl)
// }

// const addPersonBackend = (obj) => {
//     return  axios.post(baseUrl, obj)
   
//    }
 
//    //return request.then((response) => response.data)
 
 
//    const deletedContact =  (id) =>{
//      return  axios.delete(`${baseUrl}/${id}`)
    
     
 
 
//    }
 
//    export default{
//        getAll,
// addPersonBackend,
// deletedContact
//    }



















































const filter = (event) =>{
    const keyword = event.target.value

    if(keyword !== ''){
      const results = person.filter(user =>{
        return user.name.toLowerCase().startsWith(keyword.toLowerCase())
      })
      setSearch(results)
    }

    else{
      setSearch(person)
    }

  }

  return(
    <div>
      <h1>Phonebook</h1>
      <form action="" onSubmit={addPerson}>
      <div>
       Filter shown name <input type="search" name="" id="" value={search} onChange={filter}/>
       {search && search.length > 0 ? (search.map((list, i) =>{
         <li key={i}>{list.name} {list.number}</li>
       }))
       : <p>No result</p>
       
       }



{
  "persons": [{
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
    },
    {
    "name": "Bunyameen",
    "number": "2347062666106",
    "id": 2
    },
    {
    "name": "Ayyub",
    "number": "09876590",
    "id": 3
    },
    {
    "name": "Abdallah",
    "number": "08133495937",
    "id": 4
    },
    {
    "name": "Aish",
    "number": "09876590",
    "id": 5
    },
    {
    "name": "kechukwu",
    "number": "909090",
    "id": 6
    },
    {
    "name": "millano",
    "number": "890980",
    "id": 7
    },
    {
    "name": "brillira",
    "number": "32454",
    "id": 8
    },
    {
    "name": "myopia",
    "number": "123234",
    "id": 9
    },
    {
    "name": "hygiene",
    "number": "43243",
    "id": 10
    },
    {
    "name": "tlikee",
    "number": "2323",
    "id": 11
    },
    {
    "name": "mild",
    "number": "123456",
    "id": 12
    }
  ]
}


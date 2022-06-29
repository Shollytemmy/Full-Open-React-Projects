

import axios from "axios";

const baseUrl = 'http://localhost:3001/api/persons'


const getAll = () =>{
    return axios.get(baseUrl)
}


const addPersonBackend = (obj) =>{
    return axios.post(baseUrl,obj)
}

const deletedContact = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}


export default{
    getAll,
    addPersonBackend,
    deletedContact
}
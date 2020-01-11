const express = require('express')
const app = express()


let persons = [
  {
    name: "Arto Hellas",
    number: "040-123123123",
    id: 1
  },
  {
    name: "Maaret Hellas",
    number: "040-121212",
    id: 2
  },

]

app.get('/api/persons', (req,res) => {
  res.json(persons)
})

app.get('/index', (req,res) => {
  res.send('<p>Phonebook contains the info of '+persons.length+' persons</p><br><p>'+req.headers.date+'</p>')
  
})


const PORT =3001

app.listen(PORT, () =>{
  console.log('Server running on ${PORT}')
})
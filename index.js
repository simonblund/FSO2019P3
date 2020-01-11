const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.json())
app.use(morgan('tiny'))

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
  {
    name: "Saaret Lellas",
    number: "040-453451212",
    id: 3
  },
  {
    name: "Laaret HKellas",
    number: "040-42345234523",
    id: 4
  },
  {
    name: "Flaaret Mjellas",
    number: "040-13422",
    id: 5
  },

]


const generateId = () => {
  return Math.floor(Math.random()*Math.floor(10000))
}

// Returns list of persons
app.get('/api/persons', (request,response) => {
  response.json(persons)
  
})

// Returns list of persons
app.post('/api/persons', (request,response) => {
  const body = request.body
  if(!body.name || !body.number){
    return response.status(400).json({error:'content missing'})
  }
  if(persons.find(person => person.name == body.name)){
    return response.status(406).json({error:'Name must be unique'})
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }
  persons = persons.concat(person)
  response.json(person)
})

// Returns person from id
app.get('/api/persons/:id', (request,response)=>{
  const id = Number(request.params.id)
  const person = persons.find(person => person.id == id)
  person ? response.json(person) : response.status(404).end() 
})

// Returns application info
app.get('/info', (req,res) => {
  date = new Date()
  res.send('<p>Phonebook contains the info of '+persons.length+' persons</p><br><p>'+date.toString()+'</p>')
  
})

// Deletes person from persons list
app.delete('/api/persons/:id', (request,response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

// Port to serve application on
const PORT =3001

app.listen(PORT, () =>{
  console.log('Server running on '+PORT)
})
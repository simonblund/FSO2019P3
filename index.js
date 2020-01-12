/**
 * Imports
 */
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

/**
 * Middleware
 */
app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan('tiny'))

const generateId = () => {
  return Math.floor(Math.random()*Math.floor(10000))
}


/**
 * Persons API
 * GET api/persons - list of persons
 * POST api/persons - create person
 * GET api/persons/[id] - get one person
 */
app.get('/api/persons', (request,response) => {
  Person.find({})
  .then(persons=>{
    response.json(persons.map(note =>note.toJSON()))
  })
  .catch(error=>next(error))
  
})

app.post('/api/persons', (request,response) => {
  const body = request.body

  if(!body.name || !body.number){
    return response.status(400).json({error:'content missing'})
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId()
  })

  person.save()
  .then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
  .catch(error=>next(error))
  
  
})

// Returns person from id
app.get('/api/persons/:id', (request,response)=>{
  const id = request.params.id
  Person.findById(id).then(person =>{
    response.json(person.toJSON())
  })
  .catch(error=>next(error))
})

// Returns application info
app.get('/info', (req,res) => {
  date = new Date()
  res.send('<p>Phonebook contains the info of '+persons.length+' persons</p><br><p>'+date.toString()+'</p>')
  
})

// Deletes person from persons list
app.delete('/api/persons/:id', (request,response) => {
  const id = request.params.id
  Person.findByIdAndDelete(id)
  .then(result=>{
    response.status(204).end()
  })
  .catch(error=>next(error))
  
})


/*
ERROR HANDLERS
*/

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

// Port to serve application on
const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
  console.log('Server running on '+PORT)
})
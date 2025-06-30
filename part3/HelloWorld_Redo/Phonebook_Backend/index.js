const express = require('express')
const app = express()
app.use(express.json())

let persons =
[
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    {
      "id": "5",
      "name": "Kimberly Ramgopal", 
      "number": "347-239-2516"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>good bye World!</h1>')
})

//3.1

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

//3.2
const requestTime = function (req, res, next) {
  req.requestTime = Date.now(); // Stores the timestamp in milliseconds
  next(); // Passes control to the next middleware or route handler
};

app.use(requestTime); // Apply the middleware globally

app.get('/info',(request,response) =>{
    const pLength = persons.length
    const dateString = new Date(request.requestTime).toLocaleString('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  });
   response.send(
    `Phonebook has info for ${pLength} people<br>${dateString}`
  );
})

//3.3

app.get('/api/persons/:id', (request,response) =>{
  const id = request.params.id
  const person = persons.find(person => person.id === id)

  if (person){
    response.json(person)
  }else{
    response.status(404).end()
  }
})

//3.4

app.delete('/api/persons/:id', (request,response) =>{
  const id = request.params.id
  const person = persons.filter(person => person.id !== id)
  response.status(204).end()
})

//3.5 3.6
const generateId = () => {
   
    const newId = Math.floor(Math.random() * 10000)
    return newId
}

app.post('/api/persons',(request,response) =>{
    const body = request.body

     if (!body.name) {
        return response.status(400).json({ 
        error: 'Name missing' 
      });
    }

      if (!body.number) {
        return response.status(400).json({ 
          error: 'Number missing' 
        });
      }

      if (persons.find(p => p.name === body.name)) {
        return response.status(400).json({ error: 'name must be unique' });
      }

   const person = {
    name: body.name,    
    number: body.number,
    id: generateId(),
  }; 
  
  console.log(person)


    persons = persons.concat(person)
    response.json(person)


})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

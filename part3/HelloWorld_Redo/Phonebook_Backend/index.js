
const express = require('express')
const app = express()
app.use(express.json())

let persons=[
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
    }
]

app.get('/',(request,response) =>{
     response.send('<h1>Hello World!</h1>')
})

//getting request time
const requestTime = function (req, res, next) {
  req.requestTime = Date.now(); // Stores the timestamp in milliseconds
  next(); // Passes control to the next middleware or route handler
};

app.use(requestTime); // Apply the middleware globally

app.get('/api/info',(request,response) =>{
    const pLength = persons.length
    const dateString = new Date(request.requestTime).toLocaleString('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  });
   response.send(
    `Phonebook has info for ${pLength} people<br>${dateString}`
  );
})


app.get('/api/persons',(request,response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) =>{
    const id =  request.params.id
    const person = persons.find(person => person.id === id)

    if (person){
        response.json(person)
    }
    else{
        response.status(404).end()
    }
  

})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

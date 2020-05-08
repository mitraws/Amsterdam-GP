const express = require('express')
const data = require('./patient-doctor-data')
const cors = require('cors')

// create express server
const app = express()
const corsMiddleware = cors();

// handler function
function onRequest () {
//   console.log('after request')
}

app.use(corsMiddleware, express.json());
// register GET /hello endpoint
app.get(
  '/patients', // route to listen on
  (request, response) => { // handler callback
response.send(data)
  }
)
app.get(
    '/doctors', // route to listen on
    (request, response) => { // handler callback
  response.send(data.doctors)
  
    }
  )
  app.get(
    '/patients/:id', // route to listen on
    (request, response) => { // handler callback
  data.patients.filter((patient) => {
      if (patient.id === request.params.id)
      response.send(patient) 
  })
    }
  )

// 3000 is common
const port = 4000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)


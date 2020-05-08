const express = require('express')

// create express server
const app = express()

// handler function
function onRequest () {
  console.log('after request')
}

// register GET /hello endpoint
app.get(
  '/', // route to listen on
  onRequest // callback runs when the route is requested
)

// 3000 is common
const port = 4000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
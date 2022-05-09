/* eslint-disable no-console */
const express = require('express')

const app = express()

app.get('/team', (request, response) => {
    return response.status(200).send("TO DO: /team controller")
})

app.get('/team/:id', (request, response) => {
    // const {id} = request.params
    console.log(request.headers)
    return response.status(200).send("TO DO: /team/ID controller")
})


app.listen(1300, () => {
  console.log('Listening @ http://localhost:1300')
})

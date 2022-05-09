/* eslint-disable no-console */
const express = require('express')
const { getAllTeams, getTeamById } = require('./controllers/team')

const app = express()

app.get('/team', getAllTeams)

app.get('/team/:id', getTeamById)

app.listen(1300, () => {
  console.log('Listening @ http://localhost:1300')
})

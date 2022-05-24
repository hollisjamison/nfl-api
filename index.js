/* eslint-disable no-console */
const express = require('express')
const { getAllTeams, getTeamById, addTeam } = require('./controllers/teams')

const app = express()

app.get('/teams/:id', getTeamById)

app.get('/teams', getAllTeams)

app.post('/teams', express.json(), addTeam)

app.listen(1300, () => {
  console.log('Listening @ http://localhost:1300')
})

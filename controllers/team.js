/* eslint-disable max-len */
const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.status(200).send(teams)
}

const getTeamById = (request, response) => {
  const id = Number(request.params.id)

  const foundTeam = teams.find((team) => {
    return team.id === id
  })

  if (foundTeam) {
    return response.status(200).send(foundTeam)
  } else {
    return response.status(404).send('Team ID not found')
  }
}

const getNewId = () => {
  const longestCurrentId = teams.reduce((highestId, team) => {
    if (team.id > highestId) {
      return team.id
    } else {
      return highestId
    }
  }, 0)

  return longestCurrentId + 1
}

const addTeam = (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('Please include all required fields: location, mascot, abbreviation, conference, division')
  }

  const newId = getNewId()

  if (!newId) {
    return response.status(500).send('Unable to add team due to database error.')
  }

  const newTeam = {
    location, mascot, abbreviation, conference, division, id: newId
  }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = { getTeamById, getAllTeams, addTeam }

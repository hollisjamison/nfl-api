const { Teams } = require('../models/index')

const getAllTeams = async (request, response) => {
  const teams = await Teams.findAll()

  return response.send(teams)
}

const getTeamById = async (request, response) => {
  const { id } = request.params

  const matchingTeam = await Teams.findOne({ where: { id } })

  if (matchingTeam) {
    return response.send(matchingTeam)
  } else {
    return response.sendStatus(404)
  }
}

const addTeam = async (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response
      .status(400)
      .send('The following fields are required: location, mascot, abbreviation, conference, division')
  }

  const newTeam = await Teams.create({
    location,
    mascot,
    abbreviation,
    conference,
    division,
  })

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, addTeam }

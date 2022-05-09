const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.status(200).send(teams)
}

const getTeamById = (request, response) => {
  // const {id} = request.params
  return response.status(200).send('IN PROGRESS: /team/ID controller')
}

module.exports = { getTeamById, getAllTeams }

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

module.exports = { getTeamById, getAllTeams }

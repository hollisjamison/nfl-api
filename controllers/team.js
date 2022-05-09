const getTeamById = (request, response) => {
  // const {id} = request.params
  return response.status(200).send('IN PROGRESS: /team/ID controller')
}

const getAllTeams = (request, response) => {
  return response.status(200).send('TO DO: /team controller')
}

module.exports = { getTeamById, getAllTeams }

const Sequelize = require('sequelize')
const TeamsModel = require('./teams')

const connection = new Sequelize('nfl', 'nfl_user', 'password1234', {
  host: 'localhost',
  dialect: 'mysql',
})

const Teams = TeamsModel(connection, Sequelize)

module.exports = { Teams }

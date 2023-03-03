const { Sequelize } = require('sequelize')
const setupModels = require('../db/models')

const sequelize = new Sequelize('mydatabase', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true
});

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize;
const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')

const VehiclesModel = require('./vehicles')
const ModelsModel = require('./models')
const ModelYearsModel = require('./modelyears')


const environment = process.env.NODE_ENV || 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Models = ModelsModel(connection, Sequelize)
const Vehicles = VehiclesModel(connection, Sequelize, Models)
const ModelYears = ModelYearsModel(connection, Sequelize, Models)

Models.hasMany(Vehicles)
Models.hasMany(ModelYears)
Vehicles.belongsTo(Models)
ModelYears.belongsTo(Models)

module.exports = {
  Vehicles,
  Models,
  ModelYears,
  Sequelize,
}

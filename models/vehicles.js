const vehicles = (connection, Sequelize, models) => {
  return connection.define('vehicles', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    modelId: { type: Sequelize.INTEGER, references: { model: models, key: 'id' } },
    modelName: { type: Sequelize.STRING },
  },
  { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}

module.exports = vehicles

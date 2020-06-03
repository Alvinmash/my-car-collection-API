const models = (connection, Sequelize) => {
  return connection.define('models', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    model: { type: Sequelize.STRING },
    founder: { type: Sequelize.STRING },
  },
  { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}

module.exports = models

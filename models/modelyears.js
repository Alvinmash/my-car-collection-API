const modelYears = (connection, Sequelize, models) => {
  return connection.define('modelYears', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    modelId: { type: Sequelize.INTEGER, references: { model: models, key: 'id' } },
    year: { type: Sequelize.INTEGER }
  },
  { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}

module.exports = modelYears

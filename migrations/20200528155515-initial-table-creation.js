/* eslint-disable max-len */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.STRING });
    */
    await queryInterface.createTable('models', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      model: { type: Sequelize.STRING },
      founder: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    }),

    await queryInterface.createTable('vehicles', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      modelId: { type: Sequelize.INTEGER, references: { model: 'models', key: 'id' } },
      modelName: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('modelYears', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      modelId: { type: Sequelize.INTEGER, references: { model: 'models', key: 'id' } },
      year: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('vehicles')
    await queryInterface.dropTable('modelYear')
    await queryInterface.dropTable('models')
  }
}

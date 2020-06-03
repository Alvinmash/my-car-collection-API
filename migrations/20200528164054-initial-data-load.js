module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.STRING });
    */
    await queryInterface.bulkInsert('models', [
      { model: 'toyota', founder: 'kiichiro toyoda' },
      { model: 'mercedes', founder: 'karl benz' },
      { model: 'lamborghini', founder: 'ferrucio lamborghini' },
      { model: 'porsche', founder: 'ferdinand porsche' },
      { model: 'ferrari', founder: 'enzo ferrari' },
      { model: 'pagani', founder: 'horacio pagani' },
      { model: 'mclaren', founder: 'ron denis' },
      { model: 'honda', founder: 'soichiro honda' },
      { model: 'subaru', founder: 'kenji kita' },
      { model: 'koeinigsegg', founder: 'christian von koeinigsegg' },
      { model: 'dodge', founder: 'dodge brothers' },
      { model: 'BMW', founder: 'karl rapp' },
      { model: 'chevrolet', founder: 'louis chevrolet' },
      { model: 'bentley', founder: 'bentley brothers' },
    ])

    await queryInterface.bulkInsert('vehicles', [
      { modelId: 1, modelName: 'senna' },
      { modelId: 2, modelName: 'gwagon' },
      { modelId: 3, modelName: 'SV' },
      { modelId: 4, modelName: 'GT3 RS' },
      { modelId: 5, modelName: '812 superfast' },
      { modelId: 6, modelName: 'huayra' },
      { modelId: 7, modelName: '720 S' },
      { modelId: 8, modelName: 'accord' },
      { modelId: 1, modelName: 'highlander' },
      { modelId: 9, modelName: 'STI' },
      { modelId: 10, modelName: 'jesko' },
      { modelId: 11, modelName: 'hellcat' },
      { modelId: 12, modelName: '335 i' },
      { modelId: 4, modelName: 'cayenne' },
      { modelId: 13, modelName: 'corvette' },
      { modelId: 14, modelName: 'bentayga' },
    ])

    await queryInterface.bulkInsert('modelYears', [
      { modelId: 1, year: '2017' },
      { modelId: 2, year: '2020' },
      { modelId: 3, year: '2017' },
      { modelId: 4, year: '2019' },
      { modelId: 5, year: '2019' },
      { modelId: 6, year: '2019' },
      { modelId: 7, year: '2018' },
      { modelId: 8, year: '2020' },
      { modelId: 1, year: '2017' },
      { modelId: 9, year: '2010' },
      { modelId: 10, year: '2020' },
      { modelId: 11, year: '2016' },
      { modelId: 12, year: '2019' },
      { modelId: 4, year: '2020' },
      { modelId: 13, year: '2018' },
      { modelId: 14, year: '2019' }
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('vehicles')
    await queryInterface.bulkDelete('models')
    await queryInterface.bulkDelete('modelYear')
  }
}

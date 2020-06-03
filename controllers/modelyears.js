const models = require('../models')

const getAllModelYears = async (request, response) => {
  const modelYears = await models.ModelYears.findAll()

  return response.send(modelYears)
}

const getModelYearByVehicles = async (request, response) => {
  const { identifier } = request.params

  const vehicle = await models.ModelYears.findAll({
    where: { year: identifier },
    include: [{
      model: models.Models,
      include: [{ model: models.Vehicles }]
    }]
  })

  return vehicle
    ? response.send(vehicle)
    : response.sendStatus(404)
}

module.exports = { getAllModelYears, getModelYearByVehicles }


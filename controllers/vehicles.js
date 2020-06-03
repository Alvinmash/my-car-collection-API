const models = require('../models')

const getAllVehicles = async (request, response) => {
  const vehicles = await models.Vehicles.findAll()

  return response.send(vehicles)
}
const getAllVehiclesByModel = async (request, response) => {
  const { identifier } = request.params

  const vehicle = await models.Vehicles.findAll({
    where: { modelId: identifier },
    include: [{
      model: models.Models,
      include: [{ model: models.ModelYears }]
    }]
  })

  return vehicle
    ? response.send(vehicle)
    : response.sendStatus(404)
}

module.exports = { getAllVehicles, getAllVehiclesByModel }

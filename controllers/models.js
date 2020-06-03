const models = require('../models')

const getAllModelNames = async (request, response) => {
  const modelList = await models.Models.findAll()

  return response.send(modelList)
}

const getModelById = async (request, response) => {
  const { id } = request.params

  const model = await models.Models.findOne({
    where: { id },
    include: [{ model: models.Vehicles }, { model: models.ModelYears }]
  })

  return model
    ? response.send(model)
    : response.sendStatus(404)
}

module.exports = { getAllModelNames, getModelById }


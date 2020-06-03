const express = require('express')
const { getAllVehicles, getAllVehiclesByModel } = require('./controllers/vehicles')
const { getAllModelNames, getModelById } = require('./controllers/models')
const { getAllModelYears, getModelYearByVehicles } = require('./controllers/modelyears')

const app = express()

app.get('/vehicles', getAllVehicles)
app.get('/vehicles/:identifier', getAllVehiclesByModel)

app.get('/models', getAllModelNames)
app.get('/models/:id', getModelById)

app.get('/modelyears', getAllModelYears)
app.get('/modelyears/:identifier', getModelYearByVehicles)

app.listen(8181, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8181...')
})

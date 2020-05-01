const express = require('express')
const carData = require('./cars')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/cars', (_request, response) => {
  return response.render('index', { carData })
})

app.all('*', (_request, response) => {
  return response.status(404).send('sorry! page not found')
})

app.listen(7825, () => {
  // eslint-disable-next-line no-console
  console.log('guaranteed ! the port is listening on  7825')
})

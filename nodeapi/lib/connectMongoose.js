'use strict'

const mongoose = require('mongoose')

mongoose.connection.on('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name)
})

mongoose.connection.on('error', err => {
  console.log('Error al conectar a mongodb: ', err)
  process.exit(1)
})
const mongoUri = process.env.MONGODB_URI
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // callback opcional, ya que hemos definido eventos anteriormente

module.exports = mongoose.connection

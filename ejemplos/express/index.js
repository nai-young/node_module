'use strict'

// cargar express y http
const express = require('express')
const http = require('http')

// crear instancia de la aplicación
const app = express()

// definir ruta
app.get('/', (req, res, next) => {
  res.send('home')
})
app.get('/admin', (req, res) => {
  res.send('administración')
})

// arrancar el servidor
const server = http.Server(app)
server.listen(3000, () => {
  console.log('listening on port 3000')
})

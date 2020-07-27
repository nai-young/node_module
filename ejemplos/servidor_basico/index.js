// cargar libreria http
const http = require('http')
const Chance = require('chance')

const chance = new Chance()

// definir un servidor y darle un listener
const server = http.createServer(function (request, response) {
  const nombre = chance.name()

  response.writeHead(200, {
    'Content-type': 'text/html'
  })
  response.end(`Wake up, <b>${nombre} </b>...`)
})

// arrancar el servidor
server.listen(1338, '127.0.0.1')
console.log('Server loaded on http://127.0.0.1:1338')

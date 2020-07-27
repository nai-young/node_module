// cargar libreria http
const http = require('http')

// definir un servidor y darle un listener
const server = http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-type': 'text/html'
  })
  response.end('Wake up, <b>Neo...</b>')
})

// arrancar el servidor
server.listen(1338, '127.0.0.1')
console.log('Server loaded on http://127.0.0.1:1338')

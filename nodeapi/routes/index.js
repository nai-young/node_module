var express = require('express')
var router = express.Router()
// const expressValidator = require('express-validator')
// const query = expressValidator.query
// const validationResult = expressValidator.validationResult
const { query, validationResult } = require('express-validator')

/* GET home page. */
// esto es un middleware
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

// Peticion en la ruta
router.get('/paramenruta/:etiqueta', (req, res, next) => {
  console.log(req.params)
  res.send('ok')
})

// Este no se ejecutaria, porque ya lee en la ruta antes
// Responde con localhost:3000/paramenruta
router.get('/paramenruta/:tag?', (req, res, next) => {
  console.log(req.params)
  res.send('paramenruta ruta')
})

// http://localhost:3000/parametros/rojo/piso/2/puerta/C
router.get('/parametros/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log(req.params)
  res.send('ok')
})

// Peticion en Query String
// http://localhost:3000/enquerystring?color=rojo&talla=L&almacen=madrid
router.get('/enquerystring',
  query('color').isAlpha().withMessage('debería ser texto'),
  (req, res, next) => {
    validationResult(req).throw() // Si no valida, lanza throw
    console.log(req.query)
    res.send('ok en query string')
  }
)

// Petición en el body
// Segun el protocolo no se hace peticion get en el body
router.post('/enelbody', (req, res, next) => {
  console.log(req.body)
  if (req.body.color !== 'rojo') {
    next(new Error('color no admitido: rojo'))
    return
  }
  res.send('ok en el body')
})

module.exports = router

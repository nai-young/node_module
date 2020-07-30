var express = require('express')
var router = express.Router()
// const expressValidator = require('express-validator')
// const query = expressValidator.query
// const validationResult = expressValidator.validationResult
const { query, validationResult } = require('express-validator')

/* GET home page. */
// esto es un middleware
router.get('/', function (req, res, next) {
  // res.locals.title = 'Express' // variables locales de las vistas
  const segundo = new Date().getSeconds() // segundo actual
  res.locals.valor = '<script>alert("Inyección de código");</script>'
  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0 // devuelve true o false
  }
  res.locals.users = [
    { name: 'Smith', age: 39 },
    { name: 'Jones', age: 22 },
    { name: 'Brown', age: 45 }
  ]
  res.render('index')
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
  [ // Validaciones
    query('color').isAlpha().withMessage('debería ser texto'),
    query('talla').isNumeric().withMessage('debería ser numérico')
  ],
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

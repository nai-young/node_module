'use strict'
// controlador de los agentes en el api

var express = require('express')
var router = express.Router()
const Agente = require('../../models/Agente')

// GET /agentes
router.get('/', async (req, res, next) => {
  // Con callback
  /* Agente.find({}, (err, docs) => {
    if (err) throw err
    res.json(docs)
  }) */

  // Con async await
  try {
    const agentes = await Agente.find({})
    res.json(agentes)
  } catch (err) {
    next(err)
  }
})

module.exports = router

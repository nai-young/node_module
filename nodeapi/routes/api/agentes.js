'use strict'
// controlador de los agentes en el api

var express = require('express')
var router = express.Router()
const multer = require('multer')
const Agente = require('../../models/Agente')

// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const prefix = `${file.fieldname}_${Date.now()}_${file.originalname}`
    cb(null, prefix)
  }
})
const upload = multer({ storage: storage })

// GET /api/agentes
router.get('/', async (req, res, next) => {
  // Con callback
  /* Agente.find({}, (err, docs) => {
    if (err) throw err
    res.json(docs)
  }) */

  // Con async await
  try {
    const name = req.query.name
    const age = req.query.age
    const limit = parseInt(req.query.limit || 5)
    const skip = parseInt(req.query.skip)
    const sort = req.query.sort
    const fields = req.query.fields
    const filter = {}
    if (name) {
      filter.name = name
    }
    if (age) {
      filter.age = age
    }
    const agentes = await Agente.lista(filter, limit, skip, sort, fields)
    res.json(agentes)
  } catch (err) {
    next(err)
  }
})

// GET /api/agentes/:_id
router.get('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id
    const agente = await Agente.findOne({ _id: _id })
    if (!agente) {
      res.json({ result: 'Agente no encontrado' }).status(404)
    }
    res.json({ result: agente })
  } catch (error) {
    if (error) {
      next(error)
    }
  }
})

// POST /api/agentes
router.post('/', async (req, res, next) => {
  try {
    // recuperar datos de entrada
    const agenteData = req.body

    // creamos el documento en memoria
    const agente = new Agente(agenteData)

    // guardamos en db
    const agenteGuardado = await agente.save()

    res.json({ result: agenteGuardado })
  } catch (error) {
    next(error)
  }
})

// PUT /api/agentes/_id
router.put('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id
    const agenteData = req.body

    const agenteGuardado = await Agente.findOneAndUpdate({ _id: _id }, agenteData, {
      new: true,
      useFindAndModify: false
    })
    res.json({ result: agenteGuardado })
  } catch (error) {
    next(error)
  }
})

// DELETE /api/agentes/_id
router.delete('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id
    await Agente.deleteOne({ _id: _id })
    res.json()
  } catch (error) {
    next(error)
  }
})

router.post('/upload', upload.single('image'), (req, res, next) => {
  // 'image' is postman key
  console.log(req.file)
  res.send('ok')
})

module.exports = router

'use strict'

const mongoose = require('mongoose')

// crear esquema
const agenteSchema = new mongoose.Schema({
  name: String,
  age: Number
  // phones: [String]
  // message: mongoose.Schema.Types.Mixed // puede ir cualquier tipo de dato
}
// , { collection: agentes } // para evitar la plurización
)

// método estático
agenteSchema.statics.lista = function (filter, limit, skip, sort) { // no arrow function, modifica el this
  const query = Agente.find(filter)
  query.limit(limit)
  query.skip(skip)
  query.sort(sort)
  return query.exec()
}

// crear modelo
const Agente = mongoose.model('Agente', agenteSchema)

// exportar esquema
module.exports = Agente

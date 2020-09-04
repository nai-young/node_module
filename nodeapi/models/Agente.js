'use strict'

const mongoose = require('mongoose')

// crear esquema
const agenteSchema = new mongoose.Schema({
  name: String,
  // name: { type: String, required: true }
  age: Number
  // phones: [String]
  // message: mongoose.Schema.Types.Mixed // puede ir cualquier tipo de dato
}
// , { collection: agentes } // para evitar la plurización
)

// crear modelo
const Agente = mongoose.model('Agente', agenteSchema)

// exportar esquema
module.exports = Agente

'use strict'

// require('dotenv').config()

const readLine = require('readline')
const conn = require('./lib/connectMongoose')
const Agente = require('./models/Agente')

conn.once('open', async () => {
  try {
    const respuesta = await askUser('¿Seguro que quieres inicializar la BD con datos iniciales? (no)')
    if (respuesta.toLowerCase() !== 'si') {
      console.log('Proceso abortado')
      return process.exit(0)
    }
    await initAgentes()
    // await initUsuarios()
    // await init...

    // cerrar conexion
    conn.close()
  } catch (error) {
    console.log('Error: ', error)
    process.exit(1)
  }
})

async function initAgentes () {
  // borrar documentos de la colección
  console.log('Vaciando colección de agentes...')
  await Agente.deleteMany()

  // cargar documentos iniciales
  console.log('Cargando agentes...')
  const result = await Agente.insertMany([
    { name: 'Smith', age: 30 },
    { name: 'Brown', age: 45 }
  ])
  console.log(`Se han insertado ${result.length} agentes`)
}

function askUser (pregunta) {
  return new Promise((resolve, reject) => {
    const rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(pregunta, answer => {
      rl.close()
      resolve(answer)
    })
  })
}

'use strict'

const conn = require('./lib/connectMongoose')
const Agente = require('./models/Agente')

conn.once('open', async () => {
  try {
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

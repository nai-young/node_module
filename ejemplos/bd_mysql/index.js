'use strict'

// cargar el drivier
const mysql = require('mysql')

// crear una conexión
const connection = mysql.createConnection({
  host: 'didimo.es',
  user: 'usuariocurso',
  password: 'us3r',
  database: 'cursonode'
})

// conectar al servidor
connection.connect(err => {
  if (err) {
    console.log('Error al conectar al servidor', err)
    return
  }
  console.log('Conectado a MySQL')

  // lanzar una consulta
  // callback: que hacer cuando recupere los datos
  connection.query('SELECT * FROM agentes', (err, rows, fields) => {
    if (err) {
      console.log('Error en la consulta', err)
      return
    }
    console.log(rows)

    // cerrar la conexión (ya tenemos los datos)
    connection.end()
  })
})

// Agente.find({ age: 30 }) == select * from agentes where age = 30
'use strict'

function Fruta (nombre) {
  this.nombre = nombre
  this.saluda = function () {
    console.log(`hola, soy ${this.nombre}`)
  }
}

const naranja = new Fruta('naranja')
// naranja.saluda()

// no se ponen los parentesis por que no se va a ejecutar, solo asignar a una variable
// const saludador = naranja.saluda
// saludador()

setTimeout(naranja.saluda.bind(naranja), 2000)

// Ejecutar el metodo saluda de Fruta en el objeto pepe
const pepe = {
  nombre: 'Pepe'
}

naranja.saluda.call(pepe)
naranja.saluda.apply(pepe)

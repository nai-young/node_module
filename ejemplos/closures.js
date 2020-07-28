'use strict'

function creaSumador (a) {
  // argumento a con un 5
  // y este contexto es capturado por la función que creamos y retornamos
  return function (b) {
    return a + b
  }
}
const suma5 = creaSumador(5)
console.log(suma5(3), suma5(5))

// crear un factory de objetos (constructor)
// la funcion getNombre no pierde el contexto de la funcion superior
function creaAgente (nombre) {
  return {
    getNombre: function () {
      return nombre
    },
    setNombre: function (valor) {
      nombre = valor
    },
    saluda: function () {
      console.log(`hola, soy ${nombre}`)
    }
  }
}

const jones = creaAgente('Jones')
jones.saluda()

setTimeout(jones.saluda, 2000)

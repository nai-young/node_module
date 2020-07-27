'use strict'

// crear una función para usarla como constructor de objetos
function Fruta (nombre) {
  // this hace referencia al objeto que se va a crear
  this.nombre = nombre
  this.getNombre = function () {
    return this.nombre
  }
  // al utilizar esta función con "new", devolverá this
}

const limon = new Fruta('limón')
console.log(limon.getNombre())

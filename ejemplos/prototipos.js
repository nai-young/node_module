'use strict'

// definimos una función constructora de objetos
function Persona (nombre) {
  this.nombre = nombre
}

// crear un objeto
const luis = new Persona('Luis')

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function () {
  console.log(`hola, me llamo ${this.nombre}`)
}
luis.saluda()

// herencia de persona
function Agente (nombre) {
  // heredar el constructor de persona
  Persona.call(this, nombre)
}

// heredar sus propiedades y métodos
// creamos un objeto que hereda el prototipo de Persona y se lo da a los Agentes
Agente.prototype = Object.create(Persona.prototype)

// en el prototype anterior hemos pisado en prototype, le aseguramos en constructor
Agente.prototype.constructor = Agente

const smith = new Agente('Smith')
smith.saluda()

// comprobamos la herencia
console.log(smith instanceof Agente)
console.log(smith instanceof Persona)
console.log(smith instanceof Object)

// herencia múltiple
function Superheroe () {
  this.vuela = function () {
    console.log(`${this.nombre} vuela`)
  }
}
// copiar propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe())

smith.vuela()

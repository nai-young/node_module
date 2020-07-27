'use strict'

console.log('Empiezo')

function escribeTras2Segundos (texto, callback) {
  setTimeout(() => {
    console.log(texto)
    callback()
  }, 2000)
}

escribeTras2Segundos('Texto1', () => {
  escribeTras2Segundos('Texto2', () => {
    console.log('Termino')
  })
})

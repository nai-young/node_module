'use strict'

console.log('Empiezo')

function escribeTras2Segundos (texto, callback) {
  setTimeout(() => {
    console.log(texto)
    callback()
  }, 2000)
}

// en serie
function serie (n, fnAEjecutar, callback) {
  if (n === 0) {
    callback()
    return
  }
  n = n - 1
  fnAEjecutar('Texto ' + n, () => {
    serie(n, fnAEjecutar, callback)
  })
}
serie(5, escribeTras2Segundos, () => {
  console.log('Terminado')
})

// en paralelo
for (let i = 0; i < 5; i++) {
  escribeTras2Segundos('Texto' + i, () => {})
}

'use strict'

// funcion que devuelve una promesa
function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // si falla llama a reject
      resolve('Resolve')
      reject(new Error('Error!'))
    }, ms)
  })
}

// convertir function setTimeout callback a promesa sleep1
const sleep1 = ms => new Promise(resolve => setTimeout(resolve, ms))

const promesa = sleep(3000)
console.log(promesa)

// cuando se resuelva la promesa 
promesa.then((value) => {
  console.log('Finish', value)
  // esperar otros 3 segundos
  return sleep(3000)
}).then(() => {
  console.log('Finish second')
}).catch(err => {
  console.log('Error calling promise: ', err.message)
})

Promise.all([sleep(1000), sleep(2000), sleep(3000)])
  .then(() => { // se activa cuando se active la ultima
    console.log('Acabado los 3')
  })


'use strict'

function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // si falla llama a reject
      resolve('Resolve')
      reject(new Error('Error!'))
    }, ms)
  })
}
// con await se resuelve la promesa y devuelve el resultado, sino daría la Promise{}
const resultado = await sleep(3000)
'use strict'

function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // si falla llama a reject
      resolve('Resultado!')
      // reject(new Error('Error!'))
    }, ms)
  })
}

// con await se resuelve la promesa y devuelve el resultado, sino daría la Promise{}
async function result() {
  const resultado = await sleep(3000)
  console.log(resultado)

  const resultado2 = await sleep(3000)
  console.log(resultado2)
}
result().catch(err => {
  console.log('Error: ', err)
})
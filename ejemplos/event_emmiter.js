'use strict'

const EventEmmiter = require('events')

// creo una instancia de emisor de eventos
const emisor = new EventEmmiter()

// suscribirse al evento
// al recibir el evento
emisor.on('llamada de telefono', (options) => {
  if (options.entrante === 'mama') {
    return
  }
  console.log('ring ring')
})

// la primera vez que se ejecuta el evento
emisor.once('llamada de telefono', (options) => {
  console.log('brr brr')
})

emisor.emit('llamada de telefono', { entrante: 'mama' }) // vibra
/* emisor.emit('llamada de telefono') // no vibra
emisor.emit('llamada de telefono') // no vibra */

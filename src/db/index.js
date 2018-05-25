import mongoose from 'mongoose'

const connectionString = 'mongodb://proto-concursos:proto-concursos@ds163689.mlab.com:63689/concursos-box'

export default function () {
  return mongoose.connect(connectionString).then(() => {
    console.log('conectado ao banco')
  })
}


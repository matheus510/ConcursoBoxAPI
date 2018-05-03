import mongoose from 'mongoose'

const connectionString = 'mongodb://admin:admin@ds038319.mlab.com:38319/mylearning'

export default function () {
  return mongoose.connect(connectionString).then(() => {
    console.log('conectado ao banco')
  })
}


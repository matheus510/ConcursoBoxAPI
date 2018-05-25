import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  hash_password: {
    type: String,
    required: false
  },
  token: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Usuario', UsuarioSchema);
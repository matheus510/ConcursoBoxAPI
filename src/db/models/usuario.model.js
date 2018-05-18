import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hash_password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

UsuarioSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password)
}

export default mongoose.model('Usuario', UsuarioSchema);
import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
  nome: String,
  email: String
})

export default mongoose.model('Usuario', UsuarioSchema);
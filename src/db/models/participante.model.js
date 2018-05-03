import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let ParticipanteSchema = new Schema({
  nome: String,
  cpf: String,
  cep: Object,
  telefone: Object,
  redesSociais: Object,
  envios: Object
})

export default mongoose.model('Participante', ParticipanteSchema);
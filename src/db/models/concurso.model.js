import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let ConcursoSchema = new Schema({
    nome: String,
    realizadores: Array,
    patrocinadores: Array,
    dataInicio: { type: Date },
    dataTermino: { type: Date },
    participantes: Array,
    terminado: Boolean
})

export default mongoose.model('Concurso', ConcursoSchema);
import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let ConcursoSchema = new Schema({
    nome: String,
    realizadores: Array,
    patrocinadores: Array,
    dataInicio: { type: Date },
    dataTermino: { type: Date },
    participantes: Array
})

export default mongoose.model('Concurso', ConcursoSchema);
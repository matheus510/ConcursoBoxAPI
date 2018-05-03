import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let ConcursoSchema = new Schema({
    nome: String,
    logoUrl: String,
    regulamentoUrl: String,
    camposCadastro: Object,
    camposConcurso: Object,
    layout: Object
})

export default mongoose.model('Concurso', ConcursoSchema);
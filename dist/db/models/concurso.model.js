'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ConcursoSchema = new Schema({
    nome: String,
    realizadores: Array,
    patrocinadores: Array,
    dataInicio: { type: Date },
    dataTermino: { type: Date },
    participantes: Array,
    terminado: Boolean
});

exports.default = _mongoose2.default.model('Concurso', ConcursoSchema);
//# sourceMappingURL=concurso.model.js.map
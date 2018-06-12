'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ParticipanteSchema = new Schema({
  nome: String,
  cpf: String,
  cep: Object,
  telefone: Object,
  redesSociais: Object,
  envios: Object
});

exports.default = _mongoose2.default.model('Participante', ParticipanteSchema);
//# sourceMappingURL=participante.model.js.map
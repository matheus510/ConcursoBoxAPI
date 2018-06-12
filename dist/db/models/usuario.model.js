'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UsuarioSchema = new Schema({
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
});

exports.default = _mongoose2.default.model('Usuario', UsuarioSchema);
//# sourceMappingURL=usuario.model.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _concurso = require('./concurso.routes');

var _concurso2 = _interopRequireDefault(_concurso);

var _participante = require('./participante.routes');

var _participante2 = _interopRequireDefault(_participante);

var _usuario = require('./usuario.routes');

var _usuario2 = _interopRequireDefault(_usuario);

var _auth = require('./auth.routes');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = (0, _express.Router)();

api.use('/concursos', _concurso2.default);

api.use('/participantes', _participante2.default);

api.use('/usuarios', _usuario2.default);

api.use('/auth', _auth2.default);

exports.default = api;
//# sourceMappingURL=index.js.map
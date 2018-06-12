'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _participante = require('../controllers/participante.controllers');

var participanteController = _interopRequireWildcard(_participante);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var api = (0, _express.Router)();

api.get('/', participanteController.findAll);

api.get('/:participanteId', participanteController.findOne);

api.post('/', participanteController.create);

api.put('/:participanteId', participanteController.update);

api.delete('/:participanteId', participanteController.remove);

exports.default = api;
//# sourceMappingURL=participante.routes.js.map
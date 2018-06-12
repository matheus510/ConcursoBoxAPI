'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _usuario = require('../controllers/usuario.controllers');

var usuarioController = _interopRequireWildcard(_usuario);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var api = (0, _express.Router)();

api.get('/', usuarioController.findAll);

api.post('/', usuarioController.create);

api.get('/login', usuarioController.login);

api.get('/:usuarioId', usuarioController.findOne);

api.put('/:usuarioId', usuarioController.update);

api.delete('/:usuarioId', usuarioController.remove);

exports.default = api;
//# sourceMappingURL=usuario.routes.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _concurso = require('../controllers/concurso.controllers');

var concursoController = _interopRequireWildcard(_concurso);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var api = (0, _express.Router)();

api.get('/', concursoController.findAll);

api.get('/terminados', concursoController.findAllFinished);

api.get('/:concursoId', concursoController.findOne);

api.post('/', concursoController.create);

api.put('/:concursoId', concursoController.update);

api.delete('/:concursoId', concursoController.remove);

exports.default = api;
//# sourceMappingURL=concurso.routes.js.map
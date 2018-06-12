'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _mongoose2.default.connect(connectionString).then(function () {
    console.log('conectado ao banco');
  });
};

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectionString = 'mongodb://proto-concursos:proto-concursos@ds163689.mlab.com:63689/concursos-box';
//# sourceMappingURL=index.js.map
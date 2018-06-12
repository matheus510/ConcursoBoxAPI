'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./api/routes/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _index3 = require('./db/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.server = _http2.default.createServer(app);
(0, _index4.default)();
// logger
app.use((0, _morgan2.default)('dev'));

// 3rd party middleware
app.use((0, _cors2.default)({
	exposedHeaders: _config2.default.corsHeaders
}));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded());
//auth middleware
/* app.use(function (req, res, next) {
	if (req.headers && req.headers.authorization && req.headers.authorization.split('	')[0] === 'JWT') {
		jwt.verify(req.headers.authorization.split('	')[1])
	}
}) */

app.use('/api', _index2.default);

app.server.listen(process.env.PORT || _config2.default.port, function () {
	console.log('porta ' + app.server.address().port);
});

exports.default = app;
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.create = create;
exports.login = login;
exports.findAll = findAll;
exports.findOne = findOne;
exports.update = update;
exports.remove = remove;

var _usuario = require("../../db/models/usuario.model");

var _usuario2 = _interopRequireDefault(_usuario);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
	var newUser = {
		nome: req.body.token.split("@")[0],
		hash_password: req.body.token.split("@")[1],
		token: req.body.token
	};
	var data = new _usuario2.default(newUser);
	data.save().then(function (data) {
		res.send(data);
	}).catch(function (err) {
		res.status(500).send({
			message: err.message || "Erro ao criar o concurso."
		});
	});
}

function login(req, res) {
	var token = req.headers['authorization'].split("@");
	var queryObj = {
		'nome': token[0],
		'hash_password': token[1]
	};
	var query = _usuario2.default.find(queryObj);

	query.exec(query, function (err, usuario) {
		if (err) {
			//handle query error
			console.log('erro na query');
		} else {
			var responseObj = {
				authorized: true,
				usuario: usuario[0]
			};
			res.send(responseObj);
		}
	});
}

function findAll(req, res) {
	_usuario2.default.find().then(function (data) {
		res.send(data);
	}).catch(function (err) {
		res.status(500).send({
			message: err.message || "Erro ao criar o usuario."
		});
	});
}

function findOne(req, res) {
	_usuario2.default.findById(req.params.usuarioId).then(function (usuario) {
		if (!usuario) {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			});
		}
	});
}

function update(req, res) {
	_usuario2.default.findByIdAndUpdate(req.params.usuarioId, req.body, { new: true }).then(function (usuario) {
		if (!usuario) {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			});
		}
		res.send(usuario);
	}).catch(function (err) {
		if (err.kind === 'ObjectId') {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			});
		}
		return res.status(500).send({
			message: "Error updating usuario with id " + req.params.usuarioId
		});
	});
}

function remove(req, res) {
	_usuario2.default.findByIdAndRemove(req.params.usuarioId).then(function (usuario) {
		if (!usuario) {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			});
		}
		res.send({ message: "usuario deleted successfully!" });
	}).catch(function (err) {
		if (err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			});
		}
		return res.status(500).send({
			message: "Could not delete usuario with id " + req.params.usuarioId
		});
	});
}
//# sourceMappingURL=usuario.controllers.js.map
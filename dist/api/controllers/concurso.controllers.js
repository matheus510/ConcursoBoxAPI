"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.create = create;
exports.findAllFinished = findAllFinished;
exports.findAll = findAll;
exports.findOne = findOne;
exports.update = update;
exports.remove = remove;

var _concurso = require("../../db/models/concurso.model");

var _concurso2 = _interopRequireDefault(_concurso);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
	// Validate request
	if (!req.body) {
		return res.status(400).send({
			message: "Concurso não pode ser vazio"
		});
	}
	// Criar concurso
	var concursoObj = new _concurso2.default({
		nome: req.body.nome,
		realizadores: req.body.realizadores,
		patrocinadores: req.body.patrocinadores,
		dataInicio: req.body.dataInicio,
		dataTermino: req.body.dataTermino,
		participantes: req.body.participantes,
		terminado: req.body.terminado ? req.body.terminado : false
	});
	// Salvar concurso
	concursoObj.save().then(function (data) {
		res.send(data);
	}).catch(function (err) {
		res.status(500).send({
			message: err.message || "Erro ao criar o concurso."
		});
	});
}

function findAllFinished(req, res) {
	// Salvar concurso
	_concurso2.default.find({ "terminado": true }).then(function (data) {
		var resObj = data.map(function (concurso) {
			return {
				id: concurso._id,
				nome: concurso.nome,
				dataInicio: concurso.dataInicio,
				dataTermino: concurso.dataTermino,
				participantes: concurso.participantes.length,
				terminado: concurso.terminado ? concurso.terminado : false
			};
		});
		res.send(resObj);
	}).catch(function (err) {
		res.status(500).send({
			message: err.message || "Erro ao criar o concurso."
		});
	});
}

function findAll(req, res) {
	// Salvar concurso
	_concurso2.default.find({ "terminado": false }).then(function (data) {
		var resObj = data.map(function (concurso) {
			return {
				id: concurso._id,
				nome: concurso.nome,
				dataInicio: concurso.dataInicio,
				dataTermino: concurso.dataTermino,
				participantes: concurso.participantes.length
			};
		});
		res.send(resObj);
	}).catch(function (err) {
		res.status(500).send({
			message: err.message || "Erro ao criar o concurso."
		});
	});
}

function findOne(req, res) {
	_concurso2.default.findById(req.params.concursoId).then(function (concurso) {
		if (!concurso) {
			return res.status(404).send({
				message: "concurso not found with id " + req.params.concursoId
			});
		}
		res.send(concurso);
	}).catch(function (err) {
		if (err.kind === 'ObjectId') {
			return res.status(404).send({
				message: "concurso not found with id " + req.params.concursoId
			});
		}
		return res.status(500).send({
			message: "Error retrieving concurso with id " + req.params.concursoId
		});
	});
}

function update(req, res) {
	_concurso2.default.findByIdAndUpdate(req.params.concursoId, req.body, { new: true }).then(function (concurso) {
		if (!concurso) {
			return res.status(404).send({
				message: "concurso not found with id " + req.params.concursoId
			});
		}
		res.send(concurso);
	}).catch(function (err) {
		if (err.kind === 'ObjectId') {
			return res.status(404).send({
				message: "concurso not found with id " + req.params.concursoId
			});
		}
		return res.status(500).send({
			message: "Error updating concurso with id " + req.params.concursoId
		});
	});
}

function remove(req, res) {
	_concurso2.default.findByIdAndRemove(req.params.concursoId).then(function (concurso) {
		if (!concurso) {
			return res.status(404).send({
				message: "concurso not found with id " + req.params.concursoId
			});
		}
		res.send({ message: "concurso deleted successfully!" });
	}).catch(function (err) {
		if (err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).send({
				message: "concurso not found with id " + req.params.concursoId
			});
		}
		return res.status(500).send({
			message: "Could not delete concurso with id " + req.params.concursoId
		});
	});
}
//# sourceMappingURL=concurso.controllers.js.map
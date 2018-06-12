'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.create = create;
exports.findAll = findAll;
exports.findOne = findOne;
exports.update = update;
exports.remove = remove;

var _participante = require('../../db/models/participante.model');

var _participante2 = _interopRequireDefault(_participante);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s3 = new _awsSdk2.default.S3();

function create(req, res) {

				// Validate request
				if (!req.body) {
								return res.status(400).send({
												message: "participante não pode ser vazio"
								});
				}
				// Criar participante
				var participanteObj = new _participante2.default({
								nome: req.body.nome,
								cpf: req.body.cpf,
								cep: req.body.cep,
								telefone: req.body.telefone,
								redesSociais: req.body.redesSociais,
								envios: req.body.envios
				});
				// Salvar participante
				participanteObj.save().then(function (data) {
								res.send(data);
				}).catch(function (err) {
								res.status(500).send({
												message: err.message || "Erro ao criar o participante."
								});
				});
}

function findAll(req, res) {
				// Salvar participante
				_participante2.default.find().then(function (data) {
								res.send(data);
				}).catch(function (err) {
								res.status(500).send({
												message: err.message || "Erro ao criar o participante."
								});
				});
}

function findOne(req, res) {
				_participante2.default.findById(req.params.participanteId).then(function (participante) {
								if (!participante) {
												return res.status(404).send({
																message: "participante not found with id " + req.params.participanteId
												});
								}
								res.send(participante);
				}).catch(function (err) {
								if (err.kind === 'ObjectId') {
												return res.status(404).send({
																message: "participante not found with id " + req.params.participanteId
												});
								}
								return res.status(500).send({
												message: "Error retrieving participante with id " + req.params.participanteId
								});
				});
}

function update(req, res) {
				_participante2.default.findByIdAndUpdate(req.params.participanteId, req.body, { new: true }).then(function (participante) {
								if (!participante) {
												return res.status(404).send({
																message: "participante not found with id " + req.params.participanteId
												});
								}
								res.send(participante);
				}).catch(function (err) {
								if (err.kind === 'ObjectId') {
												return res.status(404).send({
																message: "participante not found with id " + req.params.participanteId
												});
								}
								return res.status(500).send({
												message: "Error updating participante with id " + req.params.participanteId
								});
				});
}

function remove(req, res) {
				_participante2.default.findByIdAndRemove(req.params.participanteId).then(function (participante) {
								if (!participante) {
												return res.status(404).send({
																message: "participante not found with id " + req.params.participanteId
												});
								}
								res.send({ message: "participante deleted successfully!" });
				}).catch(function (err) {
								if (err.kind === 'ObjectId' || err.name === 'NotFound') {
												return res.status(404).send({
																message: "participante not found with id " + req.params.participanteId
												});
								}
								return res.status(500).send({
												message: "Could not delete participante with id " + req.params.participanteId
								});
				});
}
//# sourceMappingURL=participante.controllers.js.map
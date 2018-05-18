import Usuario from '../../db/models/usuario.model'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export function create(req, res) {
	
}

export function findAll(req, res) {
	// Salvar usuario
	Usuario.find()
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Erro ao criar o usuario."
		})
	})
}

export function findOne(req, res) {
	Usuario.findById(req.params.usuarioId)
	.then(usuario => {
		if(!usuario) {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			})
		}
	})
}

export function update(req, res) {
	Usuario.findByIdAndUpdate(req.params.usuarioId, req.body, {new: true})
	.then(usuario => {
		if(!usuario) {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			})
		}
		res.send(usuario)
	}).catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			})                
		}
		return res.status(500).send({
			message: "Error updating usuario with id " + req.params.usuarioId
		})
	})
}

export function remove (req, res) {
	Usuario.findByIdAndRemove(req.params.usuarioId)
	.then(usuario => {
		if(!usuario) {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			})
		}
		res.send({message: "usuario deleted successfully!"})
	}).catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).send({
				message: "usuario not found with id " + req.params.usuarioId
			})                
		}
		return res.status(500).send({
			message: "Could not delete usuario with id " + req.params.usuarioId
		})
	})
}

export function register (req, res) {
	var newUsuario = new Usuario(req.body)
	newUsuario.hash_password = bcrypt.hashSync(req.body.password, 10)
	newUsuario.save(function(err, user) {
		if (err) {
			return res.status(400).send({
				message: err
			})
		} else {
			user.hash_password = undefined
			return res.json(user)
		}
	})
}
export function sign_in (req, res) {
	Usuario.findOne({
		email: req.body.email
	}, function(err, user) {
		if (err) throw err
		if (!user) {
			res.status(401).json({ message: 'Authentication failed. User not found.' })
		} else if (user) {
			if (!user.comparePassword(req.body.password)) {
				res.status(401).json({ message: 'Authentication failed. Wrong password.' })
			} else {
				return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')})
			}
		}
	})
}
export function loginRequired (req, res, next) {
	if (req.user) {
		next()
	} else {
		return res.status(401).json({ message: 'Unauthorized user!' })
	}
}
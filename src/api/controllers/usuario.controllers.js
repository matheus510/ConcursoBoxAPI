import Usuario from '../../db/models/usuario.model'

export function create(req, res) {
	let newUser = {
		nome: req.body.token.split("@")[0],
		hash_password: req.body.token.split("@")[1],
		token: req.body.token
	}
	let data = new Usuario(newUser)
	data.save().then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Erro ao criar o concurso."
		})
	})
}

export function login(req, res) {
	const token = req.headers['authorization'].split("@")
	const queryObj = { 
		'nome': token[0],
		'hash_password': token[1] 
	}
	const query = Usuario.find(queryObj)

	query.exec(query, function (err, usuario) {
		if (err) {
			//handle query error
			console.log('erro na query')
		} else {
			const responseObj = {
				authorized: true,
				usuario: usuario[0]
			}
			res.send(responseObj)
		}
	})
}

export function findAll(req, res) {
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

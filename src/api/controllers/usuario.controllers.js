import Usuario from '../../db/models/usuario.model'

export function create(req, res) {
	console.log('foi pro controller');
	// Validate request
	if (!req.body) {
		return res.status(400).send({
			message: "Usuario não pode ser vazio"
		});
	}
	// Criar usuario
	const usuarioObj = new Usuario({
		nome: req.body.nome,
		email: req.body.email
	});
	// Salvar usuario
	usuarioObj.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Erro ao criar o usuario."
			});
		});
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
            });            
        }
        res.send(usuario);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "usuario not found with id " + req.params.usuarioId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving usuario with id " + req.params.usuarioId
        });
    });
}

export function update(req, res) {
	Usuario.findByIdAndUpdate(req.params.usuarioId, req.body, {new: true})
	.then(usuario => {
			if(!usuario) {
					return res.status(404).send({
							message: "usuario not found with id " + req.params.usuarioId
					});
			}
			res.send(usuario);
	}).catch(err => {
			if(err.kind === 'ObjectId') {
					return res.status(404).send({
							message: "usuario not found with id " + req.params.usuarioId
					});                
			}
			return res.status(500).send({
					message: "Error updating usuario with id " + req.params.usuarioId
			});
	});
}

export function remove (req, res) {
	Usuario.findByIdAndRemove(req.params.usuarioId)
    .then(usuario => {
        if(!usuario) {
            return res.status(404).send({
                message: "usuario not found with id " + req.params.usuarioId
            });
        }
        res.send({message: "usuario deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "usuario not found with id " + req.params.usuarioId
            });                
        }
        return res.status(500).send({
            message: "Could not delete usuario with id " + req.params.usuarioId
        });
    });
}

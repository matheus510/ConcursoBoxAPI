import Participante from '../../db/models/participante.model'

export function create(req, res) {

	// Validate request
	if (!req.body) {
		return res.status(400).send({
			message: "participante não pode ser vazio"
		})
	}
	// Criar participante
	const participanteObj = new Participante({
		nome: req.body.nome,
    cpf: req.body.cpf,
    cep: req.body.cep,
    telefone: req.body.telefone,
    redesSociais: req.body.redesSociais,
    envios: req.body.envios
	})
	// Salvar particiopante
	participanteObj.save()
		.then(data => {
			res.send(data)
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Erro ao criar o particiopante."
			})
		})
}

export function findAll(req, res) {
	// Salvar particiopante
	Participante.find()
		.then(data => {
			res.send(data)
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Erro ao criar o participante."
			})
		})
}

export function findOne(req, res) {
	Participante.findById(req.params.participanteId)
    .then(participante => {
        if(!participante) {
            return res.status(404).send({
                message: "participante not found with id " + req.params.participanteId
            })            
        }
        res.send(participante)
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "participante not found with id " + req.params.participanteId
            })                
        }
        return res.status(500).send({
            message: "Error retrieving participante with id " + req.params.participanteId
        })
    })
}

export function update(req, res) {
	Participante.findByIdAndUpdate(req.params.participanteId, req.body, {new: true})
	.then(participante => {
			if(!participante) {
					return res.status(404).send({
							message: "participante not found with id " + req.params.participanteId
					})
			}
			res.send(participante)
	}).catch(err => {
			if(err.kind === 'ObjectId') {
					return res.status(404).send({
							message: "participante not found with id " + req.params.participanteId
					})                
			}
			return res.status(500).send({
					message: "Error updating participante with id " + req.params.participanteId
			})
	})
}

export function remove (req, res) {
	Participante.findByIdAndRemove(req.params.participanteId)
    .then(participante => {
        if(!participante) {
            return res.status(404).send({
                message: "participante not found with id " + req.params.participanteId
            })
        }
        res.send({message: "participante deleted successfully!"})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "participante not found with id " + req.params.participanteId
            })                
        }
        return res.status(500).send({
            message: "Could not delete participante with id " + req.params.participanteId
        })
    })
}

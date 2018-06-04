import Concurso from '../../db/models/concurso.model'

export function create(req, res) {
	// Validate request
	if (!req.body) {
		return res.status(400).send({
			message: "Concurso não pode ser vazio"
		});
	}
	// Criar concurso
	const concursoObj = new Concurso({
		nome: req.body.nome,
		realizadores: req.body.realizadores,
		patrocinadores: req.body.patrocinadores,
		dataInicio: req.body.dataInicio,
		dataTermino: req.body.dataTermino,
		participantes: req.body.participantes
	});
	// Salvar concurso
	concursoObj.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Erro ao criar o concurso."
			});
		});
}

export function findAll(req, res) {
	// Salvar concurso
	Concurso.find()
		.then(data => {
			const resObj = data.map(concurso => {
				return {
					id: concurso._id,
					nome: concurso.nome,
					dataInicio: concurso.dataInicio,
					dataTermino: concurso.dataTermino,
					participantes: concurso.participantes.length
				}
			})
			res.send(resObj)
		}).catch(err => {
			res.status(500).send({
				message: err.message || "Erro ao criar o concurso."
			})
		})
}

export function findOne(req, res) {
	Concurso.findById(req.params.concursoId)
    .then(concurso => {
        if(!concurso) {
            return res.status(404).send({
                message: "concurso not found with id " + req.params.concursoId
            });            
        }
        res.send(concurso);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "concurso not found with id " + req.params.concursoId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving concurso with id " + req.params.concursoId
        });
    });
}

export function update(req, res) {
	Concurso.findByIdAndUpdate(req.params.concursoId, req.body, {new: true})
	.then(concurso => {
			if(!concurso) {
					return res.status(404).send({
							message: "concurso not found with id " + req.params.concursoId
					});
			}
			res.send(concurso);
	}).catch(err => {
			if(err.kind === 'ObjectId') {
					return res.status(404).send({
							message: "concurso not found with id " + req.params.concursoId
					});                
			}
			return res.status(500).send({
					message: "Error updating concurso with id " + req.params.concursoId
			});
	});
}

export function remove (req, res) {
	Concurso.findByIdAndRemove(req.params.concursoId)
    .then(concurso => {
        if(!concurso) {
            return res.status(404).send({
                message: "concurso not found with id " + req.params.concursoId
            });
        }
        res.send({message: "concurso deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "concurso not found with id " + req.params.concursoId
            });                
        }
        return res.status(500).send({
            message: "Could not delete concurso with id " + req.params.concursoId
        });
    });
}

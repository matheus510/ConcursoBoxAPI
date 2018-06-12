import { Router } from 'express'
import * as concursoController from '../controllers/concurso.controllers'

let api = Router()

api.get('/', concursoController.findAll)

api.get('/terminados', concursoController.findAllFinished)

api.get('/:concursoId', concursoController.findOne)

api.post('/', concursoController.create)

api.put('/:concursoId', concursoController.update)

api.delete('/:concursoId', concursoController.remove)

export default api

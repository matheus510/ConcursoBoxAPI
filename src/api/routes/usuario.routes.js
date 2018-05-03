import { Router } from 'express'
import * as usuarioController from '../controllers/usuario.controllers'

let api = Router()

api.get('/', usuarioController.findAll)

api.get('/:usuarioId', usuarioController.findOne)

api.post('/', usuarioController.create)

api.put('/:usuarioId', usuarioController.update)

api.delete('/:usuarioId', usuarioController.remove)

export default api

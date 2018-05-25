import { Router } from 'express'
import * as usuarioController from '../controllers/usuario.controllers'

const api = Router()

api.get('/', usuarioController.findAll)

api.post('/', usuarioController.create)

api.get('/login', usuarioController.login)

api.get('/:usuarioId', usuarioController.findOne)

api.put('/:usuarioId', usuarioController.update)

api.delete('/:usuarioId', usuarioController.remove)

export default api

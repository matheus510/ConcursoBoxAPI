import { Router } from 'express'
import * as usuarioController from '../controllers/usuario.controllers'

let api = Router()

api.post('/register', usuarioController.register)

api.post('/sign_in', usuarioController.sign_in)

export default api

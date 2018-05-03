import { Router } from 'express'
import * as participanteController from '../controllers/participante.controllers'

let api = Router()

api.get('/', participanteController.findAll)

api.get('/:participanteId', participanteController.findOne)

api.post('/', participanteController.create)

api.put('/:participanteId', participanteController.update)

api.delete('/:participanteId', participanteController.remove)

export default api

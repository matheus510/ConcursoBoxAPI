import { Router } from 'express'
import concursoRoutes from './concurso.routes'
import participanteRoutes from './participante.routes'
import usuarioRoutes from './usuario.routes'
import authRoutes from './auth.routes'

let api = Router()

api.use('/concursos', concursoRoutes)

api.use('/participantes', participanteRoutes)

api.use('/usuarios', usuarioRoutes)

api.use('/auth', authRoutes)

export default api

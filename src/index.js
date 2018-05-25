import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import routes from './api/routes/index'
import config from './config.json'
import dbInit from './db/index'

let app = express()

app.server = http.createServer(app)
dbInit()
// logger
app.use(morgan('dev'))

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
//auth middleware
/* app.use(function (req, res, next) {
	if (req.headers && req.headers.authorization && req.headers.authorization.split('	')[0] === 'JWT') {
		jwt.verify(req.headers.authorization.split('	')[1])
	}
}) */

app.use('/api', routes)

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`porta ${app.server.address().port}`)
})

export default app

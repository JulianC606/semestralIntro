import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/api'
import { connectDB } from './database'

// Initialization
const app = express()

// DB Connection
connectDB()

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')))
}
// Api Router
app.use('/api', indexRouter)

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../client/build/index.html')) })
}

export default app

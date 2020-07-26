import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/api'
import s3Proxy from 's3-proxy'

import { connectDB } from './database'
import dotenv from 'dotenv'

// Initialization
const app = express()
dotenv.config()

// DB Connection
connectDB()

// Initialize S3Proxy

const proxy = s3Proxy({
  bucket: 'intro-grupo2',
  prefix: '',
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  overrideCacheControl: 'max-age=100000',
  defaultKey: 'prueba.png'
})

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')))
}

// Media files
app.get('/media/*', proxy)

// Api Router
app.use('/api', indexRouter)

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../client/build/index.html')) })
}

export default app

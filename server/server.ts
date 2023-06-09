import express from 'express'
import { join } from 'node:path'
import adventure from './routes/adventure'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/adventure', adventure)

export default server

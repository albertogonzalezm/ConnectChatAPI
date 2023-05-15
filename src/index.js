import { config } from 'dotenv'
config()
import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import * as url from 'url'
// import database from './config/database.js'
import authRoutes from './routes/auth.routes.js'
import messagesRoutes from './routes/messages.routes.js'
import userRoutes from './routes/user.routes.js'

const port = process.env.PORT
const app = express()
const server = createServer(app)
const io = new Server(server)
export const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

app.use('/auth', authRoutes);
app.use('/msg', messagesRoutes);
app.use('/', userRoutes);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})

import mongoose from 'mongoose'

server.listen(port, async () => {
    console.log('Server is listening on http://localhost:3000');
    try {
        // await sequelize.sync({ alter: true });
        // await sequelize.drop();
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to db');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

import { config } from 'dotenv'
config()
import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import * as url from 'url'
import sequelize from './config/database.js'
import UserSchema from './models/users.js'
import MessageSchema from './models/messages.js'

const port = process.env.PORT
const app = express()
const server = createServer(app)
const io = new Server(server)
export const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})

server.listen(port, async () => {
    console.log('Server is listening on http://localhost:3000');
    try {
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

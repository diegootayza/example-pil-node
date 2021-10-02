import http from 'http'
import { Server as SocketIO } from 'socket.io'

import database from './database'
import modules from './modules'

const init = async () => {
    await database()

    const server = http.createServer()
    const io = new SocketIO(server, {
        cors: '*',
    })

    io.on('connection', (socket) => {
        modules(io, socket)
    })

    server.listen(process.env.PORT || 4000, () => {
        console.log('🚀 Server is runing...')
    })
}

init()

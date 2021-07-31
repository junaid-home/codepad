import {Server as SocketServer, Socket} from 'socket.io'
import {Server as httpServer} from 'http'
import {event} from './config/constants'

const socketData: any = {}
const roomData: any = {}

export function initializeSocketServer(server: httpServer) {
  const io = new SocketServer(server, {
    cors: {origin: '*'},
    serveClient: false,
    connectTimeout: 10000,
  })

  io.on(event.CONNECTION, (socket: Socket) => {
    socket.on(event.JOIN_ROOM, data => {
      socket.join(data.roomId)
      socketData[socket.id] = data.roomId

      if (roomData[data.roomId]) {
        roomData[data.roomId] = [
          ...roomData[data.roomId],
          {username: data.username, socketId: socket.id},
        ]
      } else {
        roomData[data.roomId] = [{username: data.username, socketId: socket.id}]
      }

      io.in(socketData[socket.id]).emit(event.UPDATED_USERS, roomData[data.roomId])
    })

    socket.on(event.DISCONNECTION, _reason => {
      socket.leave(socketData[socket.id])
      if (roomData[socketData[socket.id]]) {
        roomData[socketData[socket.id]] = roomData[socketData[socket.id]].filter(
          (x: any) => x.socketId !== socket.id,
        )
        io.in(socketData[socket.id]).emit(
          event.UPDATED_USERS,
          roomData[socketData[socket.id]],
        )
      }
    })

    socket.on(event.SYNC_CODE, data => {
      socket.in(socketData[socket.id]).emit(event.UPDATE_CODE, data)
    })
  })
}

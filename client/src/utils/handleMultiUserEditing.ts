import {Editor, Position} from 'codemirror'
import {event} from './constants'
import restoreRemoteCursor from './add-remote-cursor'
import socket from './socket'
import {SetStateAction, Dispatch} from 'react'

export function joinRoom(data: RoomData) {
  socket.emit(event.JOIN_ROOM, data)
}

export function syncCode(data: RemoteData) {
  socket.emit(event.SYNC_CODE, {
    content: data.content,
    remoteCursor: data.remoteCursor,
    language: data.language,
  })
}

export function registerRoomUpdateListeners(
  editorRef: EditorRef,
  setLanguage: Dispatch<SetStateAction<string>>,
  setActiveUsers: Dispatch<SetStateAction<any[]>>,
) {
  socket.on(event.UPDATED_USERS, users => {
    setActiveUsers(users)
  })

  socket.on(event.UPDATE_CODE, data => {
    if (editorRef.current) {
      const cursor = editorRef.current.getCursor()

      editorRef.current.setValue(data.content)
      restoreRemoteCursor(editorRef.current, data.remoteCursor)
      editorRef.current.setCursor(cursor)
      setLanguage(data.language)
    }
  })
}

interface RemoteData {
  content: string
  remoteCursor: Position
  language: string
}

interface RoomData {
  roomId: string
  username: string
}

interface EditorRef {
  current?: Editor
}

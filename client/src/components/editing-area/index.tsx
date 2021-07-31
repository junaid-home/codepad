import {Fragment, useEffect, useRef, useState} from 'react'
import {Editor} from 'codemirror'
import {useHistory, useLocation} from 'react-router-dom'
import {CodeEditor, EditorHeader, DisplayResults} from '../index'
import {Loader} from '../../components/elements'
import {updateTaskCode, getSingleTask} from '../../utils/api/task'
import socket from '../../utils/socket'
import {
  joinRoom,
  syncCode,
  registerRoomUpdateListeners,
} from '../../utils/handleMultiUserEditing'
import {useAuth} from '../../store/authContext'

function Main() {
  const history = useHistory()
  const location = useLocation()
  const editor = useRef<Editor>()

  const [user] = useAuth()
  const [activeUsers, setActiveUsers] = useState<ActiveUsers[]>([])
  const [id] = useState(() => location.pathname.replace('/task/', ''))
  const [tab, setTab] = useState<'EDITOR' | 'RESULT'>('EDITOR')
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('nodejs')

  const handleChange = (e: Editor) => {
    const position = e.getCursor()
    const value = e.getValue()

    e.setValue(value)
    e.setCursor(position)
    editor.current = e

    syncCode({
      content: value,
      remoteCursor: position,
      language: language,
    })

    setTimeout(() => {
      updateTaskCode({content: e.getValue(), id, language})
    }, 1000 * 10)
  }

  useEffect(() => {
    if (editor.current && code !== editor.current.getValue()) {
      setCode(editor.current.getValue())
    }
  }, [code, language])

  useEffect(() => {
    joinRoom({roomId: id, username: user?.username || ''})
    registerRoomUpdateListeners(editor, setLanguage, setActiveUsers)

    setLoading(true)
    getSingleTask(id)
      .then(response => {
        if (typeof response === 'string') {
          history.replace('/not-found')
          return
        }
        setCode(response.content)
        setLanguage(response.language)
        syncCode({
          content: response.content,
          remoteCursor: {ch: 0, line: 0},
          language: response.language,
        })
      })
      .finally(() => setLoading(false))

    return () => {
      socket.close()
    }
  }, [id, history, user?.username])

  return (
    <Fragment>
      {loading && <Loader />}
      <EditorHeader
        setTab={setTab}
        language={language}
        setLanguage={setLanguage}
        taskId={id}
        activeUsers={activeUsers}
        content={editor.current?.getValue() || code}
      />
      {tab === 'EDITOR' ? (
        <div style={{height: '94vh'}}>
          <CodeEditor
            defaultValue={editor.current?.getValue() || code}
            onChange={e => handleChange(e)}
          />
        </div>
      ) : (
        <DisplayResults data={{code: editor.current?.getValue() || code, language}} />
      )}
    </Fragment>
  )
}

interface ActiveUsers {
  username: string
  socketId: string
}

export default Main

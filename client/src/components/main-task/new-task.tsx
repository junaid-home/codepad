import {Fragment, useState} from 'react'
import ThemeModeSwitch from 'react-dark-mode-toggle'
import {useAuth} from '../../store/authContext'
import {useTheme} from '../../store/themeContext'
import {logout} from '../../utils/api/auth'
import {Loader} from '../elements'
import {NewTaskWrapper, Icon, Title, OneLine, LogoutIcon} from './elements'
import CreateTaskModal from './task-modal'

function NewTask() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [, setUser] = useAuth()
  const [theme, setTheme] = useTheme()

  const handleThemeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handleLogout = async () => {
    setLoading(true)
    await logout()
    setLoading(false)

    setUser(null)
  }

  return (
    <Fragment>
      {loading && <Loader />}
      <CreateTaskModal isOpen={isOpen} onClose={() => setOpen(false)} />
      <OneLine>
        <Title>Create a new Task or use an existing one.</Title>
        <OneLine>
          <LogoutIcon src="/logout.png" alt="logout" onClick={handleLogout} />
          <ThemeModeSwitch
            size={60}
            checked={theme === 'dark'}
            onChange={handleThemeToggle}
          />
        </OneLine>
      </OneLine>
      <NewTaskWrapper onClick={() => setOpen(true)}>
        <Icon>&#9769;</Icon>
      </NewTaskWrapper>
    </Fragment>
  )
}

export default NewTask

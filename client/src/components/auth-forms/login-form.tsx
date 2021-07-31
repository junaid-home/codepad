import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {login} from '../../utils/api/auth'
import {getGoogleOauthUrl} from '../../utils/api/Oauth2'
import {Button, Input, Loader, GoogleIconButton} from '../elements'
import {useAuth} from '../../store/authContext'
import {toast, ToastContainer} from 'react-toastify'
import {
  Wrapper,
  Span,
  Container,
  NavigationTextContainer,
  Link,
  ErrorMessage,
  Center,
  GoogleIconContainer,
} from './elements'

function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [, setUser] = useAuth()

  const handleGoogleAuthUrlRequest = async () => {
    setLoading(true)
    const response = await getGoogleOauthUrl()
    setLoading(false)

    if (typeof response === 'string') toast.error(response)
    else {
      document.location.assign(response.url)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    const user = await login({id, password})
    if (typeof user === 'string') {
      setError(user)
      setLoading(false)
      return
    }

    setUser(user)

    history.replace('/')
  }

  return (
    <Container>
      <ToastContainer />
      <Center>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <GoogleIconContainer>
          <GoogleIconButton onClick={handleGoogleAuthUrlRequest}>
            Login with Google
          </GoogleIconButton>
        </GoogleIconContainer>
        <Wrapper>
          {loading && <Loader />}

          <Span>Please Login to continue.</Span>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                value={id}
                type="text"
                required
                minLength={6}
                maxLength={30}
                onChange={e => setId(e.target.value)}
                placeholder="Email / Username"
                name="id"
              />
              <Input
                value={password}
                required
                minLength={6}
                maxLength={30}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
            <Button type="submit" modifiers={['w100', 'large']}>
              Login
            </Button>
            <div>
              <NavigationTextContainer>
                Don't have an account?
                <Link to="/signup">Signup</Link>
              </NavigationTextContainer>
            </div>
          </form>
        </Wrapper>
      </Center>
    </Container>
  )
}

export default Login

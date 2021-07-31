import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {signup} from '../../utils/api/auth'
import {Button, Input, Loader} from '../elements'
import {useAuth} from '../../store/authContext'
import {
  Wrapper,
  Span,
  Container,
  NavigationTextContainer,
  Link,
  ErrorMessage,
  Center,
} from './elements'

function Signup() {
  const [, setUser] = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })
  const history = useHistory()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    const user = await signup(data)
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
      <Center>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Wrapper>
          {loading && <Loader />}
          <Span>Please fill the form to Signup.</Span>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                value={data.firstName}
                type="text"
                required
                minLength={1}
                maxLength={30}
                onChange={e => setData(prev => ({...prev, firstName: e.target.value}))}
                placeholder="First Name"
                name="firstName"
              />
              <Input
                value={data.lastName}
                type="text"
                required
                minLength={1}
                maxLength={30}
                onChange={e => setData(prev => ({...prev, lastName: e.target.value}))}
                placeholder="Last Name"
                name="lastName"
              />
              <Input
                value={data.username}
                type="text"
                required
                minLength={6}
                maxLength={30}
                onChange={e => setData(prev => ({...prev, username: e.target.value}))}
                placeholder="User Name"
                name="username"
              />
              <Input
                value={data.email}
                type="email"
                required
                minLength={6}
                maxLength={30}
                onChange={e => setData(prev => ({...prev, email: e.target.value}))}
                placeholder="Email"
                name="email"
              />
              <Input
                value={data.password}
                required
                minLength={6}
                maxLength={30}
                onChange={e => setData(prev => ({...prev, password: e.target.value}))}
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
                Already have an account?
                <Link to="/login">Login</Link>
              </NavigationTextContainer>
            </div>
          </form>
        </Wrapper>
      </Center>
    </Container>
  )
}

export default Signup

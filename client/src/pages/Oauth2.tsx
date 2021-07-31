import {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router'
import {Loader} from '../components/elements'
import {loginWithGoogle} from '../utils/api/Oauth2'
import {useAuth} from '../store/authContext'
import queryString from 'query-string'

function Oauth2Listener() {
  const [, setUser] = useAuth()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const query = queryString.parse(location.search)

    loginWithGoogle(query.code as string).then(response => {
      setUser(response.user)
      history.replace('/')
    })
  }, [location.search, setUser, history])

  return <Loader />
}

export default Oauth2Listener

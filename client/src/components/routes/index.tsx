import {Redirect, Route, RouteProps} from 'react-router-dom'
import {useAuth} from '../../store/authContext'

type Props = {component: any}

export function PrivateRoute({component: Component, ...other}: Props & RouteProps) {
  const [user] = useAuth()

  return (
    <Route
      {...other}
      render={props => (user ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
}

export function UnauthRoute({component: Component, ...other}: Props & RouteProps) {
  const [user] = useAuth()

  return (
    <Route
      {...other}
      render={props => (!user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  )
}

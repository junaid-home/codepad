import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {PrivateRoute, UnauthRoute} from './components/routes'
import GlobalStyles from './utils/global-styles'
import {darkTheme, lightTheme} from './utils/theme'
import {useTheme} from './store/themeContext'
import {AuthProvider} from './store/authContext'
import {
  LoginPage,
  MainPage,
  NotFoundPage,
  SignupPage,
  TaskPage,
  Oauth2Page,
} from './pages'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [theme] = useTheme()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AuthProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={TaskPage} />
            <UnauthRoute exact path="/login" component={LoginPage} />
            <UnauthRoute exact path="/signup" component={SignupPage} />
            <Route path="/not-found" component={NotFoundPage} />
            <Route path="/requestGoogleToken" component={Oauth2Page} />
            <PrivateRoute exact path="/task/:id" component={MainPage} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

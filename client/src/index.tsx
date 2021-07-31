import * as React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from './store/themeContext'
import App from './App'

render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app'),
)

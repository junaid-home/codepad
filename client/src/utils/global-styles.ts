import {createGlobalStyle} from 'styled-components'
import {Theme} from './theme'

const styles = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: inherit; 
        font-size: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        overflow-x: hidden;
        background-color: ${({theme}: T) => theme.colors.background};
        color: ${({theme}: T) => theme.colors.color};
    }
`

interface T {
  theme: Theme
}

export default styles

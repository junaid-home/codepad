import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {Theme} from '../../utils/theme'

export const Wrapper = styled.div`
  width: 35.6rem;
  padding: 2.8rem;
  max-width: 80vw;
  border-radius: 0.4rem;
  background: white;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
`

export const GoogleIconContainer = styled.div`
  width: 41rem;
  margin-bottom: 2rem;
  max-width: 80vw;
`

export const Container = styled.div`
  position: relative;
  background: linear-gradient(to right, #240b36, #c31432);
  overflow: hidden;
`

export const Span = styled.span`
  padding: 0 0 1.5rem 0;
  display: inline-block;
  font-size: 1.5rem;
  color: #333;
`

export const NavigationTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  color: black;
`

export const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({theme}: Opts) => theme.colors.spinnerColor};
  margin-left: 1rem;
`

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  margin: 0;
  padding: 1rem;
  text-shadow: 1px 1.75px rgba(0, 0, 0, 0.4);
`

interface Opts {
  theme: Theme
}

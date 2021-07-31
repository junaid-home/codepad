import styled from 'styled-components'
import {Theme} from '../../utils/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  border-bottom: ${({theme}: Opts) => `1px solid ${theme.colors.border}`};
`

export const Bold = styled.span`
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const Select = styled.select`
  color: inherit;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  background-color: ${({theme}: Opts) => theme.colors.foreGroundLight};
  border: ${({theme}: Opts) => `1px solid ${theme.colors.border}`};

  margin-right: 1rem;
  outline: none;
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = styled.div`
  background-color: ${({theme}: Opts) => theme.colors.foreGround};
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.7rem 0.5rem 0.5rem 0.5rem;
  border-top: ${({theme}: Opts) => `1px solid ${theme.colors.border}`};
  width: 100%;
  box-sizing: border-box;
`

export const Foreground = styled.div`
  background-color: ${({theme}: Opts) => theme.colors.foreGround};
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActiveUserAvatar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: ${({theme}: Opts) => theme.colors.background};
  background-color: ${({theme}: Opts) => theme.colors.color};
  border: ${({theme}: Opts) => `1px solid ${theme.colors.border}`};
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.9rem;
`

interface Opts {
  theme: Theme
}

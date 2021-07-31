import styled from 'styled-components'
import {Theme} from '../../utils/theme'
import modifiersConfig from './modifiers/button'

type Modifiers = typeof modifiersConfig
type ModifiersKeys = keyof Modifiers

const ButtonElem = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
  color: inherit;

  border: ${({theme}: Opts) => theme && `1px solid ${theme.colors.border}`};
  background-color: ${({theme}: Opts) => theme && theme.colors.foreGroundLight};

  ${({modifiers, theme}: Opts) =>
    modifiers && theme && modifiers.map(modifier => modifiersConfig[modifier](theme))}
`

function Button({children, modifiers, onClick, type, disabled}: Opts) {
  return (
    <ButtonElem disabled={disabled} type={type} onClick={onClick} modifiers={modifiers}>
      {children}
    </ButtonElem>
  )
}

interface Opts {
  theme?: Theme
  modifiers?: ModifiersKeys[]
  children?: string
  onClick?: () => void
  type?: 'submit'
  disabled?: boolean
}

export default Button

import styled from 'styled-components'
import {Theme} from '../../utils/theme'
import modifiersConfig from './modifiers/h2'

type Modifiers = typeof modifiersConfig
type ModifiersKeys = keyof Modifiers

const H2 = styled.h2`
  margin: 0;
  font-size: 2.1rem;
  font-weight: 400;
  color: inherit;

  ${({modifiers, theme}: Opts) =>
    modifiers && theme && modifiers.map(modifier => modifiersConfig[modifier](theme))}
`

function CustomH2({children, modifiers, onClick}: Opts) {
  return (
    <H2 onClick={onClick} modifiers={modifiers}>
      {children}
    </H2>
  )
}

interface Opts {
  modifiers?: ModifiersKeys[]
  theme?: Theme
  children: any
  onClick?: () => void
}

export default CustomH2

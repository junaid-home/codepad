import {css} from 'styled-components'
import margin from './margin'
import padding from './padding'

const buttonModifier = {
  ...margin,
  ...padding,
  w100: () => css`
    width: 100%;
  `,
  large: () => css`
    padding: 1.2rem;
  `,
  whiteText: () => css`
    color: #fff;
  `,
}

export default buttonModifier

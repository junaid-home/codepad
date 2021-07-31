import {css} from 'styled-components'
import margin from './margin'
import padding from './padding'

const buttonModifier = {
  ...margin,
  ...padding,
  clickable: () => css`
    cursor: pointer;
  `,
}

export default buttonModifier

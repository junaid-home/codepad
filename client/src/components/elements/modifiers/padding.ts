import {css} from 'styled-components'
import {Theme} from '../../../utils/theme'

const padding = {
  pl1: (_theme: Theme) => css`
    padding-left: 0.2rem;
  `,
  pl2: (_theme: Theme) => css`
    padding-left: 0.4rem;
  `,
  pl3: (_theme: Theme) => css`
    padding-left: 0.6rem;
  `,
  pl4: (_theme: Theme) => css`
    padding-left: 0.8rem;
  `,
  pl5: (_theme: Theme) => css`
    padding-left: 1rem;
  `,
  pr1: (_theme: Theme) => css`
    padding-right: 0.2rem;
  `,
  pr2: (_theme: Theme) => css`
    padding-right: 0.4rem;
  `,
  pr3: (_theme: Theme) => css`
    padding-right: 0.6rem;
  `,
  pr4: (_theme: Theme) => css`
    padding-right: 0.8rem;
  `,
  pr5: (_theme: Theme) => css`
    padding-right: 1rem;
  `,
  pt1: (_theme: Theme) => css`
    padding-top: 0.2rem;
  `,
  pt2: (_theme: Theme) => css`
    padding-top: 0.4rem;
  `,
  pt3: (_theme: Theme) => css`
    padding-top: 0.6rem;
  `,
  pt4: (_theme: Theme) => css`
    padding-top: 0.8rem;
  `,
  pt5: (_theme: Theme) => css`
    padding-top: 1rem;
  `,
  pb1: (_theme: Theme) => css`
    padding-bottom: 0.2rem;
  `,
  pb2: (_theme: Theme) => css`
    padding-bottom: 0.4rem;
  `,
  pb3: (_theme: Theme) => css`
    padding-bottom: 0.6rem;
  `,
  pb4: (_theme: Theme) => css`
    padding-bottom: 0.8rem;
  `,
  pb5: (_theme: Theme) => css`
    padding-bottom: 1rem;
  `,
}

export default padding

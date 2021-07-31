import {css} from 'styled-components'
import {Theme} from '../../../utils/theme'

const margin = {
  ml1: (_theme: Theme) => css`
    margin-left: 0.2rem;
  `,
  ml2: (_theme: Theme) => css`
    margin-left: 0.4rem;
  `,
  ml3: (_theme: Theme) => css`
    margin-left: 0.6rem;
  `,
  ml4: (_theme: Theme) => css`
    margin-left: 0.8rem;
  `,
  ml5: (_theme: Theme) => css`
    margin-left: 1rem;
  `,
  mr1: (_theme: Theme) => css`
    margin-right: 0.2rem;
  `,
  mr2: (_theme: Theme) => css`
    margin-right: 0.4rem;
  `,
  mr3: (_theme: Theme) => css`
    margin-right: 0.6rem;
  `,
  mr4: (_theme: Theme) => css`
    margin-right: 0.8rem;
  `,
  mr5: (_theme: Theme) => css`
    margin-right: 1rem;
  `,
  mt1: (_theme: Theme) => css`
    margin-top: 0.2rem;
  `,
  mt2: (_theme: Theme) => css`
    margin-top: 0.4rem;
  `,
  mt3: (_theme: Theme) => css`
    margin-top: 0.6rem;
  `,
  mt4: (_theme: Theme) => css`
    margin-top: 0.8rem;
  `,
  mt5: (_theme: Theme) => css`
    margin-top: 1rem;
  `,
  mb1: (_theme: Theme) => css`
    margin-bottom: 0.2rem;
  `,
  mb2: (_theme: Theme) => css`
    margin-bottom: 0.4rem;
  `,
  mb3: (_theme: Theme) => css`
    margin-bottom: 0.6rem;
  `,
  mb4: (_theme: Theme) => css`
    margin-bottom: 0.8rem;
  `,
  mb5: (_theme: Theme) => css`
    margin-bottom: 1rem;
  `,
}

export default margin

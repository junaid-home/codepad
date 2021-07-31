import styled, {keyframes} from 'styled-components'
import {Theme} from '../../utils/theme'

const hourglass = keyframes`
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
`

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  z-index: 5000;

  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: ${({theme}: Opts) => `32px solid ${theme.colors.spinnerColor}`};
    border-color: ${({theme}: Opts) =>
      `${theme.colors.spinnerColor} transparent ${theme.colors.spinnerColor} transparent`};
    animation: ${hourglass} 1.2s infinite;
    z-index: 5000;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  ${({theme}: Opts) => `background-color: ${theme.colors.spinnerBackground}`}
`

function LoadingOverlay() {
  return (
    <Container>
      <Loader />
    </Container>
  )
}

interface Opts {
  theme: Theme
}

export default LoadingOverlay

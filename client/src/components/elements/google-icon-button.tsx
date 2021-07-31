import styled from 'styled-components'
import {Theme} from '../../utils/theme'

const ButtonElement = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
  color: inherit;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.9rem;

  border: ${({theme}: Opts) => theme && `1px solid ${theme.colors.border}`};
  background-color: ${({theme}: Opts) => theme && theme.colors.foreGroundLight};
`
const Button = ({children, onClick}: Props) => {
  return (
    <ButtonElement onClick={onClick}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img
          src="/google.png"
          alt="Google Icon"
          width={20}
          style={{marginRight: '1rem'}}
        />
        {children}
      </div>
    </ButtonElement>
  )
}

interface Props {
  onClick: () => void
  children: any
}

interface Opts {
  theme: Theme
}

export default Button

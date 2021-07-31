import styled from 'styled-components'
import {Theme} from '../../utils/theme'
import {Link as RouterLink} from 'react-router-dom'
import breakpoint from '../../utils/breakpoints'
import {LazyLoadImage} from 'react-lazy-load-image-component'

export const NewTaskWrapper = styled.div`
  display: inline-block;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  padding: 4.5rem 9rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem;
`

export const Icon = styled.span`
  font-size: 2.5rem;
  border-radius: 50%;
  color: black;
  background: white;
  display: block;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h2`
  font-size: 1.9rem;
  color: ${({theme}: Opts) => theme.colors.title};
  margin: 1rem;
`

export const Link = styled(RouterLink)`
  margin: 0;
  line-height: 1.1;
  text-decoration: none;
  color: ${({theme}: Opts) => theme.colors.title};
`

export const Thumbnail = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
`

export const TaskContainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);

  @media ${breakpoint('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoint('md')} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${breakpoint('lg')} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const OneLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`

export const ModalWrapper = styled.div`
  color: #333;
`

export const LogoutIcon = styled.img`
  width: 3.5rem;
  height: 2.8rem;
  margin-right: 1.5rem;
  cursor: pointer;
`

interface Opts {
  theme: Theme
}

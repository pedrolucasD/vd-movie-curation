import styled from 'styled-components'

export const PageTitle = styled.h1`
  position: absolute;
  font-size: 1.8rem;
  text-transform: uppercase;
  top: 2rem;
  left: 10rem;
  font-weight: 900;
  color: #444444;

  @media only screen and (max-width: 320px){
    font-size: 1.2rem;
    top: 1rem;
    left: .5rem;
  }

  @media screen and (min-width: 321px) and (max-width: 420px){
    font-size: 1.5rem;
    top: 1rem;
    left: 1rem;
  }

  @media screen and (min-width: 421px) and (max-width: 1360px) {
    left: 5rem;
    top: 1rem;
  }
`
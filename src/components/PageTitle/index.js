import styled from 'styled-components'

export const PageTitle = styled.h1`
  position: absolute;
  font-size: 1.8rem;
  text-transform: uppercase;
  top: 2.2rem;
  left: 12.4rem;
  font-weight: 900;
  color: #444444;

  @media only screen and (max-width: 420px){
    position: absolute;
    font-size: 1.5rem;
    top: 5rem;
    left: 1rem;
  }

  @media only screen and (max-width: 320px){
    position: absolute;
    font-size: 1.2rem;
    top: 5rem;
    left: .8rem;
  }
`
import styled from 'styled-components'

export const Header = styled.header`
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: 7rem;
  position: absolute;
  padding: 1rem;
  text-align: center;
  background: ${props => props.bgSolid != 1 ? 'linear-gradient(225deg, #ff1c1c, #ff5656)' : 'none'};

  @media only screen and (max-width: 600px){
    height: 4rem;
  }

`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
`
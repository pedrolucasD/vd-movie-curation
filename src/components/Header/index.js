import styled from 'styled-components'

export const Header = styled.header`
  z-index: 1;
  height: 7.15rem;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 1rem;
  text-align: center;
  background: ${props => props.bgSolid != 1 ? 'linear-gradient(225deg, #ff1c1c, #ff5656)' : 'none'};

  @media only screen and (max-width: 420px){
    height: auto;
  }

`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
`
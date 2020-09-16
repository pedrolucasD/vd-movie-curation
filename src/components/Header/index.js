import styled from 'styled-components'

export const Header = styled.header`
  z-index: 1;
  height: 10%;
  width: 100%;
  top: 0;
  padding: 1rem;
  position: sticky;
  text-align: center;
  background-color: ${props => props.bgSolid != 1 ? '#ff5656' : 'none'};
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
`
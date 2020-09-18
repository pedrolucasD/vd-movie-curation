import styled from 'styled-components'

export const MobileSider = styled.nav`
  left: -100%;
  height: 100%;
  width: 18rem;
  position: fixed;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  
  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 900;
    margin: .5rem 0;
  }

  padding: 1rem;

  animation: ${ props => props.openSider == true ? 'openSider .4s' : props.openSider == false ? 'closeSider .4s' : 'unset' };
  animation-fill-mode: forwards;

  @keyframes openSider {
    0% {left: -18rem}
    100% {left: 0}
  }

  @keyframes closeSider {
    0% {left: 0}
    100% {left: -18rem}
  }
`
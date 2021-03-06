import styled from 'styled-components'

export const Body = styled.body`
  z-index: 0;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: unset;
  /* height: 100%; */
  position: fixed;

  @media only screen and (max-width: 640px){
    .hideOnMobile{
      display: none;
    }

    animation: ${ props => props.openMenu == true ? 'openMenu .4s' : props.openMenu == false ? 'closeMenu .4s' : 'unset' };
    animation-fill-mode: forwards;

    @keyframes openMenu {
      0% {left: 0}
      100% {left: 15rem}
    }

    @keyframes closeMenu {
      0% {left: 15rem}
      100% {left: 0}
    }
  }

  @media only screen and (min-width: 640px){
    .hideOnDesktop{
      display: none;
    }
  }
`

export const Main = styled.main`

  z-index: 0;
  top: 7rem;
  bottom: 3rem;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-around;
  overflow: hidden;
  

  @media only screen and (max-width: 640px){ 
    top: 4rem;
    right: 0;
    bottom: 0;
    left: 0;  
  }
  
`

export const FooterIconDivider = styled.div`
  margin: 0 1rem;
`


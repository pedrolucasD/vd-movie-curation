import styled from 'styled-components'

export const Body = styled.body`
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
  position: absolute;

  @media only screen and (max-width: 420px){
    .hideOnMobile{
      display: none;
    }

    position: fixed;
    overflow: hidden;

    animation: ${ props => props.openMenu == true ? 'openMenu .4s' : props.openMenu == false ? 'closeMenu .4s' : 'unset' };
    animation-fill-mode: forwards;

    @keyframes openMenu {
      0% {left: 0}
      100% {left: 70%}
    }

    @keyframes closeMenu {
      0% {left: 70%}
      100% {left: 0}
    }
  }

  @media only screen and (min-width: 420px){
    .hideOnDesktop{
      display: none;
    }
  }
`

export const Main = styled.main`
  top: 7.15rem;
  bottom: 2.4rem;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  overflow: hidden;
  

  @media only screen and (max-width: 420px){ 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;  
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
  
`

export const FooterIconDivider = styled.div`
  margin: 0 1rem;
`


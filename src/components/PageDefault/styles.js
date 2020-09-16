import styled from 'styled-components'

export const Body = styled.body`
  font-family: 'Roboto', sans-serif;

  @media only screen and (max-width: 420px){
    .hideOnMobile{
      display: none;
    }
  }
`

export const Main = styled.main`
  position: relative;
  display: grid;
  justify-items: center;
  vertical-align: center;
  

  @media only screen and (max-width: 420px){    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    position: absolute;
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


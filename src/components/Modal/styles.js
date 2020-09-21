import styled from 'styled-components'
import { Row } from 'antd'

export const ModalStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: 'Roboto', sans-serif;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;


  @media only screen and (max-width: 600px){
    padding: 1.5rem 1.5rem;
    height: 100%;
    position: fixed;
  }

  @media only screen and (max-width: 320px){
    padding: 1.5rem 1.5rem;
    height: 100%;
    position: absolute;
  }

`

export const ModalAlpha = styled.a`
  cursor: unset;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: gray;
  opacity:0.6;
  transition: opacity 400ms ease-in;
`

export const ModalCloseButton = styled.a`
  height: 3rem;
  width: 3rem;
  right: -1rem;
  top: -1rem;
  position: absolute;
  border-radius: 3rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  color: #000;

  :hover {
    color: #000;
  }
`

export const ModalContent = styled.div`
  padding: 3rem;
  top: -1rem;
  border-radius: .5rem;
  width: 45rem;
  min-height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fff;
  background: linear-gradient(to bottom, #ff5656 7rem, #fff 0);
  animation: modalAnimation .3s;

  @keyframes modalAnimation {
    0% {top: -10%; opacity: 0}
    100% {left: 0; opacity: unset}
  }
  
  @media only screen and (max-width: 320px){
    top: 0;
    max-height: 100%;
    width: 100%;
    /* min-height: 20rem; */
  }

  @media only screen and (min-width: 320px) and (max-width: 420px){
    top: 0;
    max-height: 100%;
    min-width: 100%;
    padding: 2rem 2rem;
  }

  @media only screen and (max-width: 840px){
    background: linear-gradient(to bottom, #ff5656 6rem, #fff 0);
  }
` 

export const ModalMovieTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 900;
  color: #363636;
  text-transform: uppercase;

  @media only screen and (max-width: 420px){
    font-size: 1.2rem;
    line-height: 1.2;
  }

  @media only screen and (max-width: 320px){
    font-size: 1rem;
    line-height: 1.2;
  }

`

export const OverviewRow = styled(Row)`

  @media only screen and (max-width: 644px){
    max-height: 9rem;
    overflow: auto;
  }

`
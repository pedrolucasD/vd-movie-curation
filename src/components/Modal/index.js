import styled from 'styled-components'

export const Modal = styled.div`
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
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
`

export const ModalContent = styled.div`
  padding: 3rem;
  top: -2rem;
  border-radius: .5rem;
  width: 44rem;
  min-height: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fff;
  background: linear-gradient(to bottom, #ff5656 7rem, #fff 0);
` 

export const ModalMovieTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 900;
  color: #363636;
  text-transform: uppercase;
`
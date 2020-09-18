import styled from 'styled-components'
const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const Container = styled.main`
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const ImageFilter = styled.div`
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background: linear-gradient(225deg, #ff1c1c, #ff5656);
`

export const ImageBG = styled.div`
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: inline-block;
  background-image: url(${ props => urlImgApi+props.srcImg });
  background-size: cover;
  background-position: center;
  opacity: .2;

  animation: ${ props => props.fade == true ? 'fadeOut 1s' : 'fadeIn 1s'};

  @keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: .2}
  }

  @keyframes fadeOut {
    0% {opacity: .2}
    100% {opacity: 0}
  }

`

export const ContainerSecondary = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6.5rem;
  right: 10rem;
  bottom: 0rem;
  left: 10rem;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }


  @media only screen and (max-width: 321px){
    top: 4rem;
    right: .5rem;
    bottom: 0rem;
    left: .5rem;
    overflow: auto;
  }
  
  @media screen and (min-width: 322px) and (max-width: 641px){
    top: 4rem;
    right: 1rem;
    bottom: 0rem;
    left: 1rem;
    overflow: auto;
  }

  @media screen and (min-width: 642px) and (max-width: 1361px) {
    top: 5rem;
    left: 5rem;
    right: 5rem;
  }
`
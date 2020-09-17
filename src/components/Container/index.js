import styled from 'styled-components'
const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const Container = styled.main`
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
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6.5rem;;
  right: 12.4rem;
  bottom: -1rem;
  left: 12.4rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`
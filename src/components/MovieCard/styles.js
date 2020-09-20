import styled from 'styled-components'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'

const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const Card = styled.article`

  position: relative;
  height: 28.75rem;
  width: 43.75rem;
  margin: 1rem;
  border-radius: .25rem;
  background-color: #fff;
  background-image: url(${ props => props.srcImg == null ? EmptyMovieOrImage : urlImgApi+props.srcImg });
  background-size: ${ props => props.srcImg == null ? 'center no-repeat' : 'cover' };
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: ${ props => props.srcImg == null ? 'unset' : 'inset 0 0 8rem rgb(0, 0, 0, .5)' };
  animation: ${ props => props.slide == true ? 'currentToNext .3s' : 'previousToCurrent .3s' };
  animation-fill-mode: forwards;
  
  @keyframes currentToNext {
    0% {left: 0; opacity: unset}
    100% {left: 20rem; opacity: 0.0}
  }

  @keyframes previousToCurrent {
    0% {left: -20rem; opacity: 0.0}
    100% {left: 0; opacity: unset}
  }
  
  @media only screen and (max-width: 760px){
    background-size: ${ props => props.srcImg == null ? '50%' : 'cover' };
    max-width: 18.375rem;
    max-height: 21.875rem;
  }
  
`
export const CardFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1rem;
  color: #fff;
  background: ${ props => props.srcImg == null ? 'linear-gradient(to top, rgb(0, 0, 0, .5), rgb(0, 0, 0, 0))' : 'unset' };
  
  @media only screen and (max-width: 644px){
    padding: .5rem;
  }
  
  @media only screen and (min-width: 644px){
    text-shadow: 0px 0px .2rem rgb(0, 0, 0, 1);
  }


`

export const CardFooterTitle = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  
  @media only screen and (max-width: 644px){
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 644px){
    text-shadow: 0px 0px .2rem #000;
  }

`
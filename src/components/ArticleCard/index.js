import styled from 'styled-components'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'

const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const ArticleCard = styled.article`
  width: 43.75rem;
  height: 28.75rem;
  background-color: #fff;
  border-radius: .25rem;
  background-image: url(${ props => props.srcImg == null ? EmptyMovieOrImage : urlImgApi+props.srcImg });
  background-size: ${ props => props.srcImg == null ? 'center no-repeat' : 'cover' };
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  animation: ${ props => props.slide == true ? 'currentToNext .3s' : 'previousToCurrent .3s' };
  animation-fill-mode: forwards;
  box-shadow: ${ props => props.srcImg == null ? 'unset' : 'inset 0 0 8rem rgb(0, 0, 0, 0.5)' };

  @keyframes currentToNext {
    0% {left: 0; opacity: unset}
    100% {left: 20%; opacity: 0.0}
  }

  @keyframes previousToCurrent {
    0% {left: -20%; opacity: 0.0}
    100% {left: 0; opacity: unset}
  }

  @media only screen and (max-width: 420px){
    background-size: ${ props => props.srcImg == null ? '50%' : 'cover' };
    max-width: 18.375rem;
    max-height: 21.875rem;
  }

`



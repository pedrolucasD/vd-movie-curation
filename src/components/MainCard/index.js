import styled from 'styled-components'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'

const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const MainCard = styled.div`
  width: 43.75rem;
  min-height: 28.75rem;
  height: 28.75rem;
  background-color: #fff;
  opacity: 0.999;
  border-radius: .25rem;
  background-image: url(${ props => props.srcImg == null ? EmptyMovieOrImage : urlImgApi+props.srcImg });
  background-size: ${ props => props.srcImg == null ? 'center no-repeat' : 'cover' };
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;

  /* @media only screen and (max-width: 320px) {
    width: 21.875rem;
    height: 18.375rem;
} */
`

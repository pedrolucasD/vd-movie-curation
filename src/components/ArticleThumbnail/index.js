import styled from 'styled-components'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'
const urlImgApi = 'https://image.tmdb.org/t/p/w500/'


export const ArticleThumbnail = styled.div`
  height: 24.625rem;
  width: 21.875rem;
  background-color: #fff;
  opacity: 1;
  border-radius: .25rem;
  background-image: url(${ props => props.srcImg == null ? EmptyMovieOrImage : urlImgApi+props.srcImg });
  background-size: ${ props => props.srcImg == null ? '50%' : 'cover' };
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`
import styled from 'styled-components'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'
const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const Thumbnail = styled.div`
  border-radius: .3rem;
  position: relative;
  height: 8rem;
  width: 6.5rem;
  background-image: url(${ props => props.srcImg == null ? EmptyMovieOrImage : urlImgApi+props.srcImg });
  background-size: ${ props => props.srcImg == null ? '60%' : 'cover' };
  background-color: ${ props => props.srcImg == null ? '#fff' : 'none' };
  background-repeat: no-repeat;
  background-position: center;
  
`
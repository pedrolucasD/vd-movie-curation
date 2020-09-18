import styled from 'styled-components'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'
const urlImgApi = 'https://image.tmdb.org/t/p/w500/'


export const ArticleThumbnail = styled.div`
  height: 24.625rem;
  width: 21.875rem;
  background-color: #fff;
  opacity: 1;
  border-radius: .3rem;
  background-image: url(${ props => props.srcImg == null ? EmptyMovieOrImage : urlImgApi+props.srcImg });
  background-size: ${ props => props.srcImg == null ? '50%' : 'cover' };
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  @media only screen and (max-width: 420px){
    height: 10.875rem;
    width: 9.062rem;
    box-shadow: ${ props => props.srcImg == null ? 'unset' : 'inset 0 0 2rem rgb(0, 0, 0, 0.4)' };
    background-size: ${ props => props.srcImg == null ? '30%' : 'cover' };
  }
`

export const ThumbFooter = styled.footer`
  border-radius: .3rem;
  min-height: 5rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  border-radius: .3rem;
  padding: 1rem;
  color: #fff;
  text-shadow: 0px 0px .2rem black;
  background: linear-gradient(to top, rgb(0, 0, 0, .5), rgb(0, 0, 0, 0));
  
  @media only screen and (max-width: 420px){
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    text-shadow: unset;
    padding: .25rem .75rem;
    background: linear-gradient(to top, rgb(0, 0, 0, .7), rgb(0, 0, 0, 0));
    .MobileTextAlignLeft{
      text-align: left;
    }
  }
`

export const ThumbTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0px 0px .2rem black;
  text-transform: uppercase;

  @media only screen and (max-width: 420px){
    font-size: .8rem;
    text-shadow: unset;
  }
`
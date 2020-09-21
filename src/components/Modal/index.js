import React, { useContext } from 'react'
import Context from '../../store/context'
import { Row, Col } from 'antd'
import { ModalStyle, ModalCloseButton, ModalAlpha, ModalContent, ModalMovieTitle } from './styles'
import { Thumbnail } from '../../components/Thumbnail'
import { 
  getFormatedGenres,
  getFormatedMovieTime,
  getFormatedMovieYear,
} from '../../components/CommonFunctions'
import { MovieRate } from '../../components/Rate'

const Modal = (props) => {

  const movie = props.children
  const { actions } = useContext(Context)

  function handleOpenModal(boolean){
    actions({type: 'handleSetModalIsOpen', payload: boolean})
  }
  
  return(
    <>
    <ModalStyle>
      <ModalAlpha onClick={() => handleOpenModal(false)} />
      <ModalContent>
        <ModalCloseButton onClick={() => handleOpenModal(false)}>x</ModalCloseButton>
        <Row justify="center">
          <Thumbnail srcImg={props.imgPoster} />
        </Row>
        <Row justify="center" style={{marginTop: '1rem'}}>
          <ModalMovieTitle>
            { movie.title }
          </ModalMovieTitle>
        </Row>
        <Row justify="center" style={{textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem', color: '#808080', fontSize: '.8rem', maxWidth: '100%'}}>
            { getFormatedMovieYear(movie.release_date) }&nbsp;•&nbsp; 
            { getFormatedGenres(movie.genres) }&nbsp;•&nbsp;
            { getFormatedMovieTime(movie.runtime) }
        </Row>
        <Row className="jc-cen">
          <div>
            {MovieRate(movie.vote_average, 24, true, false)}
          </div>
        </Row>
        <Row justify="center" style={{fontSize: '.7rem', marginBottom: '1rem'}}>
          {'(' + movie.vote_count + ' avaliações' +')'}
        </Row>
        <Row>
          {movie.overview}
        </Row>
      </ModalContent>
    </ModalStyle>
    </>
  )
}

export default Modal
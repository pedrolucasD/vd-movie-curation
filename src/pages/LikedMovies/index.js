import React, { useEffect, useContext, useState } from 'react'
import Context from '../../store/context'
import PageDefault from '../../components/PageDefault'
import EmptyMovie from '../../assets/img/video-camera-vazio.png'
import { PageTitle } from '../../components/PageTitle'
import { Row, Col } from 'antd'
import { EmptyPageBg } from '../../components/EmptyPageBg'
import { ContainerSecondary } from '../../components/Container'
import { ArticleThumbnail, ThumbFooter, ThumbTitle } from '../../components/ArticleThumbnail'
import { MovieRate } from '../../components/Rate'
import { Thumbnail } from '../../components/Thumbnail'
import { 
  Modal,
  ModalCloseButton,
  ModalAlpha,
  ModalContent,
  ModalMovieTitle
} from '../../components/Modal'


const DislikedMovies = () => {
  const winWidth = window.screen.width
  const { currentPage, likes, actions } = useContext(Context)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState([])

  const imgPoster = movieSelected.poster_path
  
  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 2})
  }, [])
  
  function handleOpenModalByMovie(movie){
    setMovieSelected(movie)
    setModalIsOpen(true)
  }

  function getMovieOverview(tagline, movie){
    const movieTagline = winWidth < 430 ?
    (tagline?.length > 10 ? tagline?.substr(0, 10)+"..." : tagline) :
    (tagline?.length > 30 ? tagline?.substr(0, 30)+"..." : tagline) 
    
    if(tagline === ""){
      return "Sinopse não encontrada"
    } else {
      return(
        <>
          {movieTagline}
          <a style={{float: 'right', color: '#ff5656', textDecoration: 'underline'}} onClick={() => handleOpenModalByMovie(movie)}>
            Ver Sinopse
          </a>
        </>
      )
    }
  }

  function getMovieTitle(title){
    const movieTitle = title?.length > 20 ? title?.substr(0, 20)+"..." : title
    return movieTitle
  }

  function getMovieTime(movieTime){
    const durationTime = new Date('2020-01-01 00:00:00')
    const hours = new Date(durationTime.setMinutes(durationTime.getMinutes() + (movieTime)))
    const formatedHours = hours.getHours()+'H '+hours.getMinutes()+'M'
    return formatedHours
  }

  function getGenres(genres){
    const getMovieGenres = genres?.map(genre => 
      ( genre.name !== movieSelected.genres[movieSelected.genres.length -1].name ?
        genre.name + '/' :
        genre.name ))
    return getMovieGenres
  }

  function getMovieYear(year){
    const getYear = year?.substr(0, 4)
    return getYear
  }

  console.log(likes)

  return(
    <>
      <PageDefault>
        <div style={{display: 'flex', flexDirection: 'row'}}>


          <div style={{padding: '0 13%'}}>
            { 
              likes.length == 0 ?
              <>
                <PageTitle >
                  Nenhum filme
                </PageTitle>  
                <EmptyPageBg imgSrc={EmptyMovie}/>  
              </> :
              <div style={{backgroundColor: '#f4f4f4', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
                <PageTitle>
                  Filmes Curtidos
                </PageTitle>
                <ContainerSecondary>
                  <Row gutter={winWidth < 321 ? [0, 10] : winWidth < 361 ? [0, 24] : winWidth < 421 ? [0, 32] : [0, 64] } justify={ winWidth < 420 ? 'space-around' : 'space-between'} align="middle">
                    <>
                      {
                        likes.slice(0).reverse().map(dislike => (
                          <Col>
                            <ArticleThumbnail srcImg={dislike.poster_path} onClick={winWidth < 421 ? () => handleOpenModalByMovie(dislike) : "" }>
                              <ThumbFooter>
                                <Row>
                                  <Col span={24}>
                                    <ThumbTitle>
                                      { getMovieTitle(dislike.title) }
                                    </ThumbTitle>
                                  </Col>
                                </Row>
                                <Row gutter={[0, 10]} align="middle">
                                  <Col span={winWidth > 420 ? 12 : 24}>
                                    { MovieRate(dislike.vote_average, winWidth > 420 ? 24 : 18 ) }
                                  </Col>
                                  <Col span={12} style={{textAlign: 'right', margin: '0', fontSize: '.8rem'}} className="hideOnMobile">
                                    {'(' + dislike.vote_count + ' avaliações' +')'}
                                  </Col>
                                </Row>
                                <Row className="hideOnMobile">
                                  <Col>
                                    { getMovieOverview(dislike.overview, dislike) }
                                  </Col>
                                </Row>
                              </ThumbFooter>
                            </ArticleThumbnail>
                          </Col>
                        ))
                      } 
                    </>
                  </Row>
                </ContainerSecondary>
              </div>
            }   
          </div>


        </div>
      </PageDefault>
      <>
      {/* START MODAL OVERVIEW */}
      { modalIsOpen ? (
          <Modal>
            <ModalAlpha onClick={() => setModalIsOpen(false)} />
            <ModalContent>
              <ModalCloseButton onClick={() => setModalIsOpen(false)}>x</ModalCloseButton>
              <Row justify="center">
                <Thumbnail srcImg={imgPoster} />
              </Row>
              <Row justify="center" style={{marginTop: '1rem'}}>
                <ModalMovieTitle style={winWidth < 420 ? {maxHeight: '5rem', overflow: 'auto'} : {overflow: 'auto'}}>
                  { movieSelected.title }
                </ModalMovieTitle>
              </Row>
              <Row justify="center" style={{textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem', color: '#808080', fontSize: '.8rem', maxWidth: '100%'}}>
                  { getMovieYear(movieSelected.release_date) }&nbsp;•&nbsp; 
                  { getGenres(movieSelected.genres) }&nbsp;•&nbsp;
                  { getMovieTime(movieSelected.runtime) }
              </Row>
              <Row justify="center">
                {MovieRate(movieSelected.vote_average, winWidth > 420 ? 24 : 18, true )}
              </Row>
              <Row justify="center" style={{fontSize: '.7rem', marginBottom: '1rem'}}>
                {'(' + movieSelected.vote_count + ' avaliações' +')'}
              </Row>
              <Row 
                justify="left" style={winWidth <= 320 ? {maxHeight: '8rem', maxWidth: '100%', overflow: 'auto'} : winWidth <= 420 ? {maxHeight: '13rem', maxWidth: '100%', overflow: 'auto'} : {overflow: 'auto'}}>
                { movieSelected.overview == "" ? "Sinopse não encontrada" : movieSelected.overview }
              </Row>
            </ModalContent>
          </Modal>    
        )
      : null } 
      {/* END MODAL OVERVIEW */}
    </>
    </>
  )
}

export default DislikedMovies

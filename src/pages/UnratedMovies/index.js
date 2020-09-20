import React, { useEffect, useState, useContext } from 'react'
import Context from '../../store/context'
import api from '../../services/api'
import PageDefault from '../../components/PageDefault'
import { ImageBG, ImageFilter } from '../../components/Container'
import { MovieCard, FooterMovieCard, FooterMovieTitle } from '../../components/MovieCard'
import { Row, Col } from 'antd'
import { MovieRate } from '../../components/Rate/index'
import { DivControls, IconButton, Button } from '../../components/Button'
import { Thumbnail } from '../../components/Thumbnail'
import { Modal, ModalCloseButton, ModalAlpha, ModalContent, ModalMovieTitle } from '../../components/Modal'
import LikeIcon from '../../assets/icons/curti.png'
import DislikeIcon from '../../assets/icons/n-curti.png'

const apiKey = '?&api_key=97e4b05e62f59396b9df37e305734e91&language=pt-BR'

const UnratedMovies = () => {
  const winWidth = window.screen.width
  const { movieNumber, likes, dislikes, currentPage, actions } = useContext(Context)
  const [movie, setMovie] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [slideAnimate, setSlideAnimate] = useState(false)
 
  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      setModalIsOpen(false)
    }
  });

  async function handleLoadMovie(movieNumber){    
    try {
      const response = await api.get('/'+movieNumber+apiKey)
      setMovie(response.data)
      setSlideAnimate(false)
    } catch {
      actions({type:'handleSetMovieNumber', payload: movieNumber+1})
    }
  }

  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 1})
  }, [])
  
  useEffect(() => {
    handleLoadMovie(movieNumber)
  }, [movieNumber])

 
  
  const imgBg = movie.backdrop_path
  const imgPoster = movie.poster_path

  function nextMovie(){
    setSlideAnimate(true)
    setTimeout(() => {
      actions({type:'handleSetMovieNumber', payload: movieNumber+1})
    }, 300);
  }
  
  function getMovieTime(movieTime){
    const durationTime = new Date('2020-01-01 00:00:00')
    const hours = new Date(durationTime.setMinutes(durationTime.getMinutes() + (movieTime)))
    const formatedHours = hours.getHours()+'H '+hours.getMinutes()+'M'
    return formatedHours
  }

  function getGenres(genres){
    const getMovieGenres = genres?.map(genre => 
      ( genre.name !== movie.genres[movie.genres.length -1].name ?
        genre.name + '/' :
        genre.name ))
    return getMovieGenres
  }

  function getMovieYear(year){
    const getYear = year?.substr(0, 4)
    return getYear
  }

  function getMovieTitle(title){
    const movieTitle = title?.length > 27 ? title?.substr(0, 27)+"..." : title
    return movieTitle
  }



  function getMovieOverview(tagline){
    const movieTagline = winWidth < 720 ?
    (tagline?.length > 25 ? tagline?.substr(0, 25)+"..." : tagline) :
    (tagline?.length > 80 ? tagline?.substr(0, 80)+"..." : tagline) 
    
    if(tagline === ""){
      return "Sinopse não encontrada"
    } else {
      return(
        <div>
          {movieTagline}       
          <a style={{color: '#ff5656', textDecoration: 'underline'}} onClick={() => setModalIsOpen(true)}>
            Ver Sinopse
          </a>
        </div>
      )
    }
  }

  function likeMovie(movie){
    
    var lastArr = likes.length - 1

    if (movie.imdb_id != likes[lastArr]?.id){
      actions({type:'handleLikeMovie', payload: [...likes, { 
        id: movie.imdb_id,
        title: movie.title,
        release_date: movie.release_date,
        genres: movie.genres,
        runtime: movie.runtime,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        tagline: movie.tagline,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path
      }]})
      nextMovie()
    }     
  }
  

  function dislikeMovie(){

    var lastArr = dislikes.length - 1

    if (movie.imdb_id != dislikes[lastArr]?.id){
    actions({ type:'handleDislikeMovie', payload: [...dislikes, {
      id: movie.imdb_id,
      title: movie.title,
      release_date: movie.release_date,
      genres: movie.genres,
      runtime: movie.runtime,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      tagline: movie.tagline,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path
    }]})
    nextMovie()
    }
  }

  return(
    <>
      <ImageFilter />
      <ImageBG srcImg={imgBg} fade={slideAnimate}/>
      <PageDefault>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'absolute', top: '0', bottom: '6rem'}}>
        <MovieCard srcImg={imgPoster} slide={slideAnimate}>
          <FooterMovieCard srcImg={imgPoster}>
            <Row span={24} align="middle" className="standard-row-padding">
              <Col md={18} lg={18}>
                <Col span={24}>
                  <Row>
                    <FooterMovieTitle>
                      {getMovieTitle(movie.title)}
                    </FooterMovieTitle>
                  </Row>
                </Col>
                <Col xs={0} sm={0} md={24} lg={24}>
                  <Row style={{textTransform: 'uppercase'}}>
                    { getMovieYear(movie.release_date) }&nbsp;•&nbsp; 
                    { getGenres(movie.genres) }&nbsp;•&nbsp;
                    { getMovieTime(movie.runtime) }
                  </Row>
                </Col>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6}>
                <Col xs={12} sm={12} md={24} lg={24} className="fl-rgt-desk fl-lft-mobi">
                  <Row>
                    {MovieRate(movie.vote_average, 24)}
                  </Row>
                </Col>
                <Col xs={12} sm={12} md={24} lg={24} className="fl-rgt-desk fl-rgt-mobi">
                  <Row>
                    { '(' + movie.vote_count + ' avaliações' +')' }
                  </Row>
                </Col>
              </Col>
            </Row>
            <Row span={24} className="standard-row-padding">
              <Col lg={24}>
                { getMovieOverview(movie.overview) }
              </Col>
            </Row>
          </FooterMovieCard>
        </MovieCard>
      </div>
        <DivControls justify="space-around">
          <Col>
            <IconButton onClick={() => dislikeMovie(movie)}>
              <img src={DislikeIcon} style={{maxWidth: '1.8rem', marginRight: '.5rem', marginTop: '6%'}}/>
              <div className="hideOnMobile">
                Não curti!
              </div>
            </IconButton>
          </Col>
          <Col>
            <Button onClick={() => nextMovie()}>
              Pular
            </Button>
          </Col>
          <Col>
            <IconButton style={{color: '#ff5656'}} onClick={() => likeMovie(movie)}>
              <img src={LikeIcon} style={{maxWidth: '1.8rem', marginRight: '.5rem', marginTop: '-6%'}}/>
              <div className="hideOnMobile">
                Curti!
              </div>
            </IconButton>
          </Col>
        </DivControls>
      </PageDefault>
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
                  { movie.title }
                </ModalMovieTitle>
              </Row>
              <Row justify="center" style={{textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem', color: '#808080', fontSize: '.8rem', maxWidth: '100%'}}>
                  { getMovieYear(movie.release_date) }&nbsp;•&nbsp; 
                  { getGenres(movie.genres) }&nbsp;•&nbsp;
                  { getMovieTime(movie.runtime) }
              </Row>
              <Row className="jc-cen">
                <div>
                  {MovieRate(movie.vote_average, 24, true, false)}
                </div>
              </Row>
              <Row justify="center" style={{fontSize: '.7rem', marginBottom: '1rem'}}>
                {'(' + movie.vote_count + ' avaliações' +')'}
              </Row>
              <Row 
                justify="left" style={winWidth <= 320 ? {maxHeight: '8rem', maxWidth: '100%', overflow: 'auto'} : winWidth <= 420 ? {maxHeight: '13rem', maxWidth: '100%', overflow: 'auto'} : {overflow: 'auto'}}>
                { movie.overview == "" ? "Sinopse não encontrada" : movie.overview }
              </Row>
            </ModalContent>
          </Modal>    
        )
      : null } 
      {/* END MODAL OVERVIEW */}
    </>     
  )
}

export default UnratedMovies

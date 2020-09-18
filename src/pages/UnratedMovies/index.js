import React, {
  useEffect,
  useState,
  useContext
} from 'react'
import Context from '../../store/context'
import api from '../../services/api'
import PageDefault from '../../components/PageDefault'
import { ImageBG, ImageFilter } from '../../components/Container'
import { ArticleCard } from '../../components/ArticleCard'
import { FooterMovieOverview, MovieTitle } from '../../components/ArticleCard/components/FooterMovieOverview'
import { Row, Col } from 'antd'
import { MovieRate } from '../../components/Rate/index'
import { DivControls, IconButton, Button } from '../../components/Button'
import { Thumbnail } from '../../components/Thumbnail'
import LikeIcon from '../../assets/icons/curti.png'
import DislikeIcon from '../../assets/icons/n-curti.png'
import { 
  Modal,
  ModalCloseButton,
  ModalAlpha,
  ModalContent,
  ModalMovieTitle
} from '../../components/Modal'

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
    const movieTagline = winWidth < 430 ?
    (tagline?.length > 20 ? tagline?.substr(0, 20)+"..." : tagline) :
    (tagline?.length > 75 ? tagline?.substr(0, 75)+"..." : tagline) 
    
    if(tagline === ""){
      return "Sinopse não encontrada"
    } else {
      return movieTagline
    }
  }

  function likeMovie(){
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

  function dislikeMovie(){
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

  return(
    <>
      <ImageFilter />
      <ImageBG srcImg={imgBg} fade={slideAnimate}/>
      <PageDefault>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'absolute', top: '0', bottom: '6rem'}}>
        <ArticleCard srcImg={imgPoster} style={{margin: '1rem'}} slide={slideAnimate}>
          <FooterMovieOverview> 
            <Row align="middle">
              <Col span={winWidth < 420 ? 24 : 18}>
                <Row style={{margin: '.4 rem 0'}} >
                  <Col span={24}>
                    <MovieTitle>
                      {
                        getMovieTitle(movie.title)
                      }
                    </MovieTitle>
                  </Col>
                </Row>
                <Row className="hideOnMobile">
                  <Col span={24} style={{textTransform: 'uppercase'}}>
                    { getMovieYear(movie.release_date) }&nbsp;•&nbsp; 
                    { getGenres(movie.genres) }&nbsp;•&nbsp;
                    { getMovieTime(movie.runtime) }
                  </Col>
                </Row>
              </Col>
              <Col span={winWidth < 420 ? 24 : 6}>
                <Row style={winWidth < 420 ? {float: 'left', marginRight: '-.3rem'} : {float: 'right'}} span={winWidth < 420 ? 12 : 24}>
                  {MovieRate(movie.vote_average, true)}
                </Row>
                <Row style={{float: 'right'}}>
                  {'(' + movie.vote_count + ' avaliações' +')'}
                </Row>
              </Col>
            </Row>
            <Row style={{margin: '.5rem 0'}}>
              <Col span={ winWidth < 420 ? 16 : 21 }>
                { getMovieOverview(movie.overview) }
              </Col>
              <Col span={ winWidth < 420 ? 8 : 3 }>
                <a style={{float: 'right', color: '#ff5656', textDecoration: 'underline'}} onClick={() => setModalIsOpen(true)}>
                  Ver Sinopse
                </a>
              </Col>
            </Row>
          </FooterMovieOverview>
        </ArticleCard>
      </div>
        <DivControls justify="space-around">
          <Col>
            <IconButton onClick={() => dislikeMovie()}>
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
            <IconButton style={{color: '#ff5656'}} onClick={() => likeMovie()}>
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
              <Row justify="center">
                {MovieRate(movie.vote_average, true)}
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

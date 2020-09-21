import React, { useEffect, useState, useContext } from 'react'
import Context from '../../store/context'
import api from '../../services/api'
import PageDefault from '../../components/PageDefault'
import { ImageBG, ImageFilter } from '../../components/Container'
import MovieCard from '../../components/MovieCard'
import { Row, Col } from 'antd'
import { Button, DivControls } from '../../components/Button'
import IconButton from '../../components/IconButton'
import Modal from '../../components/Modal'
import LikeIcon from '../../assets/icons/curti.svg'
import DislikeIcon from '../../assets/icons/n-curti.svg'

const apiKey = '?&api_key=97e4b05e62f59396b9df37e305734e91&language=pt-BR'

const UnratedMovies = () => {
  const { movieNumber, likes, dislikes, modalIsOpen, actions } = useContext(Context)
  const [movie, setMovie] = useState([])
  const [slideAnimate, setSlideAnimate] = useState(false)
  const imgPoster = movie.poster_path
 
  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      handleOpenModal(true)
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

  function handleOpenModal(boolean){
    actions({type: 'handleSetModalIsOpen', payload: boolean})
  }

  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 1})
  }, [])
  
  useEffect(() => {
    handleLoadMovie(movieNumber)
  }, [movieNumber])

  const imgBg = movie.backdrop_path

  function nextMovie(){
    setSlideAnimate(true)
    setTimeout(() => {
      actions({type:'handleSetMovieNumber', payload: movieNumber+1})
    }, 300);
  }
  
  function likeMovie(movie){
    
    var lastArr = likes.length - 1

    if (movie.imdb_id !== likes[lastArr]?.id){
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

    if (movie.imdb_id !== dislikes[lastArr]?.id){
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
        <Row span={24} align="center">
          <Col style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            position: 'absolute',
            top: '0',
            bottom: '6rem'
          }}>
            <MovieCard imgPoster={imgPoster} slideAnimate={slideAnimate}>
              {movie}
            </MovieCard>
          </Col>          
        </Row>
        <DivControls justify="space-around">
          <IconButton srcImg={DislikeIcon} setIconMarginTop={'.6rem'} onClick={() => dislikeMovie(movie)}>
            Não curti!
          </IconButton>
          <Button onClick={() => nextMovie()}>
            Pular
          </Button>
          <IconButton srcImg={LikeIcon} setIconMarginTop={'-.6rem'}  textColor="#ff5656" onClick={() => likeMovie(movie)}>
            Curti!
          </IconButton>
        </DivControls>
      </PageDefault>
      {/* START MODAL OVERVIEW */}
      { modalIsOpen ? (<Modal imgPoster={imgPoster}>{movie}</Modal> ) : null } 
      {/* END MODAL OVERVIEW */}
    </>     
  )
}

export default UnratedMovies

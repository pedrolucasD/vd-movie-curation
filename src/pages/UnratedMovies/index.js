import React, {useEffect, useState, useContext} from 'react'
import Context from '../../store/context'
import api from '../../services/api'
import PageDefault from '../../components/PageDefault'
import { ImageBG, ImageFilter } from '../../components/Container'
import { ArticleCard } from '../../components/ArticleCard'
import { FooterMovieOverview, MovieTitle } from '../../components/ArticleCard/components/FooterMovieOverview'
import { Row, Col } from 'antd'
import { MovieRate } from '../../components/Rate/index'
import { DivControls, IconButton, Button } from '../../components/Button'
import LikeIcon from '../../assets/icons/curti.png'
import DislikeIcon from '../../assets/icons/n-curti.png'

const apiKey = '?api_key=97e4b05e62f59396b9df37e305734e91&language=pt-BR'

const UnratedMovies = () => {
  const { movieNumber, likes, dislikes, actions } = useContext(Context)
  const [movie, setMovie] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  async function handleLoadMovie(movieNumber){
    try {
      const response = await api.get('/'+movieNumber+apiKey)
      setMovie(response.data)
    } catch {
      nextMovie()
    }
  }
  
  useEffect(() => {
    handleLoadMovie(movieNumber)
  }, [movieNumber])
  
  const imgBg = movie.backdrop_path
  const imgPoster = movie.poster_path

  function nextMovie(){
    actions({type:'handleSetMovieNumber', payload: movieNumber+1})
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

  function getMovieTagline(tagline){
    const movieTagline = tagline?.length > 75 ? tagline?.substr(0, 75)+"..." : tagline
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
      <ImageBG srcImg={imgBg} />
      <PageDefault>
        <ArticleCard srcImg={imgPoster} style={{margin: '1rem'}}>
          <FooterMovieOverview>     
            <Row align="middle">
              <Col span={18}>
                <Row style={{margin: '.4 rem 0'}}>
                  <Col>
                    <MovieTitle>
                      {
                        getMovieTitle(movie.title)
                      }
                    </MovieTitle>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{textTransform: 'uppercase'}}>
                    { getMovieYear(movie.release_date) }&nbsp;•&nbsp; 
                    { getGenres(movie.genres) }&nbsp;•&nbsp;
                    { getMovieTime(movie.runtime) }
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row style={{float: 'right', marginRight: '-.3rem'}}>
                  {MovieRate(movie.vote_average)}
                </Row>
                <Row style={{float: 'right', fontSize: '.7rem'}}>
                  {'(' + movie.vote_count + ' avaliações' +')'}
                </Row>
              </Col>
            </Row>
            <Row style={{margin: '.5rem 0'}}>
              <Col span={21}>
                { getMovieTagline(movie.tagline === "" ? movie.overview : movie.tagline) }
              </Col>
              <Col span={3}>
                <a style={{float: 'right', color: '#ff5656', textDecoration: 'underline'}}>
                  Ver Sinopse
                </a>
              </Col>
            </Row>
          </FooterMovieOverview>        
        </ArticleCard>
        <DivControls justify="space-around">
          <Col>
            <IconButton onClick={() => dislikeMovie()}>
              <img src={DislikeIcon} style={{maxWidth: '1.2rem', marginRight: '.5rem', marginTop: '6%'}}/>
              Não curti!
            </IconButton>
          </Col>
          <Col>
            <Button onClick={() => nextMovie()}>
              Pular
            </Button>
          </Col>
          <Col>
            <IconButton style={{color: '#ff5656'}} onClick={() => likeMovie()}>
              <img src={LikeIcon} style={{maxWidth: '1.2rem', marginRight: '.5rem', marginTop: '-6%'}}/>
              Curti!
            </IconButton>
          </Col>
        </DivControls>
      </PageDefault>
    </>     
  )
}

export default UnratedMovies

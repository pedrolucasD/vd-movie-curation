import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import PageDefault from '../../components/PageDefault'
import { MainCard } from '../../components/MainCard'
import { Container, ImageBG } from '../../components/Container'
import { StdFooter } from '../../components/Footer'
import { IconButton, Button } from '../../components/Button'
import LikeIcon from '../../assets/icons/curti.png'
import DislikeIcon from '../../assets/icons/n-curti.png'
import { MovieOverview, MovieTitle, MovieDetails } from '../../components/MainCard/components/MovieOverview'
import EmptyMovieOrImage from '../../assets/img/video-camera-vazio.png'
import { Row, Col } from 'antd'
import { getMovieRate } from '../../components/Rate/index'

const apiKey = '?api_key=97e4b05e62f59396b9df37e305734e91&language=pt-BR'

const UnratedMovies = () => {
  
  const [movieNumber, setMovieNumber] = useState(2)
  const [movie, setMovie] = useState([])

  useEffect(() => {
    loadMovie(movieNumber)
  }, [movieNumber])


  async function loadMovie(movie){
    const response = await api.get('/'+movie+apiKey)
    console.log(response)
    setMovie(response.data)
  }

  function nextMovie(){
    let number = movieNumber + 1
    setMovieNumber(number)
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

  const imgBg = movie.backdrop_path
  const imgPoster = movie.poster_path
  
  return(
    <Container>
      <ImageBG srcImg={imgBg} />
      <PageDefault>
        <MainCard srcImg={imgPoster} isEmpty={EmptyMovieOrImage}>
          <MovieOverview>
            <Row align="middle">
              <Col span={18}>
                <MovieDetails align="middle" style={{marginBottom: '1rem'}}>
                  <Col>
                    <MovieTitle>
                      {
                        getMovieTitle(movie.title)
                      }
                    </MovieTitle>
                  </Col>
                </MovieDetails>
                <MovieDetails align="middle">
                  <Col span={18} style={{textTransform: 'uppercase'}}>
                    { getMovieYear(movie.release_date) }&nbsp;•&nbsp; 
                    { getGenres(movie.genres) }&nbsp;•&nbsp;
                    { getMovieTime(movie.runtime) }
                  </Col>
                </MovieDetails>
              </Col>
              <Col span={6}>
                <MovieDetails align="middle" style={{float: 'right', marginBottom: '-.2rem', marginRight: '-.3rem'}}>
                  {getMovieRate(movie.vote_average)}
                </MovieDetails>
                <MovieDetails align="middle" style={{float: 'right', fontSize: '.7rem', marginTop: '-.2rem'}}>
                  {'(' + movie.vote_count + ' avaliações' +')'}
                </MovieDetails>
              </Col>
            </Row>
            <MovieDetails align="middle" >
              <Col span={21}>
                { getMovieTagline(movie.tagline === "" ? movie.overview : movie.tagline) }
              </Col>
              <Col span={3}>
                <a style={{float: 'right', color: '#ff5656', textDecoration: 'underline'}}>
                  Ver Sinopse
                </a>
              </Col>
            </MovieDetails>
              
          </MovieOverview>
        </MainCard>
      </PageDefault>
      <StdFooter>
        <IconButton>
          <img src={DislikeIcon} style={{maxWidth: '1.2rem', marginRight: '.5rem', marginTop: '6%'}}/>
          Não curti!
        </IconButton>
        <Button onClick={() => nextMovie()}>
          Pular
        </Button>
        <IconButton style={{color: '#ff5656'}}>
          <img src={LikeIcon} style={{maxWidth: '1.2rem', marginRight: '.5rem', marginTop: '-6%'}}/>
          Curti!
        </IconButton>
      </StdFooter>      
    </Container>
  )
}

export default UnratedMovies

import React, { useContext } from 'react'
import Context from '../../store/context'
import { 
  getFormatedGenres,
  getFormatedMovieTime,
  getFormatedMovieTitle,
  getFormatedMovieYear,
  getFormatedOverview 
} from '../../components/CommonFunctions'
import { MovieRate } from '../../components/Rate'
import { 
  Card,
  CardFooter,
  CardFooterTitle 
} from './styles'
import { Row, Col } from 'antd'



const MovieCard = (props) => {
  const { actions } = useContext(Context)
  const movie = props.children

  return(
    <>
      <Card srcImg={props.imgPoster} slide={props.slideAnimate}>
      <CardFooter>
          <Row span={24} align="middle" className="standard-row-padding">
            <Col md={18} lg={18}>
              <Col span={24}>
                <Row>
                  <CardFooterTitle>
                    {getFormatedMovieTitle(movie.title)}
                  </CardFooterTitle>
                </Row>
              </Col>
              <Col xs={0} sm={0} md={24} lg={24}>
                <Row style={{textTransform: 'uppercase'}}>
                  { getFormatedMovieYear(movie.release_date) }&nbsp;•&nbsp; 
                  { getFormatedGenres(movie.genres) }&nbsp;•&nbsp;
                  { getFormatedMovieTime(movie.runtime) }
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
              <div>
                { getFormatedOverview(movie.overview) == true ? "Sinopse não encontrada" : getFormatedOverview(movie.overview, 25, 80) }
                <a hidden={getFormatedOverview(movie.overview) == true ? true : false}
                  style={{color: '#ff5656', textDecoration: 'underline'}}
                  onClick={() => actions({type:'handleSetModalIsOpen', payload: true})}
                >
                  Ver Sinopse
                </a>
              </div>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </>
  )
}

export default MovieCard
import React, {useEffect, useContext} from 'react'
import Context from '../../store/context'
import PageDefault from '../../components/PageDefault'
import EmptyMovie from '../../assets/img/video-camera-vazio.png'
import { PageTitle } from '../../components/PageTitle'
import { Row, Col } from 'antd'
import { EmptyPageBg } from '../../components/EmptyPageBg'
import { ContainerSecondary } from '../../components/Container'
import { ArticleThumbnail, ThumbFooter, ThumbTitle } from '../../components/ArticleThumbnail'
import { MovieRate } from '../../components/Rate'


const DislikedMovies = () => {
  const winWidth = window.screen.width
  const { currentPage, dislikes, actions } = useContext(Context)
  
  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 3})
  }, [])

  function getMovieOverview(tagline){
    const movieTagline = winWidth < 430 ?
    (tagline?.length > 10 ? tagline?.substr(0, 10)+"..." : tagline) :
    (tagline?.length > 30 ? tagline?.substr(0, 30)+"..." : tagline) 
    
    if(tagline === ""){
      return "Sinopse não encontrada"
    } else {
      return(
        <>
          {movieTagline}
          <a style={{float: 'right', color: '#ff5656', textDecoration: 'underline'}}>
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

  console.log(dislikes)

  return(
    <>
      <PageDefault>
        <div style={{padding: '0 13%'}}>
          { 
            dislikes.length == 0 ?
            <>
              <PageTitle >
                Nenhum filme
              </PageTitle>  
              <EmptyPageBg imgSrc={EmptyMovie}/>  
            </> :
            <div style={{backgroundColor: '#f4f4f4', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
              <PageTitle>
                Filmes não curtidos
              </PageTitle>
              <ContainerSecondary>
                <Row gutter={winWidth < 321 ? [0, 10] : winWidth < 361 ? [0, 24] : winWidth < 421 ? [0, 32] : [0, 64] } justify={ winWidth < 420 ? 'space-around' : 'space-between'} align="middle">
                  <>
                    {
                      dislikes.slice(0).reverse().map(dislike => (
                        <Col>
                          <ArticleThumbnail srcImg={dislike.poster_path}>
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
                                  { MovieRate(dislike.vote_average, true, '1rem') }
                                </Col>
                                <Col span={12} style={{textAlign: 'right', margin: '0', fontSize: '.8rem'}} className="hideOnMobile">
                                  {'(' + dislike.vote_count + ' avaliações' +')'}
                                </Col>
                              </Row>
                              <Row className="hideOnMobile">
                                <Col>
                                  { getMovieOverview(dislike.overview) }
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
      </PageDefault>
    </>
  )
}

export default DislikedMovies

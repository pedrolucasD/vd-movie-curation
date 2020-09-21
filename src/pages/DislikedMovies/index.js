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
import Modal from '../../components/Modal'
import { getFormatedMovieTitle, getFormatedOverview } from '../../components/CommonFunctions'

const DislikedMovies = () => {
  const winWidth = window.screen.width
  const { modalIsOpen, dislikes, actions } = useContext(Context)
  const [movieSelected, setMovieSelected] = useState([])
  const imgPoster = movieSelected.poster_path
  
  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 3})
  }, [])
  
  function handleOpenModalByMovie(movie){
    setMovieSelected(movie)
    handleOpenModal(true)
  }

  function handleOpenModal(boolean){
    actions({type: 'handleSetModalIsOpen', payload: boolean})
  }

  return(
    <>
      <PageDefault>
        <div style={{padding: '0 2rem'}}>
          { 
            dislikes.length == 0 ?
            <>
              <PageTitle>
                Nenhum filme
              </PageTitle>  
              <EmptyPageBg imgSrc={EmptyMovie}/>  
            </> :
            <div style={{backgroundColor: '#f4f4f4', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
              <PageTitle>
                Filmes não curtidos
              </PageTitle>
              <ContainerSecondary>
                <Row gutter={winWidth < 321 ? [0, 10] : winWidth < 361 ? [0, 24] : winWidth < 421 ? [0, 32] : [0, 64] }
                  justify={ winWidth < 420 ? 'space-around' : 'space-between'} align="middle">
                  <>
                    {
                      dislikes.slice(0).reverse().map(dislike => (
                        <Col>
                          <ArticleThumbnail 
                            srcImg={dislike.poster_path}
                            onClick={winWidth < 421 ? () => handleOpenModalByMovie(dislike) : ""}>
                            <ThumbFooter>
                              <Row>
                                <Col span={24}>
                                  <ThumbTitle>
                                    { getFormatedMovieTitle(dislike.title) }
                                  </ThumbTitle>
                                </Col>
                              </Row>
                              <Row gutter={[0, 10]} align="middle">
                                <Col xs={21} sm={21} md={12} lg={12} xl={12}>
                                  { MovieRate(dislike.vote_average, winWidth > 420 ? 24 : 18, false, false) }
                                </Col>
                                <Col xs={0} sm={0} md={12} lg={12} xl={12}
                                  style={{textAlign: 'right', margin: '0', fontSize: '.8rem'}}
                                  className="hideOnMobile">
                                  {'(' + dislike.vote_count + ' avaliações' +')'}
                                </Col>
                              </Row>
                              <Row className="hideOnMobile">
                                <div>
                                  { getFormatedOverview(dislike.overview) == true ? "Sinopse não encontrada" : getFormatedOverview(dislike.overview, 10, 30) }
                                  <a hidden={getFormatedOverview(dislike.overview) == true ? true : false}
                                    style={{color: '#ff5656', textDecoration: 'underline'}}
                                    onClick={() => handleOpenModalByMovie(dislike)}>
                                    Ver Sinopse
                                  </a>
                                </div>
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
      {/* START MODAL OVERVIEW */}
      { modalIsOpen ? ( <Modal imgPoster={imgPoster}>{ movieSelected }</Modal> ) : null } 
      {/* END MODAL OVERVIEW */}
    </>
  )
}

export default DislikedMovies

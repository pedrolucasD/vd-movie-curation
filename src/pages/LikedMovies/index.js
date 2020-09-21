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

const LikedMovies = () => {
  const winWidth = window.screen.width
  const { modalIsOpen, likes, actions } = useContext(Context)
  const [movieSelected, setMovieSelected] = useState([])
  const imgPoster = movieSelected.poster_path

  function handleOpenModal(boolean){
    actions({type: 'handleSetModalIsOpen', payload: boolean})
  }
  
  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 2})
  }, [])
  
  function handleOpenModalByMovie(movie){
    setMovieSelected(movie)
    handleOpenModal(true)
  }

  return(
    <>
      <PageDefault>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{padding: '0 2rem'}}>
            { 
              likes.length == 0 ?
              <>
                <PageTitle >
                  Nenhum filme
                </PageTitle>  
                <EmptyPageBg imgSrc={EmptyMovie}/>  
              </> :
              <div style={{ backgroundColor: '#f4f4f4',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0}}>
                <PageTitle>
                  Filmes Curtidos
                </PageTitle>
                <ContainerSecondary>
                  <Row gutter={winWidth < 321 ? [0, 10] : winWidth < 361 ? [0, 24] : winWidth < 421 ? [0, 32] : [0, 64] } 
                    justify={ winWidth < 420 ? 'space-around' : 'space-between'}
                    align="middle">
                    <>
                      {
                        likes.slice(0).reverse().map(like => (
                          <Col>
                            <ArticleThumbnail
                              srcImg={like.poster_path}
                              onClick={winWidth < 421 ? () => handleOpenModalByMovie(like) : "" }>
                              <ThumbFooter>
                                <Row>
                                  <Col span={24}>
                                    <ThumbTitle>
                                      { getFormatedMovieTitle(like.title) }
                                    </ThumbTitle>
                                  </Col>
                                </Row>
                                <Row gutter={[0, 10]} align="middle">
                                  <Col xs={21} sm={21} md={12} lg={12} xl={12}>
                                    { MovieRate(like.vote_average, winWidth > 420 ? 24 : 18, false, false) }
                                  </Col>
                                  <Col xs={0} sm={0} md={12} lg={12} xl={12}
                                    style={{textAlign: 'right', margin: '0', fontSize: '.8rem'}}
                                    className="hideOnMobile">
                                    {'(' + like.vote_count + ' avaliações' +')'}
                                  </Col>
                                </Row>
                                <Row className="hideOnMobile">
                                  <Col>
                                    <div>
                                    { getFormatedOverview(like.overview) == true ? "Sinopse não encontrada" : getFormatedOverview(like.overview, 10, 30) }
                                    <a hidden={getFormatedOverview(like.overview) == true ? true : false}
                                      style={{color: '#ff5656', textDecoration: 'underline'}}
                                      onClick={() => handleOpenModalByMovie(like)}>
                                      Ver Sinopse
                                    </a>
                                  </div>
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
      {/* START MODAL OVERVIEW */}
      { modalIsOpen ? ( <Modal imgPoster={imgPoster}>{ movieSelected }</Modal> ) : null } 
      {/* END MODAL OVERVIEW */}
    </>
  )
}

export default LikedMovies

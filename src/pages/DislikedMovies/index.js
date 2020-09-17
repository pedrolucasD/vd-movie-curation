import React, {useEffect, useContext} from 'react'
import Context from '../../store/context'
import PageDefault from '../../components/PageDefault'
import EmptyMovie from '../../assets/img/video-camera-vazio.png'
import { PageTitle } from '../../components/PageTitle'
import { Row, Col } from 'antd'
import { EmptyPageBg } from '../../components/EmptyPageBg'
import { ContainerSecondary } from '../../components/Container'
import { ArticleThumbnail } from '../../components/ArticleThumbnail'


const DislikedMovies = () => {
  const { currentPage, dislikes, actions } = useContext(Context)
  
  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 3})
  }, [])

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
                <Row gutter={[16, 64]} justify="space-between" align="middle">
                  <>
                    {
                      dislikes.slice(0).reverse().map(dislike => (
                        <Col>
                          <ArticleThumbnail srcImg={dislike.poster_path}>
                            {dislike.title}
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

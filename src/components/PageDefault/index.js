import React from 'react'
import { Main, MainContent} from './styles'
import { StdHeader, HeaderButtom } from '../Header'
import LogoVD from '../../assets/img/logo-viva-decora.png'
import { Container } from '../../components/Container'
import { StdFooter } from '../../components/Footer'
import { Col, Row } from 'antd'


const PageDefault = ({children}) => {
  return(
    <Main>
      <Container>
        <StdHeader>
          <Row align="middle" justify="space-around" style={{width: '100%'}}>
            <Col style={{margin: '1.5rem'}}>
              <img src={LogoVD} />
            </Col>
          </Row>
          <Row align="middle" justify="space-around" style={{justifyContent: 'center', width: '100%'}}>
            <Col>
              <HeaderButtom to='/'>
                Filmes não curados
              </HeaderButtom>
            </Col>
            <Col>
              <HeaderButtom to='/likes'>
                Filmes curtidos
              </HeaderButtom>
            </Col>
            <Col>
              <HeaderButtom to='/dislikes'>
                Filmes não curtidos
              </HeaderButtom>
            </Col>
          </Row>
        </StdHeader>
        <Row style={{position: 'relative', height: '80%'}} align="middle">
          {children}
        </Row>
      </Container>
      <StdFooter>
      </StdFooter> 
    </Main>
  )
}

export default PageDefault
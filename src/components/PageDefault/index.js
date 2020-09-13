import React from 'react'
import { Main, MainContent} from './styles'
import { StdHeader, HeaderButtom } from '../Header'
import LogoVD from '../../assets/img/logo-viva-decora.png'
import { Col } from 'antd'


const PageDefault = ({children}) => {
  return(
    <Main>
      <div className="background"/>
      <StdHeader gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <img src={LogoVD} />
        </Col>
      </StdHeader>
      <StdHeader gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        <Col span={3.5}>
          <HeaderButtom to='/'>
            Filmes não curados
          </HeaderButtom>
        </Col>
        <Col span={3.5}>
          <HeaderButtom to='/likes'>
            Filmes curtidos
          </HeaderButtom>
        </Col>
        <Col span={3.5}>
          <HeaderButtom to='/dislikes'>
            Filmes não curtidos
          </HeaderButtom>
        </Col>
      </StdHeader>
      <MainContent style={{padding: '2rem'}}>
        {children}
      </MainContent>
    </Main>
  )
}

export default PageDefault
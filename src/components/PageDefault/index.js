import React from 'react'
import { Main } from './styles'
import { StdHeader, HeaderButtom } from '../Header'
import { Container } from '../Container'
import { StdFooter } from '../Footer'
import { IconButton, Button } from '../Button'
import LogoVD from '../../assets/img/logo-viva-decora.png'
import LikeIcon from '../../assets/icons/curti.png'
import DislikeIcon from '../../assets/icons/n-curti.png'

import { Col, Row } from 'antd'


const { Content } = Container

const PageDefault = ({children}) => {
  return(
    <Main>
      <Container>

        <StdHeader gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <img src={LogoVD} />
          </Col>
        </StdHeader>
        <StdHeader gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          <Col span={3.5}>
            <HeaderButtom>
              Filmes não curados
            </HeaderButtom>
          </Col>
          <Col span={3.5}>
            <HeaderButtom>
              Filmes curtidos
            </HeaderButtom>
          </Col>
          <Col span={3.5}>
            <HeaderButtom>
              Filmes não curtidos
            </HeaderButtom>
          </Col>
        </StdHeader>

        <Content style={{textAlign: 'center', pagging: '2rem', marginRight: '.5rem'}}>
          {children}
        </Content>

        <StdFooter>
          <IconButton>
            <img src={DislikeIcon} style={{maxWidth: '1.2rem', marginRight: '.5rem'}}/>
            Não curti!
          </IconButton>
          <Button>
            Pular
          </Button>
          <IconButton>
            <img src={LikeIcon} style={{maxWidth: '1.2rem', marginRight: '.5rem'}}/>
            Curti!
          </IconButton>
        </StdFooter>

      </Container>
    </Main>
  )
}

export default PageDefault
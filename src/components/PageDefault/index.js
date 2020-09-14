import React from 'react'
import { Body, Main, FooterIconDivider } from './styles'
import { Header, Nav } from '../Header'
import { Footer } from '../../components/Footer'
import { HeaderButtom } from '../../components/Button'
import { ImFacebook, ImInstagram, ImPinterest2 } from "react-icons/im";
import { TiSocialGooglePlus  } from "react-icons/ti";
import LogoVD from '../../assets/img/logo-viva-decora.png'


const PageDefault = ({children}) => {
  return(
    <Body>
      <Header>
        <div style={{width: '100%', marginBottom: '1rem'}}>
          <img src={LogoVD} />
        </div>
        <Nav>
          <HeaderButtom to='/'>
            Filmes não curados
          </HeaderButtom>
          <HeaderButtom to='/likes'>
            Filmes curtidos
          </HeaderButtom>
          <HeaderButtom to='/dislikes'>
            Filmes não curtidos
          </HeaderButtom>
        </Nav>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
        <ImFacebook size={16} fill="white" />
        <FooterIconDivider />
        <ImInstagram size={16} fill="white" />
        <FooterIconDivider />
        <ImPinterest2 size={16} fill="white" />
        <FooterIconDivider />
        <TiSocialGooglePlus size={22} fill="white" style={{marginTop: '-.2rem'}}/>
      </Footer> 
    </Body>
  )
}

export default PageDefault
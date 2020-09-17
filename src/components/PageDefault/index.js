import React, {useState, useContext} from 'react'
import Context from '../../store/context'
import { Body, Main, FooterIconDivider } from './styles'
import { Header, Nav } from '../Header'
import { Footer } from '../../components/Footer'
import { HeaderButtom, mobileSiderButton } from '../../components/Button'
import { ImFacebook, ImInstagram, ImPinterest2 } from "react-icons/im";
import { TiSocialGooglePlus  } from 'react-icons/ti';
import { FiMenu } from 'react-icons/fi'
import { MobileSider } from  '../../components/MobileSider'
import LogoVD from '../../assets/img/logo-viva-decora.png'
import { Link } from "react-router-dom"



const PageDefault = ({children}) => {

  const [menuColapse, setMenuColapse] = useState(null)

  const { currentPage } = useContext(Context)

  return(
    <>
      <Body openMenu={menuColapse}>
        <Header bgSolid={currentPage}>
          <div style={{float: "left", position: 'absolute', padding: '.5rem 0'}}>
            <mobileSiderButton className="hideOnDesktop" onClick={() => menuColapse == null ? setMenuColapse(true) : menuColapse == true ? setMenuColapse(false) : setMenuColapse(true)}>
              <FiMenu size={20} style={{color: '#fff'}}/>
            </mobileSiderButton>
          </div>
          <div style={{width: '100%'}}>
            <img src={LogoVD} style={{position: 'relative'}}/>
          </div>
          <Nav className="hideOnMobile" style={{marginTop: '1rem'}}>
            <HeaderButtom to='/' isActive={currentPage == 1 ? true : false }>
              Filmes não curados
            </HeaderButtom>
            <HeaderButtom to='/likes' isActive={currentPage == 2 ? true : false }>
              Filmes curtidos
            </HeaderButtom>
            <HeaderButtom to='/dislikes' isActive={currentPage == 3 ? true : false }>
              Filmes não curtidos
            </HeaderButtom>
          </Nav>
        </Header>
        <MobileSider openSider={menuColapse}>
          <Link to='/' isActive={currentPage == 1 ? true : false } onClick={() => setMenuColapse(false)}>
            Filmes não curados
          </Link>
          <Link to='/likes' isActive={currentPage == 2 ? true : false } onClick={() => setMenuColapse(false)}>
            Filmes curtidos
          </Link>
          <Link to='/dislikes' isActive={currentPage == 3 ? true : false } onClick={() => setMenuColapse(false)}>
            Filmes não curtidos
          </Link>
        </MobileSider>
        <Main defineWidthMargin={currentPage != 1 ? "10%" : 'unset'}>
          {children}
        </Main>
        <Footer className="hideOnMobile">
          <ImFacebook size={16} fill="white" />
          <FooterIconDivider />
          <ImInstagram size={16} fill="white" />
          <FooterIconDivider />
          <ImPinterest2 size={16} fill="white" />
          <FooterIconDivider />
          <TiSocialGooglePlus size={22} fill="white" style={{marginTop: '-.2rem'}}/>
        </Footer> 
      </Body>
    </>
  )
}

export default PageDefault
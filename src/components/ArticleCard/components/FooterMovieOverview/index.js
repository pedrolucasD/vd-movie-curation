import styled from 'styled-components'

export const FooterMovieOverview = styled.footer`
  min-height: 5rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  padding: 1rem;
  color: #fff;
  text-shadow: 0px 0px .2rem black;
  background: ${ props => props.srcImg == null ? 'linear-gradient(to top, rgb(0, 0, 0, .5), rgb(0, 0, 0, 0))' : 'unset' };

  
  @media only screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
    padding: .5rem;
    text-shadow: unset;
    .MobileTextAlignLeft{
      text-align: left;
    }
  }
`

export const MovieTitle = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0px 0px .2rem black;
  text-transform: uppercase;

  @media only screen and (max-width: 600px){
    font-size: 1.3rem;
    text-shadow: unset;
  }
`
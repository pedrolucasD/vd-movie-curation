import styled from 'styled-components'

export const FooterMovieOverview = styled.footer`
  min-height: 5rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  padding: .5rem 1.5rem;
  color: #fff;
  text-shadow: 0px 0px .2rem black;

  
  @media only screen and (max-width: 420px){
    display: flex;
    flex-direction: column;
    padding: .25rem .75rem;
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

  @media only screen and (max-width: 420px){
    font-size: 1.3rem;
  }
`
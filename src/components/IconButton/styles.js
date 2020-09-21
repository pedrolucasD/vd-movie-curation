import styled from 'styled-components'

export const IconButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  outline: inherit;
  margin: 0 1rem;
 
  height: 4rem;
  min-width: 12rem;
  border-radius: 4rem;
  background-color: #FFF;
  
  text-transform: uppercase;
  font-weight: 400;

  :active {
    opacity: 0.93;
  }

  @media only screen and (max-width: 640px) {
    min-width: 4.5rem;
    min-height: 4.5rem;
    border-radius: 4.5rem;
    padding: 0;
  }
` 

export const Icon = styled.img`
  width: 1.8rem;
  margin-top: ${props => props.setMarginTop};
`
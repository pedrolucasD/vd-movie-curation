import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row } from 'antd'

export const DivControls = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: absolute;
  padding: 1.6rem;

  @media only screen and (max-width: 420px) {
    position: absolute;
    bottom: 1rem;
    padding: 0;
  }

`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: inherit;

  margin: 0 1rem;    
  text-align: center;
  height: 4rem;
  border-radius: 4rem;
  min-width: fit-content;
  background-color: #fff;
  
  text-transform: uppercase;
  font-weight: 400;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 1.5rem;

  :active {
    opacity: 0.93;
  }

  @media only screen and (max-width: 320px){
    height: 2rem;
    border-radius: 2rem;
    margin: 0; 
  }

` 

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  outline: inherit;

  margin: 0 1rem;  
  text-align: center;
  height: 4rem;
  width: fit-content;
  border-radius: 4rem;
  min-width: 12rem;
  background-color: #FFF;
  
  text-transform: uppercase;
  font-weight: 400;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;

  :active {
    opacity: 0.93;
  }

  @media only screen and (min-width: 320px) and (max-width: 420px) {
    min-width: 5rem;
    min-height: 5rem;
    border-radius: 5rem;
    padding: 0;
  }

  @media only screen and (max-width: 320px){
    min-width: 4.5rem;
    min-height: 4.5rem;
    border-radius: 3rem;
    padding: 0;
  }

` 

export const HeaderButtom = styled(Link)`
	background: none;
	color: #fff;
	font: inherit;
	cursor: pointer;
  outline: inherit;
  text-decoration: none;
  font-size: .8rem;
  font-weight: ${props => props.isActive ? 400 : 300 };
  text-align: center;
  text-transform: uppercase;
  border-bottom: ${props => props.isActive ? '.25rem solid #fff' : 'none' };
  margin: 0 2rem;

  :hover {
    color: #fff;
  }

`

export const mobileSiderButton = styled.a`
  :hover {
    color: #fff;
  }

`
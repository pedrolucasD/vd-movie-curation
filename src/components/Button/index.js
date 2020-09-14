import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row } from 'antd'

export const DivControls = styled(Row)`
  width: 100%;
  justify-content: center;
  margin: 1rem 0;
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
  background-color: #FFF;
  
  text-transform: uppercase;
  font-weight: 400;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
` 

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  outline: inherit;

  margin: 0 1rem;  
  text-align: center;
  height: 4rem;
  border-radius: 4rem;
  min-width: 12rem;
  width: fit-content;
  background-color: #FFF;
  
  text-transform: uppercase;
  font-weight: 400;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
` 

export const HeaderButtom = styled(Link)`
	background: none;
	color: #fff;
	border: none;
	font: inherit;
	cursor: pointer;
  outline: inherit;
  text-decoration: none;
  font-size: .8rem;
  font-weight: 300;
  min-width: 12rem;
  text-align: center;
  text-transform: uppercase;

  :focus {
    border-bottom: solid .1rem #fff;
    font-weight: bolder;
  }
`
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row} from 'antd'


export const StdHeader = styled(Row)`
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  height: 15%;

`

export const HeaderButtom = styled(Link)`
	background: none;
	color: #fff;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
  outline: inherit;
  text-decoration: none;
  margin: 0 2rem;
  

  font-size: .8rem;
  font-weight: 300;
  width: inherit;
  text-align: center;
  text-transform: uppercase;

  :focus {
    border-bottom: solid .1rem #fff;
    font-weight: bolder;
  }
`
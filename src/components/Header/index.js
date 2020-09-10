import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Layout } from 'antd'

const { Header, Footer, Content } = Layout

export const StdHeader = styled(Row)`
  text-align: center;
  padding: 1.5rem;

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
  

  font-size: .8rem;
  width: inherit;
  text-align: center;
  text-transform: uppercase;

  :focus {
    border-bottom: solid .1rem #fff;
    font-weight: bolder;
  }
`
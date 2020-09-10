import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Layout } from 'antd'

const { Header, Footer, Content } = Layout

export const StdFooter = styled(Row)`
  bottom: 0;
  text-align: center;
  padding: 2rem;
  position: fixed;

  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`
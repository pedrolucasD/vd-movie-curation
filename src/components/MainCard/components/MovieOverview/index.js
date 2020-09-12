import styled from 'styled-components'
import { Row } from 'antd'

export const MovieOverview = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 30%;
  max-height: 30%;
  top: 70.0%;
  color: white;
  padding: 1rem;
`

export const MovieTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0px 0px .2rem black;
  margin: 0;
`

export const MovieDetails = styled(Row)`
  height: 2rem;
  text-shadow: 0px 0px .2rem black;
`
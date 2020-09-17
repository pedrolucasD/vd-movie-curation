import styled from 'styled-components'

export const EmptyPageBg = styled.span`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-color: #f4f4f4;
`
import styled from 'styled-components'
import { Layout } from 'antd';
const urlImgApi = 'https://image.tmdb.org/t/p/w500/'

export const Container = styled(Layout)`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: inline-block;
  background: linear-gradient(-45deg, #ff1c1c, #ff5656);

`

export const ImageBG = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: inline-block;
  background: linear-gradient(-45deg, #ff1c1c, #ff5656);
  background-image: url(${ props => urlImgApi+props.srcImg });
  background-size: cover;
  opacity: .2;
`
import React from 'react'
import { IconButtonStyle, Icon } from './styles'
import { Row, Col } from 'antd'

const IconButton = (props) => {
  return (
    <>
      <IconButtonStyle onClick={props.onClick}>
        <Row align="center">
          <Row align="middle" style={{justifyContent: 'center'}}>
            <Col>
              <Icon src={props.srcImg} setMarginTop={props.setIconMarginTop}/>
            </Col>
            <Col className="dy-non-mobi" style={{margin: 0, color: props.textColor}}>
              &nbsp;&nbsp;
              {props.children}
            </Col>
          </Row>
        </Row>
      </IconButtonStyle>
    </>
  )
}

export default IconButton
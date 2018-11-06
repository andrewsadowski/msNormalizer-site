import React, { Component } from 'react'
import styled from 'styled-components'

import Info from './info'
// import Image from './image'
import Img from '../images/msNormalizer.png'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`

export default class Card extends Component {
  render() {
    return (
      <CardContainer>
        <img src={Img} />
        <Info />
      </CardContainer>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

import Info from './info'
// import Image from './image'
import Img from '../images/msNormalizer.png'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-width: fit-content;
  max-width: 500px;
  margin: auto;
  margin-top: 75px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
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

import React, { Component } from 'react'
import styled from 'styled-components'

import Info from './info'
import Image from './image'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Card extends Component {
  render() {
    return (
      <CardContainer>
        <Image />
        <Info />
      </CardContainer>
    )
  }
}

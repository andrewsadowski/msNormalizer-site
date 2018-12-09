import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderInfo = styled.h1`
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  line-height: 1;
`

export default class info extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderInfo>
          The easiest way fix non-continuous MS time values in srt files.
        </HeaderInfo>
      </HeaderContainer>
    )
  }
}

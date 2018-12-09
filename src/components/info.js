import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderInfo = styled.h1`
  padding: 5px;
  font-family: 'Roboto';
  text-align: center;
  line-height: 1;
  font-size: 15px;
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

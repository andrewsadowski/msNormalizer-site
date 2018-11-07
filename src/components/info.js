import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderInfo = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  line-height: 1;
`

export default class info extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderInfo>
          Fix non-continuous MS values in SubRip(srt) files.
        </HeaderInfo>
      </HeaderContainer>
    )
  }
}

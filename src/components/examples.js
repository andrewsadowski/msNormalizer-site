import React, { Component } from 'react'
import styled from 'styled-components'
import GifDir from '../images/msNorm_dir.gif'
import GifSingle from '../images/msNorm_singleFile.gif'

const ExampleContainer = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`

const ExampleGif = styled.img``

export default class Examples extends Component {
  render() {
    return (
      <ExampleContainer>
        <p>Examples</p>
        <ExampleGif src={GifSingle} />
        <ExampleGif src={GifDir} />
      </ExampleContainer>
    )
  }
}

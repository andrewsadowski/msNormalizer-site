import React, { Component } from 'react'
import styled from 'styled-components'
import GifDir from '../images/msNormalizer_Directory.gif'
import GifSingle from '../images/msNormalizer_SingleFile.gif'

const ExampleContainer = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`

const ExampleHeader = styled.p`
  align-self: center;
  font-family: 'Roboto', sans-serif;
`

const ExampleGif = styled.img`
  height: auto;
  width: auto;
`

export default class Examples extends Component {
  render() {
    return (
      <ExampleContainer>
        <ExampleHeader>Examples</ExampleHeader>
        <ExampleHeader>Process a single file as follows:</ExampleHeader>
        <ExampleGif src={GifSingle} />
        <ExampleHeader>Process an entire directory like this: </ExampleHeader>
        <ExampleGif src={GifDir} />
      </ExampleContainer>
    )
  }
}

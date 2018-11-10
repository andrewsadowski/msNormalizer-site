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
  font-weight: ${props => (props.bold ? '500b' : 'bold')};
  padding: 0;
`

const ExampleGif = styled.img`
  padding: 0;
  align-self: center;
  height: auto;
  width: auto;
  max-width: 650px;
`

export default class Examples extends Component {
  render() {
    return (
      <ExampleContainer>
        <ExampleHeader bold>Examples</ExampleHeader>
        <ExampleHeader>Process a single file as follows:</ExampleHeader>
        <ExampleGif src={GifSingle} />
        <ExampleHeader>Process an entire directory like this: </ExampleHeader>
        <ExampleGif src={GifDir} />
      </ExampleContainer>
    )
  }
}

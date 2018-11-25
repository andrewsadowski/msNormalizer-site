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
  font-family: 'Roboto\:900i', sans-serif;
  font-weight: ${props => (props.bold ? 900 : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : null)};
  font-size: ${props => (props.big ? '35px' : '20px')};
  padding: 0;
`
const ExampleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1450px) {
    flex-direction: column;
  }
`

const ExampleGifContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  /* justify-content: space-around; */
  padding: 15px;
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
        <ExampleHeader bold italic big>
          Examples
        </ExampleHeader>
        <ExampleSection>
          <ExampleGifContainer>
            <ExampleHeader>Process a single file as follows:</ExampleHeader>
            <ExampleGif src={GifSingle} />
          </ExampleGifContainer>
          <ExampleGifContainer>
            <ExampleHeader>
              Process an entire directory like this:{' '}
            </ExampleHeader>
            <ExampleGif src={GifDir} />
          </ExampleGifContainer>
        </ExampleSection>
      </ExampleContainer>
    )
  }
}

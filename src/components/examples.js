import React, { Component } from 'react'
import styled from 'styled-components'
import GifDir from '../images/msNormalizer_Directory.gif'
import GifSingle from '../images/msNormalizer_SingleFile.gif'

const ExampleContainer = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  width: auto;
`

const ExampleHeader = styled.p`
  align-self: center;
  font-family: 'Roboto', sans-serif;
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
  width: 100%;
  justify-content: space-evenly;
  padding: 2px;
  margin: 0 auto;
  @media (max-width: 960px) {
    flex-direction: column;
    img {
      /* max-width: 940px; */
      flex-direction: column;
      align-self: center;
    }
  }
`

const ExampleGif = styled.img`
  display: block;
  padding: 0;
  align-self: center;
  height: auto;
  width: 85%;
  max-width: 100%;
`

export default class Examples extends Component {
  render() {
    return (
      <ExampleContainer>
        <ExampleHeader bold italic big>
          Examples:
        </ExampleHeader>
        <ExampleSection>
          <ExampleGifContainer>
            <ExampleHeader>
              You can process a single file like this:
            </ExampleHeader>
            <ExampleGif src={GifSingle} />
          </ExampleGifContainer>
          <ExampleGifContainer>
            <ExampleHeader>
              Or process an entire directory like this:{' '}
            </ExampleHeader>
            <ExampleGif src={GifDir} />
          </ExampleGifContainer>
        </ExampleSection>
      </ExampleContainer>
    )
  }
}

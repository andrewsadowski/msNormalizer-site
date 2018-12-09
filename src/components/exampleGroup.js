import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const ExampleGroupContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

const WhatContainer = styled.div`
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    word-break: auto;
    font-size: 15px;
    width: 200px;
  }
`

const CodeSection = styled.div`
  h1 {
    font-family: 'Roboto\:900i', sans-serif;
    font-size: 18px;
  }
`

const CodeContainer = styled.div`
  margin: 10px;
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  padding: 10px;
`

export default class ExampleGroup extends Component {
  render() {
    return (
      <ExampleGroupContainer>
        <WhatContainer>
          <h1>What is it?</h1>
          <p>This CLI is a tool fixes corrupted MS values</p>
        </WhatContainer>
        <CodeSection>
          <h1>Install With:</h1>
          <CodeContainer>
            <code>npm install -g srt-ms-normalizer</code>
          </CodeContainer>
        </CodeSection>
      </ExampleGroupContainer>
    )
  }
}

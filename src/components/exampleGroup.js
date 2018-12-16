import React, { Component } from 'react'
import styled from 'styled-components'

const ExampleGroupContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 40px;
    width: 100%;
  }
`

const WhatContainer = styled.div`
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 18px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    word-break: auto;
    font-size: 15px;
    width: 200px;
  }
  @media (max-width: 600px) {
    p {
      word-break: normal;
    }

    width: 400px;
    height: auto;
  }
`

const CodeSection = styled.div`
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 18px;
  }
`

const CodeContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px 5px 5px 5px;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  line-height: 30px;
  letter-spacing: 0px;
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
            <code>$ npm install -g srt-ms-normalizer</code>
          </CodeContainer>
        </CodeSection>
      </ExampleGroupContainer>
    )
  }
}

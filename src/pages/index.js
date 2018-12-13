import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'

import Card from '../components/card'
import Examples from '../components/examples'
import ExampleGroup from '../components/exampleGroup'
import Footer from '../components/footer'
import SectionBorder from '../components/sectionBorder'
import GithubRibbon from '../components/githubRibbon'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: auto;
`

export default class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GithubRibbon />
        <FlexContainer>
          <Card />
        </FlexContainer>
        <FlexContainer>
          <ExampleGroup />
        </FlexContainer>
        <SectionBorder />
        <Examples />
        <SectionBorder />
        <Footer />
      </Fragment>
    )
  }
}

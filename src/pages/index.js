import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'

import Card from '../components/card'
import Examples from '../components/examples'
import ExampleGroup from '../components/exampleGroup'
import GithubRibbon from '../components/githubRibbon'

const GlobalStyle = createGlobalStyle`
  body html {
    box-sizing: border-box;
  }
`

export default class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GithubRibbon />
        <Card />
        <ExampleGroup />
        <Examples />
      </Fragment>
    )
  }
}

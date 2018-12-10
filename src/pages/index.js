import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'

import Card from '../components/card'
import Examples from '../components/examples'
import ExampleGroup from '../components/exampleGroup'
import Footer from '../components/footer'
import GithubRibbon from '../components/githubRibbon'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: '#f7ecec';
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
        <Footer />
      </Fragment>
    )
  }
}

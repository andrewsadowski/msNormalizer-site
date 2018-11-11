import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'

import Card from '../components/card'
import Examples from '../components/examples'

export default class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Card />
        <Examples />
      </Fragment>
    )
  }
}

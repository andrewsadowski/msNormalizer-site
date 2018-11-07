import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Image from '../components/image'
import Card from '../components/card'

// const IndexPage = () => (
//   <div>
//     <Card />
//   </div>
// )

// export default IndexPage

export default class IndexPage extends Component {
  state = {
    hover: false,
  }
  onHover = () => {
    this.setState(state => {
      return {
        hover: !state.hover,
      }
    })
  }

  render() {
    const { hover } = this.state

    return (
      <Fragment>
        <Card
          onMouseEnter={() => this.onHover()}
          onMouseLeave={() => this.onHover()}
        />
        <p>{JSON.stringify(hover)}</p>
      </Fragment>
    )
  }
}

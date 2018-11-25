import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import Info from './info'
import MSImg from '../images/msNormalizer.png'
import NPMImg from '../images/npm_logo.svg'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-width: fit-content;
  max-width: 500px;
  margin: auto;
  margin-top: 75px;
`

export default class Card extends Component {
  state = {
    hover: false,
  }
  toggle = () => {
    return this.setState(state => {
      return {
        hover: !state.hover,
      }
    })
  }
  render() {
    const { hover } = this.state
    return (
      <Fragment>
        <Spring
          to={{
            boxShadow: hover
              ? '0 3px 6px rgba(0, 0, 0, 0.20), 0 3px 6px rgba(0, 0, 0, 0.25)'
              : '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          }}
        >
          {styles => (
            <CardContainer
              style={{ ...styles }}
              onMouseEnter={() => this.toggle()}
              onMouseLeave={() => this.toggle()}
            >
              <img src={MSImg} />
              <Info />
              {/* <img src={NPMImg} /> */}
            </CardContainer>
          )}
        </Spring>
      </Fragment>
    )
  }
}

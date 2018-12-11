import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import Info from './info'
import MSImg from '../images/msNormalizer.png'
import NPMImg from '../images/npm_logo.svg'
import GHImg from '../images/GitHub_Logo.png'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
  height: auto;
  align-items: center;
  border: 1px solid black;
  border-width: fit-content;
  max-width: 500px;
  margin: auto;
  margin-top: 75px;
  @media screen (width: 650px) {
    max-width: auto;
    min-width: 100px;
    height: auto;
    padding: 10px;
    margin: 10px;
  }
`
const ImageContainer = styled.div`
  display: flex;
  justify-items: row;
`

const Image = styled.img`
  padding-left: 10px;
  padding: 10px;
  margin: auto;
  max-width: 100px;
  max-height: 100px;
  height: 50px;
  width: auto;
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
              <ImageContainer>
                <a href="https://www.npmjs.com/package/srt-ms-normalizer">
                  <Image src={NPMImg} alt="npm-link" />
                </a>
                <a href="https://github.com/andrewsadowski/SRT-Millisecond-Normalizer">
                  <Image src={GHImg} alt="github-link" />
                </a>
              </ImageContainer>
            </CardContainer>
          )}
        </Spring>
      </Fragment>
    )
  }
}

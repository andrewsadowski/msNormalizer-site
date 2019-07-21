import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import Info from './info'
import NPMImg from '../images/npm_logo.svg'
import GHImg from '../images/GitHub_Logo.png'
import GatsbyImage from 'gatsby-image'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: auto;
  height: auto;
  align-items: center;
  border: 1px solid black;
  border-width: fit-content;
  max-width: 2500px;
  overflow: visible;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 75px;
  @media only screen and (max-width: 1300px) {
    min-width: 100px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 650px) {
    overflow: hidden;
    max-width: auto;
    min-width: auto;
    height: auto;
    padding: 10px;
    margin: 10px;
  }
`
const ImageContainer = styled.div`
  display: flex;
  justify-items: row;
  overflow: hidden;
`

const HeaderIMG = styled(GatsbyImage)`
  margin: auto;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: -1;
  overflow: hidden;
  @media only screen and (max-width: 650px) {
    z-index: -1;
    overflow: hidden;
  }
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
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
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
    const HeaderImg = this.props.headerImg
    return (
      <Fragment>
        <Spring
          to={{
            boxShadow: hover
              ? '0 3px 6px rgba(0, 0, 0, 0.20), 0 10px 15px rgba(0, 0, 0, 0.25)'
              : '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          }}
        >
          {styles => (
            <CardContainer
              style={{ ...styles }}
              onMouseEnter={() => this.toggle()}
              onMouseLeave={() => this.toggle()}
            >
              <HeaderIMG fluid={HeaderImg} />
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

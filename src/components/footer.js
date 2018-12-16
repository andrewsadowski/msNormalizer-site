import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.p`
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
  word-break: auto;
  font-size: 15px;
  align-items: center;
  /* width: 200px; */
`

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterSection>
          <FooterText>
            Tell me what you think, or contribute{' '}
            <a href="https://github.com/andrewsadowski/SRT-Millisecond-Normalizer/issues">
              here
            </a>
            <br />
            For more subtitle automation tools, check out{' '}
            <a href="https://github.com/andrewsadowski/make-it-continuous">
              Make It Continuous
            </a>{' '}
            and{' '}
            <a href="https://github.com/andrewsadowski/Subtitle-To-TSV">
              Subtitle To TSV
            </a>
          </FooterText>
        </FooterSection>
      </Fragment>
    )
  }
}

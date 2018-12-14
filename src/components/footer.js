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
  /* width: 200px; */
`

const SpecializedLink = styled.a``

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterSection>
          <FooterText>
            Tell me what you think{' '}
            <a href="https://github.com/andrewsadowski/SRT-Millisecond-Normalizer/issues">
              here
            </a>
          </FooterText>
        </FooterSection>
      </Fragment>
    )
  }
}

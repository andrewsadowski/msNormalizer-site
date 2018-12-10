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
  word-break: auto;
  font-size: 15px;
  /* width: 200px; */
`

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterSection>
          <FooterText>Goodbye!</FooterText>
        </FooterSection>
      </Fragment>
    )
  }
}

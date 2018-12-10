import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterSection>
          <p>Goodbye!</p>
        </FooterSection>
      </Fragment>
    )
  }
}

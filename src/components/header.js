import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
`

const HeaderText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-style: italic;
  align-self: center;
`

const Header = () => (
  <HeaderContainer>
    <HeaderText>msNormalizer</HeaderText>
  </HeaderContainer>
)

export default Header

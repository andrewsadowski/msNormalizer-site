import React from 'react'
import styled from 'styled-components'

import Image from './image'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
`

const HeaderText = styled.h1`
  font-family: 'Roboto', sans-serif;
`

const Header = () => (
  <HeaderContainer>
    <HeaderText>msNormalizer</HeaderText>
  </HeaderContainer>
)

export default Header

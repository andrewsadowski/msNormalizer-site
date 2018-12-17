import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Card from '../components/card'
import Examples from '../components/examples'
import ExampleGroup from '../components/exampleGroup'
import Footer from '../components/footer'
import SectionBorder from '../components/sectionBorder'
import GithubRibbon from '../components/githubRibbon'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: auto;
`

const HomePage = ({ data }) => {
  const HeaderImg = data.file.childImageSharp.fluid

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>msNormalizer</title>
        <meta
          name="description"
          content="Fixing broken subtitle timestamps since 2017"
        />
      </Helmet>
      <GlobalStyle />
      <GithubRibbon />
      <FlexContainer>
        <Card headerImg={HeaderImg} />
      </FlexContainer>
      <FlexContainer>
        <ExampleGroup />
      </FlexContainer>
      <SectionBorder />
      <Examples />
      <SectionBorder />
      <Footer />
    </Fragment>
  )
}

export default HomePage

export const query = graphql`
  query {
    file(relativePath: { regex: "/msNormalizer.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

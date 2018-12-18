import React, { Component, Fragment } from 'react'
import GithubCorner from 'react-github-corner'
import { isAbsolute } from 'path'

export default class GithubRibbon extends Component {
  render() {
    return (
      <Fragment>
        <GithubCorner
          href="https://github.com/andrewsadowski/SRT-Millisecond-Normalizer"
          style={{}}
        />
      </Fragment>
    )
  }
}

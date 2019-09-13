import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import Meta from '../components/Meta'
import Header from '../components/Header'
import { theme, GlobalStyles } from './styles/GlobalStyles'

import StyledPage from './styles/StyledPage'
import StyledContent from './styles/StyledContent'

// Component

class Page extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles whiteColor />

          <StyledPage>
            <Meta />
            <Header />
            <StyledContent>
              {this.props.children}
            </StyledContent>
          </StyledPage>
        </>
      </ThemeProvider>
    )
  }
}

export default Page
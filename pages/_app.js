import App, { Container } from 'next/app'

import Page from '../components/Page'

// Component

class AppComponent extends App {

  // Static

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    pageProps.query = ctx.query

    return { pageProps }
  }

  // Render

  render() {
    const { Component, pageProps } = this.props

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

// Export

export default AppComponent
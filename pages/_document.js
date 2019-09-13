import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Component

class DocumentComponent extends Document {

  // Static

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  // Render

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// Export

export default DocumentComponent
import Link from 'next/link'
import Router from 'next/router'
import getConfig from 'next/config'
import NProgress from 'nprogress'

import Nav from './Nav'

import StyledHeader from './styles/StyledHeader'
import StyledLogo from './styles/StyledLogo'

// Component

class Header extends React.Component {

  render() {
    const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()
    const host = publicRuntimeConfig.FRONTEND_HOST || serverRuntimeConfig.FRONTEND_HOST

    return (
      <StyledHeader>
        <div className="bar">
          <StyledLogo>
            <Link href="/" passHref>
              <a>React Starter Pack</a>
            </Link>
          </StyledLogo>

          <p>Current host is { host }</p>

          <Nav />
        </div>
      </StyledHeader>
    )
  }
}

// Callbacks

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

// Export

export default Header
import Link from 'next/link'

import StyledNav from './styles/StyledNav'

// Component

const Nav = () => (
  <StyledNav>
    <Link href="/index" passHref>
      <a>Main Page</a>
    </Link>

    <Link href="/about" passHref>
      <a>About</a>
    </Link>
  </StyledNav>
)

// Export

export default Nav
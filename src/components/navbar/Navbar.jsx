import styled from 'styled-components'

import Logo from '../logo/Logo'

const StyledNavbar = styled.div`
padding: 15px;
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
    </StyledNavbar>
  )
}

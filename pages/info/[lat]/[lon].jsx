import styled from 'styled-components'

import Navbar from '../../../src/components/navbar/Navbar'

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  min-height: 100vh;
`

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>maconha</Body>
    </>
  )
}

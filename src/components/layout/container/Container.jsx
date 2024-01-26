import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 768px){
    width: 90%;
  }

  @media (min-width: 1500px){
    width: 1440px;
  }
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

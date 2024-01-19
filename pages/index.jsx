import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/layout/background-image-with-children/BackgroundImageWithChildren'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 650px;

  @media (max-width: 650px) {
    min-width: 100%;
  }
`

export default function homePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>HomePage</StyledDiv>
    </BackgroundImageWithChildren>
  )
}

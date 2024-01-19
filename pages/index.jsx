import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/layout/background-image-with-children/BackgroundImageWithChildren'

const StyledDiv = styled.div`
  text-align: center;
  font-size: 28px;
  background-color: bisque;
`

export default function homePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>HomePage</StyledDiv>
    </BackgroundImageWithChildren>
  )
}

import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/layout/background-image-with-children/BackgroundImageWithChildren'
import Logo from '../src/components/logo/Logo'
import Input from '../src/components/form/input/Input'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 650px) {
    min-width: 100%;
  }
`

export default function homePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>
        <Logo showImage type="vertical" />
        <Input placeholder="Digite o nome da sua cidade" />
      </StyledDiv>
    </BackgroundImageWithChildren>
  )
}

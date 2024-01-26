import styled from 'styled-components'

import Navbar from '../../../src/components/navbar/Navbar'
import Container from '../../../src/components/layout/container/Container'
import ClimaCard from '../../../src/components/clima-card/ClimaCard'

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  min-height: 100vh;
`

const Content = styled.div`
  padding: 80px 0;
`

const Text = styled.p`
  font-size: 20px;
`

const CityName = styled.h2`
  font-size: 60px;
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px){
    flex-direction: column;
    align-items: center;
  }
`

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para</Text>
            <CityName>Erechim, RS, Brasil</CityName>
          </Content>
          <InfoContainer>
            <ClimaCard />
            <ClimaCard />
            <ClimaCard />
          </InfoContainer>
        </Container>
      </Body>
    </>
  )
}

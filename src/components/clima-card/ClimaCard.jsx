import styled from 'styled-components'

const StyledCard = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 350px;
  padding: 15px;
`
const Title = styled.h6`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`

const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BasicInfoImg = styled.img`
  width: 100px;
  height: 100px;
`

const BasicInfoText = styled.p`
  flex: 1;
  text-align: center;
`

const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 15px;
`

const InfoTemperature = styled.span`
  font-weight: 700;

  ${(props) => props.blue && 'color: #00C9F5;'}
  ${(props) => props.red && 'color:#F00;'}
`

export default function ClimaCard() {
  return (
    <StyledCard>
      <Title>Titulo</Title>
      <BasicInfo>
        <BasicInfoImg src="http://openweathermap.org/img/wn/02d@2x.png" />
        <BasicInfoText>algumas nuvens</BasicInfoText>
      </BasicInfo>
      <InfoLine>
        Temperatura <InfoTemperature>27ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Sensação <InfoTemperature>30ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Mínima <InfoTemperature blue>19ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Máxima <InfoTemperature red>30ºC</InfoTemperature>
      </InfoLine>
    </StyledCard>
  )
}

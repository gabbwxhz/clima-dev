import styled from 'styled-components'

const Img = styled.img``

const VerticalText = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.colors.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -70px;
  margin-bottom: 50px;
`

const HorizontalText = styled.h1`
  font-size: 40px;
`

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`

export default function Logo({ showImage, type }) {
  return (
    <div>
      {showImage && <Img src="/woman.svg" />}
      {type === 'vertical' && (
        <VerticalText>
          Clima <br />
          <PrimaryColor>DEV</PrimaryColor>
        </VerticalText>
      )}
      {type === 'horizontal' && (
        <HorizontalText>
          Clima<PrimaryColor>DEV</PrimaryColor>
        </HorizontalText>
      )}
    </div>
  )
}

Logo.defaultProps = {
  type: 'horizontal'
}

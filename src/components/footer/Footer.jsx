import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 20px 0;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      Criado por <b> Gabriel Picoli</b>, 2024.
    </StyledFooter>
  )
}

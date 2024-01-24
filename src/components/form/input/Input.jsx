import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 20px;
  color: #9c9c9c;
  font-weight: bold;
  border: 0;
  outline: none;
  border-radius: 10px;
  background: #f6f6f6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
`

export default function Input(props) {
  return <StyledInput {...props} />
}

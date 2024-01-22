import styled from 'styled-components'

import Input from '../input/Input'

const SuggestionsContaienr = styled.div`
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Suggestions = styled.div`
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #e4e4e4;
  }
`

export default function InputWithSuggestions({ suggestions, ...props }) {
  return (
    <>
      <Input {...props} />
      <SuggestionsContaienr>
        {suggestions.map((suggestion, pos) => (
          <Suggestions key={`suggestion-${pos}`} onClick={suggestion.onClick}>
            {suggestion.text}
          </Suggestions>
        ))}
      </SuggestionsContaienr>
    </>
  )
}

InputWithSuggestions.defaultProps = {
  suggestions: [
    { text: 'Sugestão', onclick: () => {} },
    { text: 'Sugestão 2', onclick: () => {} }
  ]
}

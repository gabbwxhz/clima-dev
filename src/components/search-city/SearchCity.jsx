import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import InputWithSuggestions from '../form/inputWithSuggestions/InputWithSuggestios'

export default function SearchCity() {
  const [searchText, setSearchText] = useState('')
  const [suggestion, setSuggestion] = useState([])

  const router = useRouter()

  const fetchCitiesList = async () => {
    const CITIES_LIMIT = 5

    const response = await fetch(
      `/api/openweathermap?url=geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}`
    )
    const json = await response.json()

    handleList(json)
  }

  const handleList = (list) => {
    console.log(list)
    const formattedList = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`,
      onClick: () => console.log(`LAT: ${obj.lat} LON: ${obj.lon}`)
    }))
    setSuggestion(formattedList)
  }

  useEffect(() => {
    if (searchText.length >= 3) fetchCitiesList()
    else setSuggestion([])
  }, [searchText])

  return (
    <InputWithSuggestions
      placeholder="Digite o nome da sua cidade"
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      suggestions={suggestion}
    />
  )
}

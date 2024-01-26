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
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_API_KEY}`
    )
    const json = await response.json()

    handleList(json)
  }

  const handleList = (list) => {
    const formatedList = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`,
      onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
    }))

    setSuggestion(formatedList)
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

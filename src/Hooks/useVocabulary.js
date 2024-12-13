import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'


export function useVocabulary(_id) {
  const [vocabularyList, setVocabularyList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://myapp-zht4-qebyv7ha4-ashik763s-projects.vercel.app/lessons/${_id}/words`,{
          method: "GET", 
          headers: {
            "Content-Type": "application/json", 
            Authorization: Cookies.get('token') ,
          },
        })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch vocabulary')
        return res.json()
      })
      .then((data) => {
        setVocabularyList(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [_id])

  return { vocabularyList, isLoading, error }
}


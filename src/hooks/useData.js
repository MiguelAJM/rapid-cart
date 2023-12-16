import { useEffect, useState } from 'react'

export default function useData(id) {
  const [status, setStatus] = useState('idle')
  const [article, setArticle] = useState('')

  const fetchData = async (id) => {
    try {
      setStatus('pending')
      const data = await fetch(id)
      const res = await data.json()
      setArticle(res)

      setStatus('succesfull')
    } catch (error) {
      setStatus('rejected')
    }
  }

  useEffect(() => {
    fetchData(id)
  }, [])

  return { status, article }
}

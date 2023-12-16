import { useEffect, useState } from 'react'

export default function useData(id) {
  const [status, setStatus] = useState('idle')
  const [article, setArticle] = useState([])

  const fetchData = async (id) => {
    try {
      setStatus('pending')
      const data = await fetch(id)
      const res = await data.json()
      // Para testear los errors
      // await new Promise(resolve => setTimeout(resolve, 10000))
      // throw new Error()
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

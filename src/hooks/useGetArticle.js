import { useEffect, useState } from 'react'

export default function useGetArticle(id) {
  const [article, setArticle] = useState([])

  useEffect(() => {
    const getArticle = async (id) => {
      try {
        const res = await fetch(id)
        const data = await res.json()

        // throw new Error('null')

        setArticle(data)
      } catch (error) {
        console.log('Error: ' + error)
      }
    }
    getArticle(id)
  }, [])

  return article
}

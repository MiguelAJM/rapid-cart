import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useData from '../hooks/useData'
import ProductsCard from '../cards/ProductsCard'
import { IconArrowBackUpDouble } from '@tabler/icons-react'
import Loader from '../elements/Loader'
import Error from '../elements/Error'

export default function ProductsByCategoryPage() {
  const { categorie } = useParams()

  const URL_PRODUCT_BY_CATEGORIE = `https://dummyjson.com/products/category/${categorie}`

  const { status, article } = useData(URL_PRODUCT_BY_CATEGORIE)
  const navigate = useNavigate()

  if (status === 'pending' || status === 'idle') {
    return <Loader />
  }

  if (status === 'rejected') {
    return <Error />
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        repeatDelay: 1
      }}
      className='relative p-3'
    >
      <article className='w-full flex justify-between items-center gap-2 md:gap-4 mt-5 mb-8'>
        <button onClick={() => navigate(-1)}>
          <IconArrowBackUpDouble size={32} />
        </button>
        <h2 className='text-xl md:text-5xl font-medium uppercase mr-16'>
          {categorie}
        </h2>
      </article>

      <ul className='w-full grid my-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-1 md:gap-4 gap-y-5 md:gap-y-8 mb-24 md:mb-20'>
        {article.products.map((product) => {
          return <ProductsCard product={product} key={product.id} />
        })}
      </ul>
    </motion.section>
  )
}

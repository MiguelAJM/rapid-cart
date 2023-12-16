import ItemsCard from '../cards/ItemsCard'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../mocks/products.json'

export default function Products() {
  const navigate = useNavigate()

  return (
    <section className='w-full my-24 md:my-20 bg-white md:bg-transparent py-8 rounded-2xl'>
      <article className='flex flex-col gap-2 md:gap-4 text-center'>
        <h2 className='text-xl md:text-5xl font-medium uppercase'>
          New Products
        </h2>
        <p className='text-gray-800/75 text-xs md:text-xl'>
          Our latest new products collection
        </p>
      </article>

      <ul className='w-full grid my-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-1 md:gap-4 gap-y-5 md:gap-y-8'>
        {products.slice(0, 8).map((product) => {
          return <ItemsCard product={product} key={product.id} />
        })}
      </ul>

      <div className='w-full flex justify-center'>
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          onClick={() => navigate('/all-products')}
          className='bg-black px-8 md:px-16 py-2 md:py-4 rounded-full text-zinc-100 text-sm md:text-base'
        >
          See All
        </motion.button>
      </div>
    </section>
  )
}

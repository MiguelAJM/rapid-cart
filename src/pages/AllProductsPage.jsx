import { useFilter } from '../context/FilterProvider'
import { motion } from 'framer-motion'
import Selector from '../components/Selector'
import ProductsCard from '../cards/ProductsCard'

export default function AllProductsPage() {
  const { productsCart } = useFilter()

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
      <article className='flex flex-col gap-2 md:gap-4 text-center mt-5 mb-8'>
        <h2 className='text-xl md:text-5xl font-medium uppercase'>
          Products list
        </h2>
        <p className='text-gray-800/75 text-xs md:text-xl'>
          Find Something Special Today.
        </p>
      </article>

      <Selector />

      <ul className='w-full grid my-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-1 md:gap-4 gap-y-5 md:gap-y-8 mb-24 md:mb-20'>
        {productsCart.map((product) => {
          return <ProductsCard product={product} key={product.id} />
        })}
      </ul>
    </motion.section>
  )
}

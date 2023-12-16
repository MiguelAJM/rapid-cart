import CategoriesCard from '../cards/CategoriesCard'
import { useNavigate } from 'react-router-dom'
import { categorys } from '../mocks/categories'
import { motion } from 'framer-motion'

export default function Categories() {
  const navigate = useNavigate()

  return (
    <section className='w-full my-24 md:my-32 mb-32'>
      <article className='flex flex-col gap-2 md:gap-4 text-center'>
        <h2 className='text-xl md:text-5xl font-medium uppercase'>
          Categories
        </h2>
        <p className='text-gray-800/75 text-xs md:text-xl'>
          See all our list categories of different products
        </p>
      </article>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 gap-2 md:gap-4 my-8'
      >
        {categorys.slice(1, 13).map((category) => {
          return <CategoriesCard category={category} key={category.id} />
        })}
      </motion.ul>

      <div className='w-full flex justify-center'>
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          onClick={() => navigate('/all-categories')}
          className='bg-black px-8 md:px-16 py-2 md:py-4 rounded-full text-zinc-100 text-sm md:text-base'
        >
          More Categories
        </motion.button>
      </div>
    </section>
  )
}

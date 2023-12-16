import { motion } from 'framer-motion'
import { categorys } from '../mocks/categories'
import CategoriesCard from '../cards/CategoriesCard'

export default function CategoriesPage() {
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
          Categories
        </h2>
        <p className='text-gray-800/75 text-xs md:text-xl'>
          Find Something Special Today.
        </p>
      </article>

      <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 gap-2 md:gap-4 my-8 mb-24 md:mb-20'>
        {categorys.slice(1, 21).map((category) => {
          return <CategoriesCard category={category} key={category.id} />
        })}
      </ul>
    </motion.section>
  )
}

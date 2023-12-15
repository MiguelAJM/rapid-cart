import { useNavigate } from 'react-router-dom'
import { generateCategoryColor } from '../helpers/getRandomColor'
import { motion } from 'framer-motion'

export default function CategoriesCard({ category }) {
  const navigate = useNavigate()

  return (
    <motion.li
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={() => navigate(`/categorie/${category.category}`)}
      className={`col-span-1 rounded-xl md:rounded-2xl aspect-video grid place-content-center cursor-pointer ${generateCategoryColor(
        category.category
      )}`}
      key={category.id}
    >
      <strong className='text-sm md:text-2xl'>{category.name}</strong>
    </motion.li>
  )
}

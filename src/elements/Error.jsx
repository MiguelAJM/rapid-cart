import { useNavigate } from 'react-router-dom'
import ErrorProduct from '../assets/error-product.svg'
import { motion } from 'framer-motion'

export default function Error() {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center flex-col px-8 mt-8 md:mt-0'>
      <h2 className='text-xl md:text-4xl font-bold text-center'>No product found</h2>
      <img
        className='w-full h-full sm:w-[450px] my-12 object-cover px-4'
        src={ErrorProduct}
        alt='Error Imagen product'
      />
      <motion.button
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={() => navigate('/')}
        className='bg-black px-8 md:px-16 py-2 md:py-4 rounded-full text-zinc-100 text-sm md:text-base'
      >
        Back to home
      </motion.button>
    </div>
  )
}

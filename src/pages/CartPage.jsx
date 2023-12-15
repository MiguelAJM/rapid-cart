import Checkout from '../components/Checkout'
import CartCard from '../cards/CartCard'
import { IconTrash, IconArrowBack } from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CartPage() {
  const { cart, clearProductCart } = useCart()

  const navigate = useNavigate()

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
      <article className='flex justify-between items-center mt-4 md:bg-white md:p-2 md:rounded-2xl'>
        <button className='md:p-4 rounded-full' onClick={() => navigate('/')}>
          <IconArrowBack />
        </button>
        <h2 className='text-xl font-bold'>Shopping Cart</h2>
        <button className='md:p-4 rounded-full' onClick={clearProductCart}>
          <IconTrash className='text-red-400' />
        </button>
      </article>

      <div className='flex flex-wrap lg:flex-nowrap gap-4 my-12'>
        <ul className='max-w-[1024px] w-full grid grid-cols-4 gap-5 md:bg-white rounded-xl'>
          {cart.map((item) => {
            return <CartCard key={item.id} item={item} />
          })}
        </ul>

        <Checkout />
      </div>
    </motion.section>
  )
}

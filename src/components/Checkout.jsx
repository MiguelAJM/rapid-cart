import { useCart } from '../context/CartProvider'
import { motion } from 'framer-motion'
import { useModal } from '../context/ModalProvider'

export default function Checkout() {
  const { cart, getTotalCart } = useCart()
  const { handleChangeBuy } = useModal()

  const cartTotal = getTotalCart(cart)
  const totalArticles = cart.length

  return (
    <article className='w-full lg:w-[500px]'>
      <div className='flex flex-col gap-12 bg-gradient-to-tr rounded-2xl md:p-8 md:bg-white'>
        <div className='flex justify-between items-center gap-4 py-4 px-4 md:py-0 md:px-0 bg-white rounded-2xl'>
          <input
            className='w-32 py-4 px-4 md:w-full outline-none'
            type='text'
            maxLength={8}
            placeholder='Promo Code'
          />
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='bg-black px-5 py-3 rounded-2xl text-zinc-100'
          >
            Apply
          </motion.button>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center border-b-2 border-black/10 pb-4 mb-2'>
            <p className='font-bold'>Subtotal: </p>
            <p className='font-bold text-lg'>
              ${cartTotal} <span className='text-gray-500/80'>USD</span>
            </p>
          </div>

          <div className='flex justify-between items-center border-b-2 border-black/10 pb-4 mb-2'>
            <p className='font-bold'>Shipping: </p>
            <p className='font-bold text-lg'>
              $0 <span className='text-gray-500/80'>USD</span>
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold'>Total: </p>
            <p className='font-bold text-lg'>
              {' '}
              <span className='text-xs mr-4'>({totalArticles} items)</span> $
              {cartTotal} <span className='text-gray-500/80'>USD</span>
            </p>
          </div>

          <motion.button
            onClick={handleChangeBuy}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='bg-lime-400 mt-12 mb-12 md:mb-4 rounded-full py-4 font-bold'
          >
            Proceed To Checkout
          </motion.button>
        </div>
      </div>
    </article>
  )
}

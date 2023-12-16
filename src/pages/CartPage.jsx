import Checkout from '../components/Checkout'
import CartCard from '../cards/CartCard'
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { IconTrash, IconArrowBack } from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import NoItems from '../components/NoItems'
import EmptyCart from '../assets/empty-cart.svg'

export default function CartPage() {
  const { cart, clearProductCart, deleteProductToCart } = useCart()

  const navigate = useNavigate()

  const trailingActions = (item) => (
    <TrailingActions>
      <SwipeAction destructive onClick={() => deleteProductToCart(item)}>
        <IconTrash size={48} />
      </SwipeAction>
    </TrailingActions>
  )

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
      <div>
        {cart.length > 0 ? (
          <>
            <article className='flex justify-between items-center mt-4 md:bg-white md:p-2 md:rounded-2xl'>
              <button
                className='md:p-4 rounded-full'
                onClick={() => navigate(-1)}
              >
                <IconArrowBack />
              </button>
              <h2 className='text-xl font-bold'>Shopping Cart</h2>
              <button
                className='md:p-4 rounded-full'
                onClick={clearProductCart}
              >
                <IconTrash className='text-red-400' />
              </button>
            </article>

            <div className='flex flex-wrap lg:flex-nowrap gap-4 my-12'>
              <SwipeableList className='bg-white rounded-xl'>
                {cart.map((item) => {
                  return (
                    <SwipeableListItem
                      key={item.id}
                      trailingActions={trailingActions(item)}
                    >
                      <CartCard key={item.id} item={item} />
                    </SwipeableListItem>
                  )
                })}
              </SwipeableList>
              <Checkout />
            </div>
          </>
        ) : (
          <NoItems message="Your cart it's empty" img={EmptyCart} />
        )}
      </div>
    </motion.section>
  )
}

import Checkout from '../components/Checkout'
import CartCard from '../cards/CartCard'
import NoItems from '../elements/NoItems'
import EmptyCart from '../assets/empty-cart.svg'
import LoaderPaymentModal from '../modals/LoaderPaymentModal'
import ConfirmModal from '../modals/ConfirmModal'
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
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '../context/ModalProvider'

export default function CartPage() {
  const { cart, deleteProductToCart } = useCart()
  const { modal, handleChangeConfirm } = useModal()

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
      className=' pt-8 pb-24 md:pt-0 md:pb-0 px-3'
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
                data-value='delete-cart-items'
                className='md:p-4 rounded-full'
                onClick={handleChangeConfirm}
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
      <AnimatePresence>
        {modal.confirm && (
          <ConfirmModal
            title='Do you want to remove?'
            message="You're about to delete items from your shopping cart"
            value='delete-cart-items'
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modal.loading && <LoaderPaymentModal />}
      </AnimatePresence>

      <AnimatePresence>
        {modal.buy && (
          <ConfirmModal
            title='Are you buy these items'
            message='Are you sure you want to buy these items/s'
            value='buy-cart-item'
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}

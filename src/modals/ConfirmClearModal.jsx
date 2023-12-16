import { useCart } from '../context/CartProvider'
import { useFavorite } from '../context/FavoriteProvider'
import { useModal } from '../context/ModalProvider'
import { motion } from 'framer-motion'

export default function ConfirmClearModal({ message, value }) {
  const { handleChangeConfirm, setModal } = useModal()
  const { clearFavoriteCart } = useFavorite()
  const { clearProductCart } = useCart()

  const handleClearItems = (e) => {
    if (e.target.dataset.value === 'delete-favorite-items') {
      clearFavoriteCart()
      handleChangeConfirm()
    }

    if (e.target.dataset.value === 'delete-cart-items') {
      clearProductCart()
      handleChangeConfirm()
    }
  }

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
      onClick={() =>
        setModal((prevState) => ({ ...prevState, confirm: false }))}
      className='fixed grid place-content-center top-0 left-0 w-full h-screen bg-black/50 z-[1000] px-4'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-[290px] sm:w-[325px] md:w-[375px] p-4 md:p-8 rounded-xl bg-zinc-200 flex items-center flex-col'
      >
        <h2 className='text-sm md:text-xl text-center font-bold'>
          You want to delete your {message}?
        </h2>
        <p className='text-xs md:text-lg text-center'>
          Are you sure you want to remove all the articles in this section?
        </p>
        <div className='w-full grid grid-cols-2 gap-3 mt-5'>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='px-8 py-3 text-lg bg-lime-500 rounded-2xl font-bold'
            data-value={value}
            onClick={handleClearItems}
          >
            Confirm
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='px-8 py-3 text-lg bg-red-500 rounded-2xl font-bold text-white'
            onClick={handleChangeConfirm}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

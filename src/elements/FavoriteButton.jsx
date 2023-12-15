import { IconHeartFilled, IconHeart } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useFavorite } from '../context/FavoriteProvider'

export default function FavoriteButton({ product }) {
  const {
    checkFavoriteInCart,
    addFavoriteProductToCart,
    deleteFavoriteToCart
  } = useFavorite()
  const isFavoriteInCart = checkFavoriteInCart(product)

  return (
    <motion.button
      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 500, damping: 10 }}
      className='absolute right-0 top-0 m-2 md:m-4 p-1 md:p-2 bg-zinc-100 rounded-full justify-end'
      onClick={
        isFavoriteInCart
          ? () => deleteFavoriteToCart(product)
          : () => addFavoriteProductToCart(product)
      }
    >
      {isFavoriteInCart ? (
        <IconHeartFilled className='text-red-500' />
      ) : (
        <IconHeart />
      )}
    </motion.button>
  )
}

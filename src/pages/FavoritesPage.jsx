import NoItems from '../elements/NoItems'
import FavoriteCard from '../cards/FavoriteCard'
import EmptyFavorites from '../assets/empty-favorites.svg'
import ConfirmModal from '../modals/ConfirmModal'
import { IconTrash, IconArrowBack } from '@tabler/icons-react'
import { useFavorite } from '../context/FavoriteProvider'
import { useNavigate } from 'react-router-dom'
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '../context/ModalProvider'

export default function FavoritesPage() {
  const { favorite, deleteFavoriteToCart, getTotalCart } = useFavorite()
  const { modal, handleChangeConfirm } = useModal()

  const navigate = useNavigate()

  const totalFavorite = getTotalCart(favorite)
  const totalFavoritesArticles = favorite.length

  const trailingActions = (item) => (
    <TrailingActions>
      <SwipeAction destructive onClick={() => deleteFavoriteToCart(item)}>
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
      className='relative pt-8 pb-24 md:pt-0 md:pb-0 px-3'
    >
      {favorite.length > 0 ? (
        <>
          <article className='flex justify-between items-center mt-4 md:bg-white md:p-2 md:rounded-2xl'>
            <button
              className='md:p-4 rounded-full'
              onClick={() => navigate('/')}
            >
              <IconArrowBack />
            </button>
            <h2 className='text-xl font-bold'>Favorites</h2>
            <button
              data-value='delete-favorite-items'
              className='md:p-4 rounded-full'
              onClick={handleChangeConfirm}
            >
              <IconTrash className='text-red-400' />
            </button>
          </article>

          <SwipeableList className=' md:bg-white rounded-xl my-12'>
            {favorite.map((item) => {
              return (
                <SwipeableListItem
                  key={item.id}
                  destructive
                  trailingActions={trailingActions(item)}
                >
                  <FavoriteCard item={item} />
                </SwipeableListItem>
              )
            })}
          </SwipeableList>

          <article className='flex justify-between items-center mt-4 md:bg-white md:p-4 md:rounded-2xl mb-20'>
            <h2 className='text-sm font-bold'>
              Items: <span>{totalFavoritesArticles}</span>
            </h2>
            <h2 className='text-sm font-bold'>
              Total:{' '}
              <span>
                {totalFavorite}
                <span className='text-gray-800/50 ml-1'>USD</span>
              </span>
            </h2>
          </article>
        </>
      ) : (
        <NoItems message="Favorites products it's empty" img={EmptyFavorites} />
      )}

      <AnimatePresence>
        {modal.confirm && (
          <ConfirmModal
            title='Do you want to remove?'
            message="You're about to delete items from your favorite item(s)"
            value='delete-favorite-items'
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}

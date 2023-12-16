import {
  IconArrowBack,
  IconHeart,
  IconHeartFilled,
  IconShoppingCartPlus,
  IconShoppingCartMinus
} from '@tabler/icons-react'

import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartProvider'
import { useFavorite } from '../context/FavoriteProvider'
import { motion } from 'framer-motion'
import { useFilter } from '../context/FilterProvider'
import useData from '../hooks/useData'
import ItemsCard from '../cards/ItemsCard'

export default function Articles() {
  const { id } = useParams()
  const API_URL = `https://dummyjson.com/products/${id}`
  const { status, article } = useData(API_URL)

  const { productsCart } = useFilter()

  const { addProductToCart, deleteProductToCart, checkProductInCart } =
    useCart()
  const {
    addFavoriteProductToCart,
    deleteFavoriteToCart,
    checkFavoriteInCart
  } = useFavorite()

  const navigate = useNavigate()

  // const { modal } = useModal()

  const isProductInCart = checkProductInCart(article)
  const isFavoriteInCart = checkFavoriteInCart(article)

  const handleClickButton = isProductInCart
    ? () => deleteProductToCart(article)
    : () => addProductToCart(article)

  if (status === 'pending' || status === 'idle') {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (status === 'rejected') {
    return (
      <div>
        <h2>An ocurred a error</h2>
      </div>
    )
  }

  return (
    <section className='w-full h-full relative p-3'>
      <article className='flex justify-between items-center mt-4 md:bg-white md:p-2 md:rounded-2xl'>
        <button
          className='md:p-4 rounded-full'
          onClick={() => navigate('/all-products')}
        >
          <IconArrowBack />
        </button>
        <h2 className='text-xl font-bold'>Shopping Cart</h2>
        <button
          className='md:p-4 rounded-full'
          onClick={
            isFavoriteInCart
              ? () => deleteFavoriteToCart(article)
              : () => addFavoriteProductToCart(article)
          }
        >
          {isFavoriteInCart ? (
            <IconHeartFilled className='text-red-500' />
          ) : (
            <IconHeart />
          )}
        </button>
      </article>

      <article className='flex flex-col md:flex-row items-start md:gap-5 my-6'>
        <figure className='mx-auto w-[280px] md:w-[300px] h-[174px] md:h-[300px] overflow-hidden'>
          <img
            className='w-full h-full rounded-xl object-cover overflow-hidden'
            src={article.thumbnail}
            alt={article.title}
          />
        </figure>

        <article className='w-full flex justify-start md:flex-1 flex-col mt-8'>
          <h2 className='text-2xl font-bold'>{article.title}</h2>

          <div className='w-full md:flex md:justify-between gap-5'>
            <div className='flex flex-col gap-4 mt-5 mb-4'>
              <p className='text-md font-bold'>Description</p>
              <p className='text-sm text-gray-800/70 line-clamp-2  md:max-w-[480px] w-full'>
                {article.description}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              onClick={handleClickButton}
              className={`w-full flex md:hidden items-center justify-between px-4 py-4 rounded-2xl text-white text-sm font-bold ${
                isProductInCart ? 'bg-red-500' : 'bg-lime-500'
              }`}
            >
              {isProductInCart ? (
                <>
                  <span>
                    <IconShoppingCartMinus />
                  </span>
                  <span>Remove product</span>
                  <span>${article.price}</span>
                </>
              ) : (
                <>
                  <span>
                    <IconShoppingCartPlus />
                  </span>
                  <span>Add to cart</span>
                  <span>${article.price}</span>
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              onClick={handleClickButton}
              className='w-auto hidden md:flex items-center justify-between rounded-2xl text-white text-sm font-bold'
            >
              {isProductInCart ? (
                <>
                  <span
                    className={`p-5 rounded-full ${
                      isProductInCart ? 'bg-red-500' : 'bg-lime-500'
                    }`}
                  >
                    <IconShoppingCartMinus />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={`p-5 rounded-full ${
                      isProductInCart ? 'bg-red-500' : 'bg-lime-500'
                    }`}
                  >
                    <IconShoppingCartPlus />
                  </span>
                </>
              )}
            </motion.button>
          </div>
        </article>
      </article>

      <article className='hidden md:block mt-24 mb-12'>
        <div>
          <article className='flex flex-col gap-2 md:gap-4 text-center'>
            <h2 className='text-xl md:text-5xl font-medium uppercase'>
              More Products
            </h2>
            <p className='text-gray-800/75 text-xs md:text-xl'>
              Explore our latest products tailored just for you.
            </p>
          </article>

          <ul className='w-full grid my-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-1 md:gap-4 gap-y-5 md:gap-y-8'>
            {productsCart.slice(0, 4).map((product) => {
              return <ItemsCard product={product} key={product.id} />
            })}
          </ul>

          <div className='w-full flex justify-center'>
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              onClick={() => navigate('/all-products')}
              className='bg-black px-8 md:px-16 py-2 md:py-4 rounded-full text-zinc-100 text-sm md:text-base'
            >
              See All
            </motion.button>
          </div>
        </div>
      </article>
    </section>
  )
}

import {
  IconShoppingCartPlus,
  IconShoppingCartMinus,
  IconHeart,
  IconHeartFilled
} from '@tabler/icons-react'

import { Link, useParams } from 'react-router-dom'
import useGetArticle from '../hooks/useGetArticle'
import React from 'react'
import { useCart } from '../context/CartProvider'
import { useFavorite } from '../context/FavoriteProvider'
import { useModal } from '../context/ModalProvider'
import Cart from './Cart'
import Favorites from './Favorites'
import ModalButtons from './ModalButtons'

export default function Articles() {
  const { id } = useParams()
  const article = useGetArticle(`https://dummyjson.com/products/${id}`)

  const {
    addProductToCart,
    deleteProductToCart,
    checkProductInCart
  } = useCart()
  const {
    addFavoriteProductToCart,
    deleteFavoriteToCart,
    checkFavoriteInCart
  } = useFavorite()

  const { modal } = useModal()

  const isProductInCart = checkProductInCart(article)
  const isFavoriteInCart = checkFavoriteInCart(article)

  if (!article) {
    return (
      <div>
        <h2>No hay articulos disponibles</h2>
      </div>
    )
  }

  return (
    <section>
      <Link to='/'>Volver</Link>
      <ModalButtons />
      <img src={article.thumbnail} alt={article.title} />

      <div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>{article.brand}</p>
      </div>

      <div>
        <h2>${article.price}</h2>
      </div>

      <div>
        <button
          onClick={
            isProductInCart
              ? () => {
                  deleteProductToCart(article)
                }
              : () => {
                  addProductToCart(article)
                }
          }
        >
          {isProductInCart ? (
            <IconShoppingCartMinus size={32} />
          ) : (
            <IconShoppingCartPlus size={32} />
          )}
        </button>

        <button
          onClick={
            isFavoriteInCart
              ? () => {
                  deleteFavoriteToCart(article)
                }
              : () => {
                  addFavoriteProductToCart(article)
                }
          }
        >
          {isFavoriteInCart ? (
            <IconHeartFilled size={32} />
          ) : (
            <IconHeart size={32} />
          )}
        </button>
      </div>

      {modal.cart && <Cart />}
      {modal.favorite && <Favorites />}

    </section>
  )
}

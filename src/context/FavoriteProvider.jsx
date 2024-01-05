import { createContext, useContext, useEffect, useState } from 'react'
import { AddedFavProduct, DeleteFavProduct } from '../elements/Toasts'
import { toast } from 'sonner'

const FavoriteContext = createContext()

export const useFavorite = () => {
  const CONTEXT = useContext(FavoriteContext)
  if (!CONTEXT) {
    throw new Error(
      'You need to wrap the application in the provider: FavoriteProvider'
    )
  }
  return CONTEXT
}

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavoriteCart] = useState(
    window.localStorage.getItem('favorites')
      ? JSON.parse(window.localStorage.getItem('favorites'))
      : []
  )

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorite) ?? [])
  }, [favorite])

  // Agregar al carrito
  const addFavoriteProductToCart = (product) => {
    toast.custom(() => <AddedFavProduct />)
    setFavoriteCart((prevState) => [...prevState, { ...product }])
  }

  // Eliminar del carrito
  const deleteFavoriteToCart = (product) => {
    toast.custom(() => <DeleteFavProduct />)
    setFavoriteCart(favorite.filter((item) => item.id !== product.id))
  }

  // Verificar si hay un producto en el carrito
  const checkFavoriteInCart = (product) => {
    return favorite.some((item) => item.id === product.id)
  }

  // Limpiar el carrito
  const clearFavoriteCart = () => {
    setFavoriteCart([])
  }

  // Total de todos los productos
  const getTotalCart = (arr) => {
    return arr.reduce((acc, item) => {
      acc += item.price
      return acc
    }, 0)
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addFavoriteProductToCart,
        deleteFavoriteToCart,
        checkFavoriteInCart,
        clearFavoriteCart,
        getTotalCart
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

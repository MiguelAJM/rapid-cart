import { createContext, useContext, useEffect, useState } from 'react'

const FavoriteContext = createContext()

export const useFavorite = () => {
  const CONTEXT = useContext(FavoriteContext)
  if (!CONTEXT) {
    throw new Error(
      'Necesitas envolver tu aplicacion con el provider: FavoriteProvider'
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
    const newProduct = favorite.findIndex((item) => item.id === product.id)
    // Verificamos si hay un producto en el carrito y agregamos 1 unidades mas
    if (newProduct >= 0) {
      const newCart = structuredClone(favorite)
      newCart[newProduct].quantity += 1

      // Agregamos el precio actualizado al carrito
      if (newCart !== -1) {
        const newPrice = (product.quantity + 1) * product.price
        newCart[newProduct].newPrice = newPrice
      }
      return setFavoriteCart(newCart)
    }
    setFavoriteCart((prevState) => [
      ...prevState,
      { ...product, quantity: 1, newPrice: 0 }
    ])
  }

  // Eliminar del carrito
  const decrementFavoriteToCart = (product) => {
    const newProduct = favorite.findIndex((item) => item.id === product.id)

    if (product.quantity <= 1) {
      deleteFavoriteToCart(product)
    } else {
      // Verificamos si hay un producto en el carrito y restamos 1 unidad
      if (newProduct >= 0) {
        const newCart = structuredClone(favorite)
        newCart[newProduct].quantity -= 1

        // Agregamos el precio actualizado al carrito
        if (newCart !== -1) {
          const newPrice = (product.quantity - 1) * product.price
          newCart[newProduct].newPrice = newPrice
        }
        return setFavoriteCart(newCart)
      }
      setFavoriteCart((prevState) => [
        ...prevState,
        { quantity: 1, newPrice: 0 }
      ])
    }
  }

  // Eliminar del carrito
  const deleteFavoriteToCart = (product) => {
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
        decrementFavoriteToCart,
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

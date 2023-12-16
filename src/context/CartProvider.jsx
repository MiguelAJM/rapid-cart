import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { AddedProduct, DeleteProduct } from '../elements/Toasts'

const CartContext = createContext()

export const useCart = () => {
  const CONTEXT = useContext(CartContext)
  if (!CONTEXT) {
    throw new Error(
      'Necesitas envolver tu aplicacion con el provider: CardProvider'
    )
  }
  return CONTEXT
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : []
  )

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart) ?? [])
  }, [cart])

  // Agregar al carrito
  const addProductToCart = (product) => {
    const newProduct = cart.findIndex((item) => item.id === product.id)

    // Verificamos si hay un producto en el carrito y agregamos 1 unidades mas
    if (newProduct >= 0) {
      const newCart = structuredClone(cart)
      newCart[newProduct].quantity += 1
      if (newCart !== -1) {
        const Price = (product.quantity + 1) * product.price
        newCart[newProduct].newPrice = Price
      }
      return setCart(newCart)
    }

    toast.custom(() => <AddedProduct />)

    setCart((prevState) => [
      ...prevState,
      { ...product, quantity: 1, newPrice: 0 }
    ])
  }

  // Eliminar del carrito
  const decrementProductToCart = (product) => {
    const newProduct = cart.findIndex((item) => item.id === product.id)

    if (product.quantity <= 1) {
      deleteProductToCart(product)
    } else {
      // Verificamos si hay un producto en el carrito y restamos 1 unidad
      if (newProduct >= 0) {
        const newCart = structuredClone(cart)
        newCart[newProduct].quantity -= 1

        // Agregamos el precio actualizado al carrito
        if (newCart !== -1) {
          const newPrice = (product.quantity - 1) * product.price
          newCart[newProduct].newPrice = newPrice
        }
        return setCart(newCart)
      }

      setCart((prevState) => [...prevState, { quantity: 1, newPrice: 0 }])
    }
  }

  // Eliminar del carrito
  const deleteProductToCart = (product) => {
    toast.custom(() => <DeleteProduct />)
    setCart(cart.filter((item) => item.id !== product.id))
  }

  // Verificar si hay un producto en el carrito
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  // Limpiar el carrito
  const clearProductCart = () => {
    setCart([])
  }

  // Total de todos los productos
  const getTotalCart = (arr) => {
    return arr.reduce((acc, item) => {
      acc += item.price * item.quantity
      return acc
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        decrementProductToCart,
        deleteProductToCart,
        checkProductInCart,
        clearProductCart,
        getTotalCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

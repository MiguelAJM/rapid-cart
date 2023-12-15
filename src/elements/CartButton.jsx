import {
  IconShoppingCartPlus,
  IconShoppingCartMinus
} from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'

export default function CartButton({ product }) {
  const { addProductToCart, deleteProductToCart, checkProductInCart } =
    useCart()
  const isProductInCart = checkProductInCart(product)

  return (
    <button
      onClick={
        isProductInCart
          ? () => deleteProductToCart(product)
          : () => addProductToCart(product)
      }
    >
      {isProductInCart ? (
        <>
          <IconShoppingCartMinus className='block md:hidden' size={16} />
          <IconShoppingCartMinus className='hidden md:block' size={24} />
        </>
      ) : (
        <>
          <IconShoppingCartPlus className='block md:hidden' size={16} />
          <IconShoppingCartPlus className='hidden md:block' size={24} />
        </>
      )}
    </button>
  )
}

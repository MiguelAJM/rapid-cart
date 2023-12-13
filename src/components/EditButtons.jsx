import {
  IconShoppingCartPlus,
  IconTrash,
  IconShoppingCartMinus
} from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'

export default function EditButtons({ item }) {
  const { addProductToCart, deleteProductToCart, decrementProductToCart } =
    useCart()

  return (
    <div>
      <button onClick={() => addProductToCart(item)}>
        <IconShoppingCartPlus />
      </button>
      <button onClick={() => decrementProductToCart(item)}>
        <IconShoppingCartMinus />
      </button>
      <button onClick={() => deleteProductToCart(item)}>
        <IconTrash />
      </button>
    </div>
  )
}

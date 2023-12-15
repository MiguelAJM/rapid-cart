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
    <div className='flex gap-0.5'>
      <button onClick={() => addProductToCart(item)}>
        <IconShoppingCartPlus size={24} className='text-green-500' />
      </button>
      <button onClick={() => decrementProductToCart(item)}>
        <IconShoppingCartMinus size={24} />
      </button>
      <button onClick={() => deleteProductToCart(item)}>
        <IconTrash size={24} className='text-red-500' />
      </button>
    </div>
  )
}

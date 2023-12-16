import { IconPlus, IconMinus } from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'

export default function EditButtons({ item }) {
  const { addProductToCart, decrementProductToCart } = useCart()

  return (
    <div className='grid place-content-center'>
      <article className='flex items-center gap-3 bg-zinc-200 rounded-full'>
        <button className='pl-5 py-3' onClick={() => decrementProductToCart(item)}>
          <IconMinus size={16} />
        </button>
        <p className='font-bold text-orange-500'>{item.quantity}</p>
        <button className='pr-5 py-3' onClick={() => addProductToCart(item)}>
          <IconPlus size={16} className='text-orange-500' />
        </button>
      </article>
    </div>
  )
}

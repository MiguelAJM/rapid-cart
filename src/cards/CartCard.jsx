import EditButtons from '../components/EditButtons'
import { Link } from 'react-router-dom'

export default function CartCard({ item }) {
  const NEW_PRICE = item.newPrice > item.price ? item.newPrice : item.price
  return (
    <article className='w-full' key={item.id}>
      <div className='w-full flex items-center gap-3 md:gap-5 border-b-2 border-black/10 p-4 '>
        <Link className='w-20 h-20 md:w-40 md:h-40' to={`/article/${item.id}`}>
          <img
            className='w-full h-full object-cover rounded-xl'
            src={item.thumbnail}
            alt={item.title}
          />
        </Link>
        <article className='w-full flex justify-between'>
          <div className='flex flex-col gap-1'>
            <h2 className='text-sm md:text-xl font-bold line-clamp-1'>
              {item.title}
            </h2>
            <p className='text-gray-800/70'>x{item.quantity}</p>
            <p className='text-xs md:text-sm font-bold'>${NEW_PRICE}</p>
          </div>
          <EditButtons item={item} />
        </article>
      </div>
    </article>
  )
}

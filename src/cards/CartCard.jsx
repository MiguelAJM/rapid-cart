import EditButtons from '../components/EditButtons'
import { Link } from 'react-router-dom'

export default function CartCard({ item }) {
  const NEW_PRICE = item.newPrice > item.price ? item.newPrice : item.price
  return (
    <li className='col-span-4' key={item.id}>
      <article className='w-full flex items-center gap-3 md:gap-5 border-b-2 border-black/10 md:p-4 pb-5'>
        <Link className='w-20 h-20 md:w-40 md:h-40' to={`/article/${item.id}`}>
          <img
            className='w-full h-full object-cover rounded-xl'
            src={item.thumbnail}
            alt={item.title}
          />
        </Link>
        <article className='flex-1'>
          <h2 className='text-sm md:text-xl font-bold line-clamp-1'>
            {item.title}
          </h2>

          <div>
            <p className='text-gray-800/70'>x{item.quantity}</p>
            <div className='w-full justify-between items-center flex'>
              <p className='text-xs md:text-sm font-bold'>${NEW_PRICE}</p>
              <EditButtons item={item} />
            </div>
          </div>
        </article>
      </article>
    </li>
  )
}

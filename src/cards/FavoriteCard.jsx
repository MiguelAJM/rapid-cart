import { IconArrowBadgeLeftFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../context/FavoriteProvider'

export default function FavoriteCard({ item }) {
  const { deleteFavoriteToCart } = useFavorite()

  return (
    <article className='group/delete w-full col-span-4 select-none'>
      <div className='w-full flex items-center gap-3 md:gap-5 border-b-2 border-black/10 md:p-4 py-4'>
        <Link className='w-20 h-20 md:w-40 md:h-40' to={`/article/${item.id}`}>
          <img
            className='w-full h-full object-cover rounded-xl'
            src={item.thumbnail}
            alt={item.title}
          />
        </Link>
        <div className='flex-1 flex justify-between items-center'>
          <article className='flex flex-col gap-1'>
            <h2 className='text-sm md:text-xl font-bold line-clamp-1'>
              {item.title}
            </h2>
            <p className='text-xs md:text-sm font-bold'>${item.price}</p>
          </article>
          <button onClick={() => deleteFavoriteToCart(item)}>
            <IconArrowBadgeLeftFilled
              size={48}
              className='text-red-500 opacity-0 group-hover/delete:opacity-100 '
            />
          </button>
        </div>
      </div>
    </article>
  )
}

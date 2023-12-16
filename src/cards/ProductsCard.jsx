import { Link } from 'react-router-dom'
import CartButton from '../elements/CartButton'
import FavoriteButton from '../elements/FavoriteButton'

export default function ProductsCard({ product }) {
  return (
    <li
      className='w-full mx-auto bg-white p-1.5 md:p-4 rounded-xl md:rounded-3xl col-span-1'
      key={product.id}
    >
      <article className='relative aspect-square md:aspect-auto md:h-[375px]'>
        <Link to={`/article/${product.id}`}>
          <img
            className='w-full h-full object-cover rounded-xl md:rounded-3xl brightness-[.70]'
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>

        <FavoriteButton product={product} />
      </article>

      <article className='flex flex-col mt-1.5 md:mt-4'>
        <h2 className='text-xs md:text-lg line-clamp-1 md:line-clamp-none'>
          {product.title}
        </h2>
        <div className='w-full flex items-center justify-between'>
          <strong className='text-xs md:text-lg font-semibold'>
            ${product.price}
          </strong>

          <CartButton product={product} />
        </div>
      </article>
    </li>
  )
}

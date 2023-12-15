import { Link } from 'react-router-dom'
import FavoriteButton from '../elements/FavoriteButton'
import { motion } from 'framer-motion'

export default function ItemsCard({ product }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='w-full mx-auto bg-zinc-200 p-2 md:p-4 rounded-xl md:rounded-3xl col-span-1'
      key={product.id}
    >
      <article className='relative aspect-square md:aspect-auto md:h-[375px]'>
        <Link to={`/article/${product.id}`}>
          <img
            className='h-full object-cover rounded-xl md:rounded-3xl brightness-[.70]'
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
        <strong className='text-xs md:text-lg font-semibold'>
          ${product.price}
        </strong>
      </article>
    </motion.li>
  )
}

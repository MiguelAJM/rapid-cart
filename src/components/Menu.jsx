import MenuMobile from '../mobile-components/MenuMobile'
import {
  IconShoppingBag,
  IconShoppingCartFilled,
  IconHeart,
  IconSearch,
  IconCategory
} from '@tabler/icons-react'
import { useFavorite } from '../context/FavoriteProvider'
import { useCart } from '../context/CartProvider'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const { cart } = useCart()
  const { favorite } = useFavorite()

  const CART_PRODUCTS = cart.length
  const FAVORITE_PRODUCTS = favorite.length

  const IN_ALREADY_URL = ({ isActive }) =>
    isActive
      ? 'border-b-4 border-red-500 flex items-center gap-2 pb-2'
      : 'border-b-4 border-transparent flex items-center gap-2 pb-2'

  return (
    <>
      <nav className='hidden md:flex items-center container mx-auto justify-between py-0 md:py-8'>
        <NavLink className='hidden md:flex items-center gap-2' to='/'>
          <IconShoppingBag className='text-red-500' size={32} />
          <h2 className='text-3xl text-center font-bold'>Rapid Cart</h2>
        </NavLink>

        <NavLink
          className='w-full flex bg-zinc-200 md:hidden items-center pt-8 px-4 pb-5 rounded-br-xl rounded-bl-xl'
          to='/'
        >
          <IconShoppingCartFilled className='text-red-500' size={24} />
          <h2 className='text-2xl font-bold'>Rapid Cart</h2>
        </NavLink>

        <ul className='hidden md:flex gap-5'>
          <li>
            <NavLink to='/all-categories' className={IN_ALREADY_URL}>
              <IconCategory size={24} />
              <span className='hidden lg:block text-lg font-medium'>Categories</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/all-products' className={IN_ALREADY_URL}>
              <IconSearch size={24} />
              <span className='hidden lg:block text-lg font-medium'>Search</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/cart' className={IN_ALREADY_URL}>
              <IconShoppingBag size={24} />
              <span className='hidden lg:block text-lg font-medium'>
                Cart ({CART_PRODUCTS})
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/favorites' className={IN_ALREADY_URL}>
              <IconHeart size={24} />
              <span className='hidden lg:block text-lg font-medium'>
                Favorites ({FAVORITE_PRODUCTS})
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <MenuMobile />
    </>
  )
}

import { IconShoppingBag, IconHeart, IconSearch } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const IN_ALREADY_URL = ({ isActive }) =>
  isActive
    ? 'text-red-500 flex items-center gap-2'
    : 'text-black flex items-center gap-2'

export default function MenuMobile() {
  return (
    <nav className='fixed md:hidden left-0 bottom-0 w-full flex items-center justify-between bg-zinc-100 border-t-2 border-black z-50 px-6 py-5'>
      <ul className='w-full flex justify-between'>
        <motion.li
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <NavLink to='/all-products' className={IN_ALREADY_URL}>
            <IconSearch size={32} />
          </NavLink>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <NavLink to='/cart' className={IN_ALREADY_URL}>
            <IconShoppingBag size={32} />
          </NavLink>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <NavLink to='/favorites' className={IN_ALREADY_URL}>
            <IconHeart size={32} />
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  )
}

import Cart from '../components/Cart'
import Products from '../components/Products'
import Favorites from '../components/Favorites'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import { useModal } from '../context/ModalProvider'
import { motion } from 'framer-motion'

export default function Home() {
  const { modal } = useModal()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        repeatDelay: 1
      }}
    >
      {modal.cart && <Cart />}
      {modal.favorite && <Favorites />}

      <Hero />
      <Products />
      <Categories />
    </motion.section>
  )
}

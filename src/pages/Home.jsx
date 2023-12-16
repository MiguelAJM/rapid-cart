import Products from '../components/Products'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function Home() {
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
      <Hero />
      <Products />
      <Categories />
    </motion.section>
  )
}

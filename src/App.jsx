import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Articles from './components/Articles'
import CartPage from './pages/CartPage'
import FavoritesPage from './pages/FavoritesPage'
import Footer from './components/Footer'
import AllProductsPage from './pages/AllProductsPage'
import Menu from './components/Menu'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Menu />
      <main className='relative min-h-[76.25vh] container mx-auto transition-all duration-300 ease-in-out font-roboto px-1 sm:px-0'>
        <AnimatePresence mode='wait'>
          <Toaster position='top-center' richColors />
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home />} />
            <Route path='article/:id' element={<Articles />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/all-products' element={<AllProductsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

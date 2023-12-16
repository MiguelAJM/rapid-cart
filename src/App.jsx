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
import CategoriesPage from './pages/CategoriesPage'
import ProductsByCategoryPage from './pages/ProductsByCategoryPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Menu />
      <main className='container mx-auto transition-all duration-300 ease-in-out font-roboto px-1 sm:px-0'>
        <AnimatePresence mode='wait'>
          <Toaster position='top-center' richColors />
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home />} />
            <Route path='article/:id' element={<Articles />} />
            <Route
              path='/categorie/:categorie'
              element={<ProductsByCategoryPage />}
            />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/all-products' element={<AllProductsPage />} />
            <Route path='/all-categories' element={<CategoriesPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

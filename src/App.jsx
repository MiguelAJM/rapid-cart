import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './components/Articles'
import ShoppingCart from './pages/ShoppingCart'
import FavoritesPage from './pages/FavoritesPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='article/:id' element={<Articles />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  )
}

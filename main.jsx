import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './src/context/CartProvider'
import App from './src/App'
import './style.css'
import { FilterProvider } from './src/context/FilterProvider'
import { FavoriteProvider } from './src/context/FavoriteProvider'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './src/context/ModalProvider'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CartProvider>
          <FavoriteProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </FavoriteProvider>
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>
)

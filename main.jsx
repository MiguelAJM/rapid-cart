import App from './src/App'
import './style.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './src/context/CartProvider'
import { FilterProvider } from './src/context/FilterProvider'
import { FavoriteProvider } from './src/context/FavoriteProvider'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './src/context/ModalProvider'
import ScrollToTop from './src/components/ScrollToTop'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CartProvider>
          <FavoriteProvider>
            <ModalProvider>
              <ScrollToTop>
                <App />
              </ScrollToTop>
            </ModalProvider>
          </FavoriteProvider>
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>
)

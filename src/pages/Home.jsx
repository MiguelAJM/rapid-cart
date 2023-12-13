import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Favorites from '../components/Favorites'
import { useModal } from '../context/ModalProvider'

export default function Home() {
  const { modal } = useModal()

  return (
    <div>
      <Header />
      <Products />
      {modal.cart && <Cart />}
      {modal.favorite && <Favorites />}
    </div>
  )
}

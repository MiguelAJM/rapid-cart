import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ModalContext = createContext()

export const useModal = () => {
  const CONTEXT = useContext(ModalContext)
  if (!CONTEXT) {
    throw new Error(
      'Necesitas envolver tu aplicacion con el provider: ModalProvider'
    )
  }
  return CONTEXT
}

export const ModalProvider = ({ children }) => {
  const location = useLocation()
  const [modal, setModal] = useState({
    cart: false,
    favorite: false
  })

  useEffect(() => {
    if (modal.cart || modal.favorite) {
      setModal({
        cart: false,
        favorite: false
      })
    }
  }, [location])

  const handleChangeCartModal = () => {
    setModal((prevState) => ({ ...prevState, cart: !modal.cart }))
  }

  const handleChangeFavoriteModal = () => {
    setModal((prevState) => ({ ...prevState, favorite: !modal.favorite }))
  }

  return (
    <ModalContext.Provider
      value={{ modal, handleChangeCartModal, handleChangeFavoriteModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

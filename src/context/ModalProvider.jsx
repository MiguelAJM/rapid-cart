import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCart } from './CartProvider'
import { toast } from 'sonner'
import { BuySuccessfull } from '../elements/Toasts'

const ModalContext = createContext()

export const useModal = () => {
  const CONTEXT = useContext(ModalContext)
  if (!CONTEXT) {
    throw new Error('You must wrap app in provider: ModalProvider')
  }
  return CONTEXT
}

export const ModalProvider = ({ children }) => {
  const location = useLocation()
  const { clearProductCart } = useCart()

  const [modal, setModal] = useState({
    confirm: false,
    checkout: false,
    loading: false,
    content: false,
    buy: false
  })

  // Establecer el estado por defecto al cambiar de URL
  useEffect(() => {
    if (modal.cart || modal.favorite) {
      setModal({
        confirm: false,
        checkout: false,
        loading: false,
        content: false,
        buy: false
      })
    }
  }, [location])

  // Ocultar el scroll cuando el modal este activo
  useEffect(() => {
    if (
      modal.checkout === true ||
      modal.confirm === true ||
      modal.loading === true
    ) {
      const bodyId = document.getElementById('body')
      bodyId.style.overflow = 'hidden'
    } else {
      const bodyId = document.getElementById('body')
      bodyId.style.overflow = 'visible'
    }
  }, [modal])

  const handleChangeCheckout = () => {
    setModal((prevState) => ({ ...prevState, checkout: !modal.checkout }))
  }

  const handleChangeConfirm = () => {
    setModal((prevState) => ({ ...prevState, confirm: !modal.confirm }))
  }

  const handleChangeConfirmBuy = () => {
    setModal((prevState) => ({ ...prevState, buy: !modal.buy }))
  }

  const handleChangeLoading = () => {
    // Activar el modal
    setModal((prevState) => ({ ...prevState, buy: false }))
    setModal((prevState) => ({ ...prevState, loading: true, content: false }))

    // Desactivar el modal después de 5 segundos
    const timeoutLoading = setTimeout(() => {
      setModal((prevState) => ({ ...prevState, loading: false }))
      clearProductCart()
      toast.custom(() => <BuySuccessfull />)
    }, 3000)

    // Activar el contenido después de 2.5 segundos
    const timeoutContent = setTimeout(() => {
      setModal((prevState) => ({ ...prevState, content: true }))
    }, 1500)

    return () => {
      // Limpiar timeouts al desmontar el componente o realizar cambios antes de que se activen
      clearTimeout(timeoutLoading)
      clearTimeout(timeoutContent)
    }
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        handleChangeConfirm,
        setModal,
        handleChangeCheckout,
        handleChangeLoading,
        handleChangeConfirmBuy
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

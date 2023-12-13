import { useModal } from '../context/ModalProvider'
import { IconHeart, IconShoppingCart } from '@tabler/icons-react'

export default function ModalButtons() {
  const { handleChangeCartModal, handleChangeFavoriteModal } = useModal()

  return (
    <div>
      <button onClick={handleChangeFavoriteModal}>
        <IconHeart />
      </button>
      <button onClick={handleChangeCartModal}>
        <IconShoppingCart />
      </button>
    </div>
  )
}

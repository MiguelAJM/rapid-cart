import { IconShoppingCartOff } from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'
import EditButtons from '../components/EditButtons'
import { Link } from 'react-router-dom'

export default function ShoppingCart() {
  const { cart, clearProductCart, getTotalCart } = useCart()

  const cartTotal = getTotalCart(cart)
  const totalArticles = cart.length

  return (
    <div className=''>
      <Link to='/'>Volver</Link>
      <h1>Cart</h1>

      <ul>
        {cart.map((item) => {
          const newPrice =
            item.newPrice > item.price ? item.newPrice : item.price

          return (
            <li key={item.id}>
              <Link to={`/article/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>Producto: {item.title}</p>
                <p>Precio Total: {newPrice}</p>
                <p>Cantidad: x{item.quantity}</p>
                <EditButtons item={item} />
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='mt-12'>
        <div>
          <p>Total: {cartTotal}</p>
          <h3>Articulos: {totalArticles}</h3>
        </div>
        <button onClick={clearProductCart}>
          <IconShoppingCartOff size={48} />
        </button>
      </div>
    </div>
  )
}

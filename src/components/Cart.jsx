import {
  IconShoppingCartPlus,
  IconTrash,
  IconShoppingCartMinus,
  IconShoppingCartOff
} from '@tabler/icons-react'

export default function Cart({
  deleteToCart,
  addToCart,
  decrementProductCart,
  cart,
  handleClearCart,
  getTotal
}) {
  const cartTotal = getTotal(cart)
  const totalArticles = cart.length
  return (
    <div className='absolute right-0 top-0 w-[300px] h-full bg-gray-800'>
      <h1>Cart</h1>

      <ul>
        {cart.map((item) => {
          const newPrice =
            item.newPrice > item.price ? item.newPrice : item.price

          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>Producto: {item.title}</p>
              <p>Precio: {item.price}</p>
              <p>Cantidad: x{item.quantity}</p>
              <p>Total: {newPrice}</p>
              <div>
                <button onClick={() => addToCart(item)}>
                  <IconShoppingCartPlus />
                </button>
                <button onClick={() => decrementProductCart(item)}>
                  <IconShoppingCartMinus />
                </button>
                <button onClick={() => deleteToCart(item)}>
                  <IconTrash />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <div>
        <div>
          <h3>Total: {cartTotal}</h3>
          <h3>Articulos: {totalArticles}</h3>
        </div>
        <button onClick={handleClearCart}>
          <IconShoppingCartOff size={48} />
        </button>
      </div>
    </div>
  )
}

/* eslint-disable multiline-ternary */
import {
  IconShoppingCartPlus,
  IconShoppingCartMinus
} from '@tabler/icons-react'

export default function Products({
  checkIsProductCart,
  products,
  deleteToCart,
  addToCart
}) {
  return (
    <main>
      <h2>Products</h2>

      <ul>
        {products.map((product) => {
          const isProductInCart = checkIsProductCart(product)
          return (
            <li className='mb-8' key={product.id}>
              <img src={product.thumbnail} alt={product.name} />

              <div>
                <strong>{product.title}</strong>
                <p>{product.price}</p>
              </div>

              <div>
                <p>{product.category}</p>
              </div>

              <button
                onClick={
                  isProductInCart
                    ? () => {
                        deleteToCart(product)
                      }
                    : () => {
                        addToCart(product)
                      }
                }
              >
                {isProductInCart ? (
                  <IconShoppingCartMinus size={32} />
                ) : (
                  <IconShoppingCartPlus size={32} />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

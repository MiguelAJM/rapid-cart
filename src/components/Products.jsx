import { useFilter } from '../context/FilterProvider'
import { Link } from 'react-router-dom'

export default function Products() {
  const { productsCart } = useFilter()

  return (
    <main>
      <h2>Products</h2>

      <ul>
        {productsCart.map((product) => {
          return (
            <li className='mb-8' key={product.id}>
              <Link to={`article/${product.id}`}>
                <img src={product.thumbnail} alt={product.name} />

                <div>
                  <strong>{product.title}</strong>
                  <p>${product.price}</p>
                </div>

                <div>
                  <p>{product.category}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

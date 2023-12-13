import { IconTrash } from '@tabler/icons-react'
import { useFavorite } from '../context/FavoriteProvider'
import { Link } from 'react-router-dom'

export default function FavoritesPage() {
  const { favorite, deleteFavoriteToCart, clearFavoriteCart, getTotalCart } =
    useFavorite()

  const totalFavorite = getTotalCart(favorite)
  const totalFavoritesArticles = favorite.length
  return (
    <div className=''>
      <Link to='/'>Volver</Link>
      <h1>Favorites</h1>

      <ul>
        {favorite.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/article/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>Producto: {item.title}</p>
                <p>Precio: {item.price}</p>
                <div>
                  <button onClick={() => deleteFavoriteToCart(item)}>
                    <IconTrash />
                  </button>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='mt-12'>
        <div>
          <h3>Total: {totalFavorite}</h3>
          <h3>Articulos: {totalFavoritesArticles}</h3>
        </div>
        <button onClick={clearFavoriteCart}>
          <IconTrash size={48} />
        </button>
      </div>
    </div>
  )
}

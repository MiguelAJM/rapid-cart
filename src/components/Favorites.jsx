import { IconTrash } from '@tabler/icons-react'
import { useFavorite } from '../context/FavoriteProvider'

export default function Favorites() {
  const {
    favorite,
    deleteFavoriteToCart,
    clearFavoriteCart,
    getTotalCart
  } = useFavorite()

  const totalFavorite = getTotalCart(favorite)
  const totalFavoritesArticles = favorite.length
  return (
    <div className='absolute right-0 top-0 w-[300px] bg-gray-800'>
      <h1>Favorites</h1>

      <ul>
        {favorite.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>Producto: {item.title}</p>
              <p>Precio: {item.price}</p>
              <div>
                <button onClick={() => deleteFavoriteToCart(item)}>
                  <IconTrash />
                </button>
              </div>
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

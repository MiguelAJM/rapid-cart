import { Link } from 'react-router-dom'
import { useFilter } from '../context/FilterProvider'
import ModalButtons from './ModalButtons'
import { IconShoppingBag, IconHeart } from '@tabler/icons-react'

export default function Header() {
  const {
    filters,
    handleChangePrice,
    handleChangeCategory,
    handleChangeSearch,
    handleChangeMinPrice
  } = useFilter()

  return (
    <header>
      <select value={filters.category} onChange={handleChangeCategory}>
        <option value='all'>Todos</option>
        <option value='smartphones'>Smartphones</option>
        <option value='home-decoration'>Home Decoration</option>
        <option value='laptops'>Laptops </option>
      </select>

      <select value={filters.price} onChange={handleChangePrice}>
        <option value={0}>$0</option>
        <option value={50}>$50</option>
        <option value={100}>$100</option>
        <option value={500}>$500</option>
        <option value={1000}>$1000</option>
        <option value={1500}>$1500</option>
      </select>

      <input
        type='text'
        value={filters.title}
        onChange={handleChangeSearch}
        placeholder='Search a product'
      />

      <label htmlFor='price-range'>$0</label>
      <input
        min='0'
        max='1500'
        type='range'
        id='price-range'
        value={filters.minPrice}
        onChange={handleChangeMinPrice}
      />
      <label htmlFor='price-range'>$1500</label>

      <ModalButtons />
      <div className='flex'>
        <Link to='/cart'>
          <IconShoppingBag />
        </Link>
        <Link to='/favorites'>
          <IconHeart />
        </Link>
      </div>
    </header>
  )
}

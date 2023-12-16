import { categorys } from '../mocks/categories'
import { useFilter } from '../context/FilterProvider'

export default function Selector() {
  const {
    filters,
    handleChangePrice,
    handleChangeCategory,
    handleChangeSearch,
    handleChangeMinPrice
  } = useFilter()

  return (
    <article className='w-full flex flex-wrap justify-between items-center mt-4 md:bg-white gap-4 md:p-6 md:rounded-2xl'>
      <div className='w-full flex flex-wrap md:flex-nowrap md:grid md:grid-cols-4 gap-4'>
        <input
          type='text'
          id='search'
          className='w-full px-4 py-4 md:bg-zinc-200 rounded-2xl outline-none'
          value={filters.title}
          onChange={handleChangeSearch}
          placeholder='Search a product'
        />

        <select
          className='w-full px-4 py-4 md:bg-zinc-200 rounded-2xl outline-none'
          value={filters.category}
          onChange={handleChangeCategory}
        >
          {categorys.map((category) => {
            return (
              <option value={category.category} key={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>
        <select
          className='w-full px-4 py-4 md:bg-zinc-200 rounded-2xl outline-none'
          value={filters.price}
          onChange={handleChangePrice}
        >
          <option value={0}>$0</option>
          <option value={50}>$50</option>
          <option value={100}>$100</option>
          <option value={500}>$500</option>
          <option value={1000}>$1000</option>
          <option value={1500}>$1500</option>
        </select>

        <div className='w-full px-4 py-4 md:bg-zinc-200 flex items-center bg-white rounded-2xl'>
          <label className='w-16' htmlFor='price-range'>
            ${filters.minPrice}
          </label>
          <input
            min='0'
            max='1500'
            type='range'
            id='price-range'
            value={filters.minPrice}
            onChange={handleChangeMinPrice}
          />
        </div>
      </div>
    </article>
  )
}

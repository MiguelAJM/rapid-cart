import { createContext, useContext, useState } from 'react'
import { products } from '../mocks/products.json'

const FilterContext = createContext()

export const useFilter = () => {
  const CONTEXT = useContext(FilterContext)
  if (!CONTEXT) {
    throw new Error(
      'Necesitas envolver tu aplicacion con el provider: FilterProvider'
    )
  }
  return CONTEXT
}

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    price: 50,
    title: ''
  })

  // Filtrar los datos
  const filterProducts = (product) => {
    return product.filter((item) => {
      return (
        item.price >= filters.minPrice &&
        item.price >= filters.price &&
        (filters.category === 'all' || item.category === filters.category) &&
        item.title.toLowerCase().includes(filters.title.toLowerCase())
      )
    })
  }

  const productsCart = filterProducts(products)

  // Funciones del filtro
  const handleChangePrice = (e) => {
    setFilters((prevState) => ({ ...prevState, price: e.target.value }))
  }

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({ ...prevState, minPrice: e.target.value }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }))
  }

  const handleChangeSearch = (e) => {
    setFilters((prevState) => ({ ...prevState, title: e.target.value }))
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        productsCart,
        handleChangePrice,
        handleChangeCategory,
        handleChangeSearch,
        handleChangeMinPrice
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

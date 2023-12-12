import { useEffect, useState } from 'react'
import { products } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'

export default function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0,
    title: ''
  })
  const [cart, setCart] = useState(
    window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : []
  )

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart) ?? [])
  }, [cart])

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.category === 'all' || product.category === filters.category) &&
        product.title.toLowerCase().includes(filters.title.toLowerCase())
      )
    })
  }

  const filteredProducts = filterProducts(products)

  const addToCart = (product) => {
    const newProduct = cart.findIndex((item) => item.id === product.id)

    // Si ya hay un producto en el carrito iteramos la quantity en 1
    if (newProduct >= 0) {
      const newCart = structuredClone(cart)
      newCart[newProduct].quantity += 1

      if (newProduct !== -1) {
        const newPrice = (product.quantity + 1) * product.price
        newCart[newProduct].newPrice = newPrice
      }
      return setCart(newCart)
    }

    setCart((prevState) => [
      ...prevState,
      { ...product, quantity: 1, newPrice: 0 }
    ])
  }

  const getTotal = (arr) => {
    return arr.reduce((acc, item) => {
      acc += item.price * item.quantity
      return acc
    }, 0)
  }

  const decrementProductCart = (product) => {
    const newProduct = cart.findIndex((item) => item.id === product.id)

    if (product.quantity <= 1) {
      deleteToCart(product)
    } else {
      if (newProduct >= 0) {
        const newCart = structuredClone(cart)
        newCart[newProduct].quantity -= 1

        if (newProduct !== -1) {
          const newPrice = (product.quantity - 1) * product.price
          newCart[newProduct].newPrice = newPrice
        }
        return setCart(newCart)
      }
    }
  }

  const deleteToCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  const checkIsProductCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  const clearCart = () => {
    setCart([])
  }

  const handleChangePrice = (e) => {
    setFilters((prevState) => ({ ...prevState, price: e.target.value }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }))
  }

  const handleChangeSearch = (e) => {
    setFilters((prevState) => ({ ...prevState, title: e.target.value }))
  }

  return (
    <div>
      <Header
        title={filters.title}
        category={filters.category}
        price={filters.price}
        handleChangeSearch={handleChangeSearch}
        handleChangePrice={handleChangePrice}
        handleChangeCategory={handleChangeCategory}
      />
      <Products
        checkIsProductCart={checkIsProductCart}
        addToCart={addToCart}
        deleteToCart={deleteToCart}
        products={filteredProducts}
      />

      <Cart
        decrementProductCart={decrementProductCart}
        addToCart={addToCart}
        deleteToCart={deleteToCart}
        handleClearCart={clearCart}
        cart={cart}
        getTotal={getTotal}
      />
    </div>
  )
}

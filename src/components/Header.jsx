export default function Header({
  title,
  category,
  price,
  handleChangeSearch,
  handleChangePrice,
  handleChangeCategory
}) {
  return (
    <header>
      <select value={category} onChange={handleChangeCategory}>
        <option value='all'>Todos</option>
        <option value='smartphones'>Smartphones</option>
        <option value='home-decoration'>Home Decoration</option>
        <option value='laptops'>Laptops </option>
      </select>

      <select value={price} onChange={handleChangePrice}>
        <option value={0}>$0</option>
        <option value={50}>$50</option>
        <option value={100}>$100</option>
        <option value={500}>$500</option>
        <option value={1000}>$1000</option>
      </select>

      <input
        type='text'
        value={title}
        onChange={handleChangeSearch}
        placeholder='Search a product'
      />
    </header>
  )
}

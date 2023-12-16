export default function NoItems({ message, img }) {
  return (
    <div className='w-full grid place-content-center'>
      <h2 className='text-xl font-bold text-center mb-12'>{message}</h2>
      <img
        className='w-full h-full md:w-[575px] object-cover px-4 '
        src={img}
        alt='Empty Cart Img'
      />
    </div>
  )
}

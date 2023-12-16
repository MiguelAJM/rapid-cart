export default function NoItems({ message, img }) {
  return (
    <div className='w-full grid place-content-center'>
      <h2 className='text-xl font-bold text-center'>{message}</h2>
      <img
        className='w-full h-full md:w-[575px] object-cover p-12'
        src={img}
        alt='Empty Cart Img'
      />
    </div>
  )
}

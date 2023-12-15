import { IconHeartFilled, IconTrash, IconCheck } from '@tabler/icons-react'

export function AddedProduct() {
  return (
    <div className='min-w-[350px] w-full flex flex-col items-center gap-2 bg-zinc-100 p-4 shadow-lg rounded-xl'>
      <IconCheck className='text-lime-500' size={32} />
      <article>
        <h2 className='font-medium text-lg'>Product added succesfull!</h2>
      </article>
    </div>
  )
}

export function DeleteProduct() {
  return (
    <div className='min-w-[350px] w-full flex flex-col items-center gap-2 bg-zinc-100 p-4 shadow-lg rounded-xl'>
      <IconTrash className='text-red-500' size={32} />
      <div>
        <h2 className='font-medium text-lg'>Product deleted succesfull!</h2>
      </div>
    </div>
  )
}

export function AddedFavProduct() {
  return (
    <div className='min-w-[350px] w-full flex flex-col items-center gap-2 bg-zinc-100 p-4 shadow-lg rounded-xl'>
      <IconHeartFilled className='text-red-500' size={32} />
      <div>
        <h2 className='font-medium text-lg'>Product added in favorites!</h2>
      </div>
    </div>
  )
}

export function DeleteFavProduct() {
  return (
    <div className='min-w-[350px] w-full flex flex-col items-center gap-2 bg-zinc-100 p-4 shadow-lg rounded-xl'>
      <IconTrash className='text-red-500' size={32} />
      <div>
        <h2 className='font-medium text-lg'>Product deleted the favorites!</h2>
      </div>
    </div>
  )
}

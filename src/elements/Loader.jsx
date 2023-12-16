import { Grid } from 'react-loader-spinner'
export default function Loader() {
  return (
    <div className='flex items-center justify-center flex-col h-screen md:h-auto'>
      <h2 className='text-4xl font-bold mb-8'>Loading</h2>
      <Grid
        height='80'
        width='80'
        color='#ef4444'
        ariaLabel='grid-loading'
        radius='12.5'
        visible
      />
    </div>
  )
}

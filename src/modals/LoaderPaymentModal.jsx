import { Grid } from 'react-loader-spinner'
import { motion } from 'framer-motion'
import { useModal } from '../context/ModalProvider'
import { IconCircleCheckFilled } from '@tabler/icons-react'

export default function LoaderPaymentModal() {
  const { modal } = useModal()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        repeatDelay: 1
      }}
      className='fixed grid place-content-center top-0 left-0 w-full h-screen bg-black/50 z-[1000] px-4'
    >
      <div className='w-[290px] sm:w-[325px] md:w-[375px] h-[375px] p-4 md:p-8 rounded-xl bg-zinc-200 flex items-center justify-center flex-col'>
        {modal.content ? (
          <div className='flex items-center justify-center flex-col h-screen md:h-auto'>
            <IconCircleCheckFilled className='text-lime-500' size={128} />
            <h2 className='text-sm md:text-xl text-center font-bold'>
              Thanks a lot
            </h2>
            <p className='text-xs md:text-lg text-center'>
              You ourder has submitted.
            </p>
          </div>
        ) : (
          <div className='flex items-center justify-center flex-col h-screen md:h-auto'>
            <h2 className='text-sm md:text-xl text-center font-bold mb-8'>
              Process payment...
            </h2>
            <Grid
              height='80'
              width='80'
              color='#ef4444'
              ariaLabel='grid-loading'
              radius='12.5'
              visible
            />
          </div>
        )}
      </div>
    </motion.section>
  )
}

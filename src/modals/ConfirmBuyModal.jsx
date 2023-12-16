import { useModal } from '../context/ModalProvider'
import { motion } from 'framer-motion'

export default function ConfirmBuyModal() {
  const { handleChangeLoading, setModal } = useModal()

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
      onClick={() => setModal((prevState) => ({ ...prevState, buy: false }))}
      className='fixed grid place-content-center top-0 left-0 w-full h-screen bg-black/50 z-[1000] px-4'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-[290px] sm:w-[325px] md:w-[375px] p-4 md:p-8 rounded-xl bg-zinc-200 flex items-center flex-col'
      >
        <h2 className='text-sm md:text-xl text-center font-bold'>
          Do you want to buy these items?
        </h2>
        <p className='text-xs md:text-lg text-center'>
          You are sure you want to buy all the item(s) in this section
        </p>
        <div className='w-full grid grid-cols-2 gap-3 mt-5'>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='px-8 py-3 text-lg bg-lime-500 rounded-2xl font-bold'
            onClick={handleChangeLoading}
          >
            Confirm
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='px-8 py-3 text-lg bg-red-500 rounded-2xl font-bold text-white'
            onClick={() =>
              setModal((prevState) => ({ ...prevState, buy: false }))}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

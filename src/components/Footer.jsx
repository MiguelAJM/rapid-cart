import { IconHeartFilled, IconBrandGithub, IconBrandX } from '@tabler/icons-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className='hidden md:block w-full p-8 bg-black rounded-tr-xl rounded-tl-xl z-0'>
      <div className='container mx-auto flex items-center justify-between'>
        <article className='text-lg text-zinc-100'>
          <h2 className='text-2xl font-bold'>Cart Rapid</h2>
          <p className='flex items-center gap-2'>
            Coded by
            <span>
              <IconHeartFilled size={20} />
            </span>
            Miguel Angel
          </p>
        </article>

        <ul className='flex gap-4 items-center text-zinc-100'>
          <motion.li
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a href='https://github.com/MiguelAJM' rel='_blank'>
              <IconBrandGithub size={40} />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a href='https://twitter.com/miguejmdev' rel='_blank'>
              <IconBrandX size={40} />
            </a>
          </motion.li>
        </ul>
      </div>
    </footer>
  )
}

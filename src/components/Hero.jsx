import React from 'react'
import heroImg from '../assets/hero-img.svg'
import heroMobileImg from '../assets/hero-mobile-img.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className='flex flex-col items-center gap-12 mt-8 md:my-16 relative w-full px-2 md:px-0'>
      <article className='flex flex-col gap-2 md:gap-4 text-center'>
        <h2 className='text-xl md:text-5xl font-medium uppercase'>
          Find Something Special Today
        </h2>
        <p className='text-gray-800/75 text-xs md:text-xl'>
          Explore our latest products tailored just for you.
        </p>
      </article>

      <img
        className='hidden md:block max-w-[1240px] w-full'
        src={heroImg}
        alt='Hero Shopping'
      />

      <img
        className='block md:hidden w-full'
        src={heroMobileImg}
        alt='Hero Shopping'
      />

      <motion.button
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={() => navigate('/all-products')}
        className='bg-black px-8 md:px-16 py-2 md:py-4 rounded-full text-zinc-100 text-sm md:text-base'
      >
        Buy Now
      </motion.button>
    </section>
  )
}

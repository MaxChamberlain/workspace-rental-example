'use client'
import MainSection from '@/components/Home/sections/MainSection'
import BookSection from '@/components/Home/sections/BookSection'
import InfoSection from '@/components/Home/sections/InfoSection'
import OptionsSection from '@/components/Home/sections/OptionsSection'
import TestimonialSection from '@/components/Home/sections/TestimonialSection'
import { motion } from 'framer-motion'

export default function Home() {
  
  return (
    <motion.main 
      id='home-page' 
      className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-slate-100 to-white w-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <MainSection />
      <BookSection />
      <InfoSection />
      <OptionsSection />
      <section className='w-full bg-zinc-800/95 py-14 flex flex-col items-center justify-center gap-8 px-8 xl:px-0'>
        <span className='font-bold text-2xl lg:text-4xl xl:text-5xl text-slate-100 text-center'>
          Save big with our new <span className='text-[#108A00]'>discount</span> system!
        </span>
        <span className='font-normal text-2xl text-slate-100 text-center'>
          Top Quality Spaces. Easy Booking. <span className='text-[#108A00]'>24/7</span> Support
        </span>
      </section>
      <TestimonialSection />
    </motion.main>
  )
}

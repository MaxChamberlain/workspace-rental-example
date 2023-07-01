'use client'
import cityImage from '@/assets/images/city.webp'
import TestimonialSection from '@/components/Home/sections/TestimonialSection';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Testimonials() {
    return(
        <motion.main 
          id='about-page' 
          className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-slate-100 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
            <div className='py-16 md:py-28 xl:py-32 px-16 flex flex-col items-center justify-center gap-8 w-full relative'>
                <Image
                    src={cityImage}
                    alt='City'
                    className='absolute top-0 left-0 w-full h-full object-cover opacity-10 brightness-150 -z-1'
                />
                <span className='font-bold text-3xl lg:text-5xl text-zinc-800 text-start w-fit lg:w-3/4 z-10'>
                    Testimonials
                </span>
            </div>
            <TestimonialSection />
            <section className='w-full bg-zinc-800/95 py-14 flex flex-col items-center justify-center gap-8 px-8 xl:px-0'>
                <span className='font-bold text-2xl lg:text-4xl xl:text-5xl text-slate-100 text-center'>
                    Book a space by getting in touch with us <span className='text-[#108A00]'>(123) 456-7890</span>
                </span>
            </section>
        </motion.main>
    )
}
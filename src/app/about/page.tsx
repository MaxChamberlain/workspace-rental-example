'use client'
import cityImage from '@/assets/images/city.webp'
import { motion } from "framer-motion";
import Image from 'next/image';
import business from '@/assets/images/business-deal.webp'
import InfoSection from '@/components/Home/sections/InfoSection';

export default function About() {
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
                    About
                </span>
            </div>
            <div className='flex gap-16 w-full max-w-4xl my-24 lg:my-56 flex-col lg:flex-row'>
                <Image
                    src={business}
                    alt='Business'
                    className='w-[400px] h-[400px] object-cover rounded-xl shadow mx-auto hidden sm:block'
                />
                <div className='flex flex-col gap-8 items-center lg:items-start'>
                    <span className='font-semibold xl:text-xl text-lg text-center'>
                        Who we are
                    </span>
                    <span className='font-bold 2xl:text-5xl xl:text-3xl text-2xl text-center'>
                        You book the office and your business starts
                    </span>
                    <span className='text-sm xl:text-base text-center max-w-xs xl:max-w-xl'>
                        We believe your business begins and ends with the space in which it&apos;s conducted. That&apos;s why we provide great spaces for great prices, customized just for you.
                    </span>
                    <div className='w-full flex justify-center flex-col md:flex-row gap-12 lg:justify-between items-center'>
                        <div className='bg-white p-2 shadow rounded-xl text-center'>
                            <div className='font-bold text-2xl'>
                                5
                            </div>
                            <div className='font-normal text-xl'>
                                Space types
                            </div>
                        </div>
                        <div className='bg-white p-2 shadow rounded-xl text-center'>
                            <div className='font-bold text-2xl'>
                                14
                            </div>
                            <div className='font-normal text-xl'>
                                Time slots
                            </div>
                        </div>
                        <div className='bg-white p-2 shadow rounded-xl text-center'>
                            <div className='font-bold text-2xl'>
                                Any
                            </div>
                            <div className='font-normal text-xl'>
                                Date Range
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InfoSection />
            <section className='w-full bg-zinc-800/95 py-14 flex flex-col items-center justify-center gap-8 px-8 xl:px-0'>
                <span className='font-bold text-2xl lg:text-4xl xl:text-5xl text-slate-100 text-center'>
                    Book a space by getting in touch with us <span className='text-[#108A00]'>(123) 456-7890</span>
                </span>
            </section>
        </motion.main>
    )
}
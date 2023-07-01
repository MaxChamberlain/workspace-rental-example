'use client'
import cityImage from '@/assets/images/city.webp'
import { motion } from "framer-motion";
import Image from 'next/image';
import worldMapImage from '@/assets/images/world-map.webp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link';
import { Button, TextField } from '@mui/material';

export default function Contact() {
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
                    Contact Us
                </span>
            </div>
            <div className='pt-32 pb-48 w-full max-w-4xl flex justify-around flex-col lg:flex-row gap-24 lg:gap-0' style={{
                backgroundImage: `url(${worldMapImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className='flex flex-col items-center lg:items-start justify-center lg:justify-start gap-10 w-full lg:max-w-xl'>
                    <span className='font-bold text-5xl text-zinc-800 text-start w-3/4 z-10'>
                        Need more information?
                    </span>
                    <span className='font-normal text-base text-zinc-600 text-start w-3/4 z-10'>
                        A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
                    </span>
                    <span className='-mb-6'>
                        <LocalPhoneIcon /> (123) 456-7890
                    </span>
                    <Link href='mailto:maxintegllc@gmail.com'>
                        <span>
                            <EmailIcon /> maxintegllc@gmail.com
                        </span>
                    </Link>
                </div>
                <div className='flex flex-col gap-4 px-8 lg:px-0 w-full'>
                    <span className='font-bold text-base text-black'>
                        Full Name <span className='text-[#108A00]'>*</span>
                    </span>
                    <TextField variant='filled' fullWidth label='Name' className='mb-2' sx={{
                        '& .MuiFilledInput-root': {
                            backgroundColor: '#eee',
                            borderRadius: 0,
                            '& fieldset': {
                                border: 'none',
                                outline: 'none',
                            }
                        },
                    }} />
                    <span className='font-bold text-base text-black'>
                        Email <span className='text-[#108A00]'>*</span>
                    </span>
                    <TextField variant='filled' fullWidth label='Email Address' className='mb-2' sx={{
                        '& .MuiFilledInput-root': {
                            backgroundColor: '#eee',
                            borderRadius: 0,
                            '& fieldset': {
                                border: 'none',
                                outline: 'none',
                            }
                        },
                    }} />
                    <span className='font-bold text-base text-black'>
                        Describe It <span className='text-[#108A00]'>*</span>
                    </span>
                    <TextField variant='filled' fullWidth label='Email Address' className='mb-2' sx={{
                        '& .MuiFilledInput-root': {
                            backgroundColor: '#eee',
                            borderRadius: 0,
                            height: '10rem',
                            '& fieldset': {
                                border: 'none',
                                outline: 'none',
                            }
                        },
                    }} />
                    <Button variant='contained' color='primary' fullWidth style={{  backgroundColor: '#108A00', borderRadius: 0, paddingTop: '1.5rem', paddingBottom: '1.5rem' }} >Send Message</Button>
                </div>
            </div>
            <section className='w-full bg-zinc-800/95 py-14 flex flex-col items-center justify-center gap-8 px-8 xl:px-0'>
                <span className='font-bold text-2xl lg:text-4xl xl:text-5xl text-slate-100 text-center'>
                    Book a space by getting in touch with us <span className='text-[#108A00]'>(123) 456-7890</span>
                </span>
            </section>
        </motion.main>
    )
}
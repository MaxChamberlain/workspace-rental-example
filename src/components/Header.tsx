'use client'
import Image from 'next/image'
import logo from '../assets/svgs/building.svg'
import Link from 'next/link'
import { Button } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import hamburger from '../assets/svgs/hamburger.svg'

export default function Header(){
    const [ showNavbar, setShowNavbar ] = useState(false)
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])
    return(
        <div className="flex bg-white/50 backdrop-blur justify-center items-center w-screen h-24 sticky top-0 z-[999]">
            <AnimatePresence mode='wait'>
                {showNavbar && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-1 backdrop-blur-md`}
                    onClick={() => setShowNavbar(false)}
                />}
            </AnimatePresence>
            <div className='flex justify-between items-center w-3/4 mx-auto h-fullpx-12 py-6'>
                <Link href='/'>
                <div className='flex items-center space-x-4'>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <div className='flex flex-col h-full justify-between items-start text-xl'>
                        <span className='font-bold uppercase'>
                            Workspace
                        </span>
                        <span className=''>
                            Rental
                        </span>
                    </div>
                </div>
                </Link>
                <div className='block lg:hidden cursor-pointer' onClick={() => {
                    setShowNavbar(was => !was)
                }}>
                    <Image
                        src={hamburger}
                        alt='hamburger'
                        width={25}
                        height={25}
                    />
                </div>
                <motion.div 
                    className={`flex flex-col lg:left-0 lg:flex-row items-center w-fit justify-start gap-4 lg:gap-0 p-8 lg:justify-end right-0 top-0 fixed lg:relative lg:space-x-4 text-lg font-semibold bg-white lg:bg-transparent shadow-2xl lg:shadow-none h-screen lg:h-fit transition-transform`}
                    animate={{ right: showNavbar ? 0 : '-100%' }}
                    transition={{ duration: 0.2, delay: 0 }}
                >
                    <Link href='/'>
                        <span className='font-semibold text-black hover:text-[#108A00]' onClick={() => setShowNavbar(false)}>
                            Home
                        </span>
                    </Link>
                    <Link href='/about'>
                        <span className='font-semibold text-black hover:text-[#108A00]' onClick={() => setShowNavbar(false)}>
                            About
                        </span>
                    </Link>
                    <Link href='/testimonials'>
                        <span className='font-semibold text-black hover:text-[#108A00]' onClick={() => setShowNavbar(false)}>
                            Testimonials
                        </span>
                    </Link>
                    <Link href='/contact'>
                        <span className='font-semibold text-black hover:text-[#108A00]' onClick={() => setShowNavbar(false)}>
                         Contact
                        </span>
                    </Link>
                    <Link href='/'>
                        <Button
                            variant='text'
                            style={{
                                color: '#000',
                                fontWeight: 'bold',
                                padding: '12px 30px'
                            }}
                            className='block lg:hidden'
                            onClick={() => setShowNavbar(false)}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Link href='/'>
                        <Button
                            variant='contained'
                            style={{
                                backgroundColor: '#108A00',
                                fontWeight: 'bold',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                padding: '12px 30px'
                            }}
                            className='block lg:hidden'
                            onClick={() => setShowNavbar(false)}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </motion.div>
                <div className='items-center space-x-4 hidden lg:flex'>
                    <Link href='/'>
                        <Button
                            variant='text'
                            style={{
                                color: '#000',
                                fontWeight: 'bold',
                                padding: '12px 30px'
                            }}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Link href='/'>
                        <Button
                            variant='contained'
                            style={{
                                backgroundColor: '#108A00',
                                fontWeight: 'bold',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                padding: '12px 30px'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
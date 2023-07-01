'use client'
import Image from 'next/image'
import logo from '../assets/svgs/building.svg'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Header(){
    return(
        <div className="flex bg-white/50 backdrop-blur justify-center items-center w-full h-24 sticky top-0 z-[999]">
            <div className='flex justify-between items-center w-3/4 mx-auto h-fullpx-12 py-6'>
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
                <div className='flex items-center space-x-4'>
                    <Link href='/'>
                        <span className='font-semibold text-black hover:text-[#108A00]'>
                            Home
                        </span>
                    </Link>
                    <Link href='/about'>
                        <span className='font-semibold text-black hover:text-[#108A00]'>
                            About
                        </span>
                    </Link>
                    <Link href='/testimonials'>
                        <span className='font-semibold text-black hover:text-[#108A00]'>
                            Testimonials
                        </span>
                    </Link>
                    <Link href='/contact'>
                        <span className='font-semibold text-black hover:text-[#108A00]'>
                         Contact
                        </span>
                    </Link>
                </div>
                <div className='flex items-center space-x-4'>
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
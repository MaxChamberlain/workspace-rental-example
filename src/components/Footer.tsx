'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import { Button, TextField } from '@mui/material';

export default function Footer(){
    return(
        <div className="p-8 flex items-start justify-center bg-white gap-24">

            <div className='flex flex-col items-start justify-start gap-8'>
                <div className='flex h-full justify-between items-start text-xl gap-2'>
                    <span className='font-bold uppercase'>
                        Workspace
                    </span>
                    <span className=''>
                        Rental
                    </span>
                </div>
                <span className='text-base w-64'>
                    We offer a range of office spaces to fit exactly what your team needs. Why settle for less?
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
            
            <div className='flex h-full flex-col items-start justify-start gap-8'>
                <div className='flex h-full flex-col justify-start items-start text-xl gap-2'>
                    <span className='font-bold uppercase'>
                        Company
                    </span>
                    <span className='text-base'>
                        How It Works
                    </span>
                    <span className='text-base'>
                        Careers
                    </span>
                    <span className='text-base'>
                        Mobile
                    </span>
                    <span className='text-base'>
                        Blog
                    </span>
                </div>
            </div>
            
            <div className='flex h-full flex-col items-start justify-start gap-8'>
                <div className='flex h-full flex-col justify-start items-start text-xl gap-2'>
                    <span className='font-bold uppercase'>
                        Our Hours
                    </span>
                    <span className='text-base'>
                        Every Day: 7:00AM - 9:00PM
                    </span>
                </div>
            </div>
            
            <div className='flex h-full flex-col items-start justify-start gap-8'>
                <div className='flex h-full flex-col justify-start items-start text-xl gap-2'>
                    <span className='font-bold uppercase'>
                        SUBSCRIPTION
                    </span>
                    <span className='text-base w-64'>
                        Subscribe your Email address for latest news & updates.
                    </span>
                    <TextField variant='filled' fullWidth label='Email Address' sx={{
                        '& .MuiFilledInput-root': {
                            backgroundColor: '#ccc',
                            borderRadius: 0,
                            '& fieldset': {
                                border: 'none',
                                outline: 'none',
                            }
                        },
                    }} />
                    <Button variant='contained' color='primary' fullWidth style={{  backgroundColor: '#108A00', borderRadius: 0 }} >Subscribe</Button>
                </div>
            </div>

        </div>
    )
}
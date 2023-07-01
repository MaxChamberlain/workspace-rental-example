import Image from "next/image"
import Link from 'next/link'
import officeImage from '../../../assets/images/making-deal.png'
import backgroundCity from '../../../assets/images/background-city.png'
import { Button } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MainSection() {
    return(
        <section className='w-full flex flex-col justify-center items-center gap-6 dark:text-stone-100 text-stone-700 pt-32 md:pt-36 pb-64 z-5'>
        <Image
          src={backgroundCity}
          alt="Background City"
          width={600}
          height={600}
          className=' absolute top-0 right-0 z-0'
        />
        <div className='flex justify-between items-center gap-8 z-5'>
          <div className='flex flex-col justify-center items-start space-y-8 w-full max-w-lg'>
            <span className='font-bold text-xl'>
              Book your space now
            </span>
            <span className='font-bold text-5xl'>
              Save <span className='text-[#108A00]'>big</span> on your workspace
            </span>
            <span>
              Rent the perfect space. Unbeatable prices, square footage, flexible usage hours and much more.
            </span>
            <div className='flex w-full justify-start gap-4 items-center'>
              <Link href='/#book'>
                <Button
                  variant='contained'
                  className='bg-[#108A00] text-white hover:bg-[#108A00cc]'
                  style={{
                    fontWeight: 'bold',
                    padding: '1rem 2rem',
                    backgroundColor: '#108A00'
                  }}
                >
                  Book Now <CheckCircleIcon className='ml-2' />
                </Button>
              </Link>
              <Link href='/#info'>
                <Button
                  variant='contained'
                  className='bg-black hover:bg-transparent hover:border-4 hover:outline-double outline-black border-black hover:text-black text-white'
                  style={{
                    fontWeight: 'bold',
                    padding: '1rem 2rem',
                    backgroundColor: '#44403C'
                  }}
                >
                  Learn More <ArrowForwardIosIcon className='ml-2' />
                </Button>
              </Link>
            </div>
          </div>
          <Image  
            src={officeImage}
            alt="Office Space"
            width={500}
            height={500}
            className='z-50'
          />
        </div>
      </section>
    )
}
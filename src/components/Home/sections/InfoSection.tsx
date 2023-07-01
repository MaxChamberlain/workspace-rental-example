import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';

export default function InfoSection(){
    return(
        <section id='info' className='w-full flex flex-col justify-center items-center gap-4 dark:text-stone-100 text-black pb-64'>
            <span className='font-semibold text-xl'>
                Plan your meeting for your team
            </span>
            <span className='font-bold text-5xl'>
                Quick and easy office bookings
            </span>
            <div className='flex justify-between w-full max-w-5xl items-center mt-16'>
            <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                <div className='bg-[#108A0044] text-4xl p-8 rounded-full flex flex-col justify-center items-center gap-4'>
                <MapsHomeWorkIcon className='text-[#108A00] text-6xl' />
                </div>
                <span className='font-bold text-2xl'>
                    Pick a space
                </span>
                <span className='text-base text-center w-72'>
                    We offer a range of office spaces to fit exactly what your team needs. Why settle for less?
                </span>
            </div>
            <div className='flex flex-col justify-around items-center gap-4 -mt-8'>
                <div className='bg-[#108A0044] text-4xl p-8 rounded-full flex flex-col justify-center items-center gap-4'>
                <BookIcon className='text-[#108A00] text-6xl' />
                </div>
                <span className='font-bold text-2xl'>
                    Book your time
                </span>
                <span className='text-base text-center w-72'>
                Our intuitive booking system is easy to use and allows you to book your space in seconds
                </span>
            </div>
            <div className='flex flex-col justify-around items-center gap-4 mt-4'>
                <div className='bg-[#108A0044] text-4xl p-8 rounded-full flex flex-col justify-center items-center gap-4'>
                <WorkIcon className='text-[#108A00] text-6xl' />
                </div>
                <span className='font-bold text-2xl'>
                Work together
                </span>
                <span className='text-base text-center w-72'>
                Our spaces are designed to help your team work together and get the most out of your time, with no interruptions
                </span>
            </div>
            </div>
        </section>
    )
}
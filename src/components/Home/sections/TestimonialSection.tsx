import { useState } from 'react'
import workspaceArray from '../../../assets/arrays/workspaceSizes.json'
import TestimonialCard from '@/components/TestimonialCard'
import bezos from '../../../assets/images/bezos.webp'
import musk from '../../../assets/images/musk.webp'

export default function TestimonialSection(){
    return(
      <section id='info' className='w-full flex flex-col justify-center items-center gap-4 dark:text-stone-100 text-black pb-48 pt-32 bg-zinc-100'>
        <span className='font-semibold xl:text-xl text-lg text-center'>
            Reviewed by People
        </span>
        <span className='font-bold 2xl:text-5xl xl:text-3xl text-2xl text-center'>
            Client&apos;s Testimonials
        </span>
        <span className='text-sm xl:text-base text-center max-w-xs xl:max-w-xl'>
            Discover the positive impact we&apos;ve made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they&apos;re eager to share their positive experiences with you.
        </span>
        <div className='flex justify-center flex-col xl:flex-row w-full items-center gap-8 mt-8 xl:mt-24 px-8 xl:px-0'>
            <TestimonialCard 
                quote='I would not be where I am today with Amazon were it not for my start in Workspace Rentals offices'
                name='Jeff Bezos'
                //@ts-ignore
                rentedSpace={workspaceArray.find(e => e.size === 200)}
                userImage={bezos.src}
                rating={4}
            />
            <TestimonialCard 
                quote='I thoroughly enjoyed my time at Workspace Rentals. I was able to focus on my work and get things done without any distractions.'
                name='Elon Musk'
                //@ts-ignore
                rentedSpace={workspaceArray.find(e => e.size === 600)}
                userImage={musk.src}
                rating={5}
            />
        </div>
    </section>
    )
}
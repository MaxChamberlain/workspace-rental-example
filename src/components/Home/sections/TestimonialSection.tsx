import { useState } from 'react'
import workspaceArray from '../../../assets/arrays/workspaceSizes.json'
import TestimonialCard from '@/components/TestimonialCard'
import bezos from '../../../assets/images/bezos.jpg'
import musk from '../../../assets/images/musk.jpg'

export default function TestimonialSection(){
    return(
      <section id='info' className='w-full flex flex-col justify-center items-center gap-4 dark:text-stone-100 text-black pb-48 pt-32 bg-zinc-100'>
        <span className='font-semibold text-xl'>
            Reviewed by People
        </span>
        <span className='font-bold text-5xl'>
            Client&apos;s Testimonials
        </span>
        <span className='text-base text-center max-w-xl'>
            Discover the positive impact we&apos;ve made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they&apos;re eager to share their positive experiences with you.
        </span>
        <div className='flex justify-center w-full items-center gap-8 mt-24'>
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
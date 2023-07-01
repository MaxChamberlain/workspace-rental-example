import { useState } from 'react'
import workspaceArray from '../../../assets/arrays/workspaceSizes.json'
import theMiniImage from '../../../assets/svgs/the_mini.svg'
import Image from 'next/image'

export default function OptionsSection(){
    const [ selectedRoom, setSelectedRoom ] = useState(workspaceArray[0])
    return(
      <section id='info' className='w-full flex flex-col justify-center items-center gap-4 dark:text-stone-100 text-black pb-12 xl:pb-48'>
        <span className='font-semibold xl:text-xl text-lg text-center'>
            Office Models
        </span>
        <span className='font-bold 2xl:text-5xl xl:text-3xl text-2xl text-center'>
            Our arsenal
        </span>
        <span className='text-sm xl:text-base text-center max-w-xs xl:max-w-xl'>
            Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
        </span>
        <div className='flex justify-between flex-col gap-12 xl:flex-row xl:gap-0 w-full max-w-xl xl:max-w-7xl items-start mt-16 h-fit px-8 xl:px-0'>
            <div className='flex flex-col justify-center items-center gap-2 w-full xl:w-fit'>
                {workspaceArray.map((room, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center gap-2 py-4 px-12 rounded-lg cursor-pointer w-full ${selectedRoom === room ? 'bg-[#108A00] text-white' : 'bg-stone-200 text-black'}`} onClick={() => setSelectedRoom(room)}>
                        <span className='font-bold text-xl'>
                            The {room.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className='flex-col justify-center items-center gap-2 hidden xl:flex'>
                <Image
                    src={theMiniImage}
                    alt='The Mini'
                    width={400}
                    height={400}
                />
            </div>
            <div className='flex flex-col justify-center w-full xl:w-fit items-center border-2 border-[#108A00] h-full'>
                <div className='bg-[#108A00] text-xl py-4 px-16 flex text-white flex-col w-full justify-center items-center gap-4'>
                    ${selectedRoom.hour_price} / cost per hour
                </div>
                <div className='w-full grid grid-cols-7 p-2 text-center border-b-2 border-[#108A00]'>
                    <span className='text-center col-span-2'>
                        Model
                    </span>
                    <span className='text-center'>
                        |
                    </span>
                    <span className='text-center col-span-4'>
                        The {selectedRoom.name}
                    </span>
                </div>
                <div className='w-full grid grid-cols-7 p-2 text-center border-b-2 border-[#108A00]'>
                    <span className='text-center col-span-2'>
                        Size
                    </span>
                    <span className='text-center'>
                        |
                    </span>
                    <span className='text-center col-span-4'>
                        {selectedRoom.size} Square Feet
                    </span>
                </div>
                <div className='w-full grid grid-cols-7 p-2 text-center border-b-2 border-[#108A00]'>
                    <span className='text-center col-span-2'>
                        Discount
                    </span>
                    <span className='text-center'>
                        |
                    </span>
                    <span className='text-center col-span-4'>
                        ${selectedRoom.per_hour_reduction_scale * selectedRoom.hour_price} / hour
                    </span>
                </div>
                <div className='w-full grid grid-cols-7 p-2 text-center border-b-2 border-[#108A00]'>
                    <span className='text-center col-span-2'>
                        WiFi
                    </span>
                    <span className='text-center'>
                        |
                    </span>
                    <span className='text-center col-span-4'>
                        {selectedRoom.wifi} mb/s
                    </span>
                </div>
                <div className='w-full grid grid-cols-7 p-2 text-center border-b-2 border-[#108A00]'>
                    <span className='text-center col-span-2'>
                        Sound System
                    </span>
                    <span className='text-center'>
                        |
                    </span>
                    <span className='text-center col-span-4'>
                        {selectedRoom.sound_system} speakers
                    </span>
                </div>
                <div className='w-full grid grid-cols-7 p-2 text-center'>
                    <span className='text-center col-span-2'>
                        TV&apos;s
                    </span>
                    <span className='text-center'>
                        |
                    </span>
                    <span className='text-center col-span-4'>
                        {selectedRoom.tv} HDTV&apos;s
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}
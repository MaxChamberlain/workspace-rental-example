export default function TestimonialCard({
    quote,
    name,
    rentedSpace,
    userImage,
    rating
}: {
    quote: string
    name: string
    rentedSpace: Workspace
    userImage: string
    rating: number
}){
    return(
        <div className='p-14 bg-white drop-shadow-lg h-fit xl:h-[24rem] rounded flex flex-col justify-between place-items-center w-full xl:w-[34rem]'>
            <span className='text-2xl'>
                &quot;{quote}&quot;
            </span>
            <div className='flex justify-between flex-col-reverse xl:flex-row items-center w-full mt-8'>
                <div className='flex gap-2 items-center'>
                    <div className='w-16 h-16 overflow-hidden' style={{
                        borderRadius: '50%',
                        backgroundImage: `url(${userImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='text-xl font-bold'>
                            {name}
                        </span>
                        <span className='text-lg'>
                            {rentedSpace.name}
                        </span>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='text-2xl font-bold'>
                        {rating}
                    </span>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[${rating > 0 ? '#FFD700' : '#ccc'}]`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1l2.598 6.764h6.702l-5.428 4.198 2.598 6.764L10 13.536l-6.47 4.19 2.598-6.764L1.7 7.764h6.702L10 1z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[${rating > 1 ? '#FFD700' : '#ccc'}]`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1l2.598 6.764h6.702l-5.428 4.198 2.598 6.764L10 13.536l-6.47 4.19 2.598-6.764L1.7 7.764h6.702L10 1z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[${rating > 2 ? '#FFD700' : '#ccc'}]`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1l2.598 6.764h6.702l-5.428 4.198 2.598 6.764L10 13.536l-6.47 4.19 2.598-6.764L1.7 7.764h6.702L10 1z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[${rating > 3 ? '#FFD700' : '#ccc'}]`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1l2.598 6.764h6.702l-5.428 4.198 2.598 6.764L10 13.536l-6.47 4.19 2.598-6.764L1.7 7.764h6.702L10 1z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[${rating > 4 ? '#FFD700' : '#ccc'}]`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1l2.598 6.764h6.702l-5.428 4.198 2.598 6.764L10 13.536l-6.47 4.19 2.598-6.764L1.7 7.764h6.702L10 1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
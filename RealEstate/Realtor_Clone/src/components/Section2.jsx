import React from 'react'

export default function Section2() {
    return (
        <div className='flex justify-center pt-12 px-8 sm:px-16'>
            <div className='w-full max-w-screen-2xl flex flex-col-reverse md:flex-row gap-12'>
                <div className='w-0 md:w-[5%]'></div>
                <div className='w-full md:w-[40%] flex flex-col gap-12'>
                    <h1 className='text-5xl font-bold'>Check out our New Offers</h1>
                    <p className='text-lg'>Most people have been to some bad ones, briefly. Those are the ones that resemble slightly glorified spreadsheets and display million dollar homes as the first entry. Those websites are unappealing for a couple reasons.
                    </p>
                </div>
                <div className='w-full md:w-[50%] flex justify-center'>
                    <img className='h-[75%] object-cover' src='https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
            </div>
        </div>
    )
}
import React from 'react'

interface PopularBodyProps {
    title: string
}

const PopularBody = ({title}: PopularBodyProps) => {
    return (
        <main className='mt-[64px] flex w-full items-start'>
            <section className='flex justify-center w-full items-start'>
                <div className='flex w-full items-start'>
                    <div className='max-w-[1400px] w-full px-[40px] py-[30px] flex-wrap items-start'>
                        <div className='w-full mb-[20px] '>
                            <h2 className='text-[22.4px]'>{title}</h2>
                        </div>
                        <div className='w-full flex items-start'></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PopularBody
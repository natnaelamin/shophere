import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <div className='grid gap-10 grid-cols-2 pt-20 px-24'>
      <div className='text-white px-5 grid gap-3'>
        <h1 className='text-6xl font-bold text-white'>Don&apos;t Miss Out! 
            <span className='text-purple-500 italic'> 50%</span>  Off Sale
        </h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis amet cumque,
             minus suscipit expedita placeat. Asperiores quo consequuntur quam sequi expedita,
              dolores consectetur, quas, animi ullam totam repellendus. Magnam!</p>
        <div className='flex  gap-3'>
            <Button className='border bg-gradient-to-r from-violet-900 hover:from-violet-500 to-pink-700 hover:to-pink-500 px-8 rounded-xl'>Shop Now</Button>
            <Button className='border bg-gradient-to-r from-violet-900 hover:from-violet-500 to-pink-700 hover:to-pink-500 px-8 rounded-xl'>Explore More</Button>
        </div>
      </div>
      <div >
        <Image className=' rounded-xl'
        src="/images/Online-market.jpg"
        alt='market'
        height={700}
        width={700}/>
      </div>
    </div>
  )
}

export default HeroSection

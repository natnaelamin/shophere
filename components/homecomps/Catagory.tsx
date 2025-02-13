import { getAllCatagory } from '@/request/request'
import React from 'react'

const Catagory = async () => {
    const catagories: string[] = await getAllCatagory()

  return (
    <div className='py-16 mt-24'>
      <h1 className='text-center font-bold text-white text-3xl'>Shop by Catagory</h1>
      <div className='w-4/5 mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10'>
        {catagories.map((catagory) =>(
            <div key={catagory} className='text-center px-5 py-2 rounded-xl cursor-pointer 
             hover:scale-110 transition-all bg-gradient-to-r from-violet-900 hover:from-violet-500
              to-pink-700 hover:to-pink-500'>
                <h1 className='text-white text-lg'>{catagory}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Catagory

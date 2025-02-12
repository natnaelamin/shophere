import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className='w-full h-[60vh] bg-slate-900 flex flex-col items-center justify-center'>
        <Image src="/images/success.jpg" alt='success imgage' height={300} width={300} className="mt-16 rounded-xl"/>
        <h1 className='mb-8 mt-2 tet-3xl font-semibold uppercase text-green-600'>
            Order Successful
        </h1>
        <Link href="/">
            <button className='text-lg bg-gradient-to-r from-violet-900 hover:from-violet-500 to-pink-700 hover:to-pink-500 px-8 rounded-xl'>Go To Home</button>
        </Link>
    </div>
  )
}

export default SuccessPage
